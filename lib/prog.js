'use strict';
/* Общие помощники книги «Программирование»: робот на поле, программа-список, блоки-пазлы, блок-схема, план занятия,
   слайд практики. Подключается после engine.js. Имена с префиксом pg / PC, чтобы не совпадать с глобалами движка.
   Все помощники рисуют в переданную группу и только ставят твины на общей шкале (tw/show/draw), без Math.random и часов. */

/* ---------- цвета курса (одинаковые во всех главах) ---------- */
const PC = { cmd: COL.whole, cond: COL.task, loop: COL.good, data: COL.real, meta: COL.dim, bad: COL.bad, practice: '#ff7ac8',
  ink: '#14201c', stone: '#4b402c', floor: '#2f443c', wall: '#c2a66b', flag: COL.int, card: '#22322d', edge: '#3a5047' };
const PG_MONO = '"Cascadia Mono",Consolas,"Courier New",monospace';
const PG_CMD = { F: 'forward', L: 'turn left', R: 'turn right' };
const pgRaz = n => n === 1 ? 'time' : 'times';
const pgCol = n => 'ABCDEFGHI'[n];

/* ---------- мелкие фигуры ---------- */
const pgRect = (p, x, y, w, h, fill, { rx = 14, stroke = 'none', sw = 0, o = 1 } = {}) => {
  const g = G(p, { x, y, o });
  mk('rect', { width: w, height: h, rx, fill, stroke, 'stroke-width': sw }, g);
  return g;
};
const pgPill = (p, str, x, y, fill, ink = PC.ink, { size = 38, pad = 26, h = 64, o = 0, weight = 700 } = {}) => {   // плашка с текстом по центру x
  const w = uiW(str, size) + pad * 2, g = G(p, { x, y, o });
  mk('rect', { x: -w / 2, y: -h / 2, width: w, height: h, rx: h / 2, fill }, g);
  T(g, str, { y: size * .36, size, fill: ink, weight, anchor: 'middle' });
  g._w = w;
  return g;
};
const pgCheckMark = (p, x, y, ok, { r = 1, o = 0 } = {}) => {   // ✓ или ✗, рисуются штрихом (draw)
  const d = ok ? 'M-18 0L-6 14L20 -16' : 'M-16 -16L16 16M16 -16L-16 16';
  return path(p, d, { stroke: ok ? COL.chalk : COL.bad, 'stroke-width': 9 }, { x, y, s: r, d: 0 });
};
const pgFlagShape = (p, x, y, s = 1, o = 1) => {   // флажок финиша: древко и вымпел
  const g = G(p, { x, y, s, o });
  path(g, 'M-14 36V-40', { stroke: COL.chalk, 'stroke-width': 7 });
  mk('path', { d: 'M-14 -40L36 -22L-14 -4Z', fill: PC.flag, stroke: PC.flag, 'stroke-width': 4, 'stroke-linejoin': 'round' }, g);
  return g;
};
const pgGear = (p, x, y, r, fill, o = 1) => {   // значок «практика»
  const g = G(p, { x, y, o });
  mk('circle', { r: r * .78, fill: 'none', stroke: fill, 'stroke-width': r * .42, 'stroke-dasharray': `${r * .38} ${r * .38}`, 'stroke-dashoffset': 0 }, g);
  mk('circle', { r: r * .6, fill }, g);
  mk('circle', { r: r * .26, fill: PC.ink }, g);
  return g;
};
const pgPointer = (p, x, y) => {   // указатель ▶ (центр в x,y)
  const g = G(p, { x, y, o: 0 });
  mk('path', { d: 'M-14 -20L20 0L-14 20Z', fill: COL.chalk }, g);
  return g;
};

/* ---------- лабиринт: данные и симулятор ---------- */
// Карта — строки символов: . пусто, # стена-блок, > v < ^ старт и направление, F флажок, $ монета.
const PG_DX = [1, 0, -1, 0], PG_DY = [0, 1, 0, -1];   // 0 восток, 1 юг, 2 запад, 3 север; направо = +1
function pgMaze(rows) {
  const m = { rows: rows.length, cols: rows[0].length, g: rows.map(r => [...r].map(c => (c === '#' ? '#' : '.'))), start: null, flag: null, coins: [] };
  rows.forEach((r, y) => [...r].forEach((c, x) => {
    const d = '>v<^'.indexOf(c);
    if (d >= 0) m.start = { x, y, d };
    else if (c === 'F') m.flag = { x, y };
    else if (c === '$') m.coins.push({ x, y });
  }));
  return m;
}
const pgFree = (m, x, y, d) => { const nx = x + PG_DX[d], ny = y + PG_DY[d]; return nx >= 0 && ny >= 0 && nx < m.cols && ny < m.rows && m.g[ny][nx] !== '#'; };
const pgCell = (m, x, y) => pgCol(x) + (m.rows - y);                       // A1 — слева внизу
const pgArrowCh = d => ['→', '↓', '←', '↑'][d];
const pgDirName = d => ['right', 'down', 'left', 'up'][d];

// Программа: массив узлов {t:'F'|'L'|'R'} | {t:'rep', n, body} | {t:'until', c, body} | {t:'while', c, body} | {t:'if', c, then, else}.
// {t:'F', n:3} — три шага одной командой (forward(3) в главе 2).
// Условия c: 'flag' (робот у флажка), 'free' (впереди свободно), 'wall' (впереди стена), 'left' / 'right' (слева / справа свободно).
// until — «повторять, пока не c»; while — «пока c».
const F_ = { t: 'F' }, L_ = { t: 'L' }, R_ = { t: 'R' };
const pgProg = s => [...s].map(c => ({ t: c }));
function pgId(list, k = { n: 0 }) {            // нумерует узлы обходом в глубину, возвращает тот же список
  list.forEach(n => { n.id = k.n++; pgId(n.body || [], k); pgId(n.then || [], k); pgId(n.else || [], k); });
  return list;
}
function pgExec(m, prog, { max = 300, detect = true } = {}) {
  const s = { ...m.start }, evs = [], seen = new Set(), STOP = {};
  let status = 'end';
  const ev = e => { evs.push({ ...e, x: s.x, y: s.y, d: s.d }); if (evs.length >= max) { status = 'limit'; throw STOP; } };
  const CND = { flag: () => s.x === m.flag.x && s.y === m.flag.y, free: () => pgFree(m, s.x, s.y, s.d), wall: () => !pgFree(m, s.x, s.y, s.d),
    left: () => pgFree(m, s.x, s.y, (s.d + 3) % 4), right: () => pgFree(m, s.x, s.y, (s.d + 1) % 4) };
  const cond = c => { if (!CND[c]) throw new Error('pgExec: нет условия ' + c); return CND[c](); };
  const run = list => list.forEach(n => {
    if (n.t === 'F') for (let k = 0; k < (n.n ?? 1); k++) {   // {t:'F', n:3} — forward(3) в главе 2
      if (!pgFree(m, s.x, s.y, s.d)) { ev({ t: 'act', c: 'F', id: n.id, crash: true }); status = 'crash'; throw STOP; }
      s.x += PG_DX[s.d]; s.y += PG_DY[s.d]; ev({ t: 'act', c: 'F', id: n.id });
    } else if (n.t === 'L' || n.t === 'R') { s.d = (s.d + (n.t === 'R' ? 1 : 3)) % 4; ev({ t: 'act', c: n.t, id: n.id }); }
    else if (n.t === 'rep') for (let i = 1; i <= n.n; i++) { ev({ t: 'iter', id: n.id, n: i }); run(n.body); }
    else if (n.t === 'if') { const v = cond(n.c); ev({ t: 'chk', id: n.id, go: v }); run(v ? n.then : (n.else || [])); }
    else for (let i = 1; ; i++) {                           // until / while
      const go = n.t === 'until' ? !cond(n.c) : cond(n.c);
      ev({ t: 'chk', id: n.id, go });
      if (!go) break;
      const key = `${n.id}:${s.x},${s.y},${s.d}`;
      if (detect && seen.has(key)) { status = 'loop'; throw STOP; }
      seen.add(key);
      ev({ t: 'iter', id: n.id, n: i }); run(n.body);
    }
  });
  try { run(prog); } catch (e) { if (e !== STOP) throw e; }
  return { evs, status, end: { x: s.x, y: s.y, d: s.d }, win: s.x === m.flag?.x && s.y === m.flag?.y };
}

/* ---------- поле с роботом ---------- */
function pgField(p, m, { x = 0, y = 0, cell = 120, coords = false, o = 1, flag = true } = {}) {
  const g = G(p, { x, y, o }), F = { g, m, cell, W: m.cols * cell, H: m.rows * cell };
  F.pos = (cx, cy) => [cx * cell + cell / 2, cy * cell + cell / 2];
  const wall = [];
  for (let cy = 0; cy < m.rows; cy++) for (let cx = 0; cx < m.cols; cx++) {
    const stone = m.g[cy][cx] === '#';
    mk('rect', { x: cx * cell + 2, y: cy * cell + 2, width: cell - 4, height: cell - 4, rx: 8, fill: stone ? PC.stone : PC.floor }, g);
    if (stone) continue;
    const [x0, y0] = [cx * cell, cy * cell];
    for (let d = 0; d < 4; d++) if (!pgFree(m, cx, cy, d)) wall.push([[`M${x0 + cell} ${y0}V${y0 + cell}`, `M${x0} ${y0 + cell}H${x0 + cell}`, `M${x0} ${y0}V${y0 + cell}`, `M${x0} ${y0}H${x0 + cell}`][d]]);
  }
  if (wall.length) path(g, wall.join(''), { stroke: PC.wall, 'stroke-width': 9, 'stroke-linecap': 'square' });
  if (coords) {
    for (let cx = 0; cx < m.cols; cx++) T(g, pgCol(cx), { x: cx * cell + cell / 2, y: F.H + 44, size: 38, fill: COL.dim, weight: 700, anchor: 'middle' });
    for (let cy = 0; cy < m.rows; cy++) T(g, String(m.rows - cy), { x: -26, y: cy * cell + cell / 2 + 13, size: 38, fill: COL.dim, weight: 700, anchor: 'middle' });
  }
  F.coins = m.coins.map(c => { const [px, py] = F.pos(c.x, c.y), e = G(g, { x: px, y: py }); mk('circle', { r: cell * .2, fill: PC.data, stroke: PC.ink, 'stroke-width': 4 }, e); return e; });
  if (flag && m.flag) { const [px, py] = F.pos(m.flag.x, m.flag.y); F.flag = pgFlagShape(g, px, py - 2, cell / 120); }
  if (m.start) {
    const [px, py] = F.pos(m.start.x, m.start.y), r = cell * .3;
    F.robot = G(g, { x: px, y: py, r: m.start.d * 90 });
    mk('path', { d: `M${r * .8} ${-r * .55}L${r * 1.6} 0L${r * .8} ${r * .55}Z`, fill: COL.chalk, stroke: COL.chalk, 'stroke-width': 4, 'stroke-linejoin': 'round' }, F.robot);
    mk('circle', { r, fill: COL.chalk }, F.robot);
    mk('path', { d: `M${-r * .1} ${-r * .5}L${r * .5} 0L${-r * .1} ${r * .5}`, fill: 'none', stroke: PC.ink, 'stroke-width': 7, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, F.robot);
  }
  F.ring = (cx, cy, color = PC.flag) => { const [px, py] = F.pos(cx, cy), e = G(g, { x: px, y: py, o: 0 }); mk('rect', { x: -cell / 2 + 6, y: -cell / 2 + 6, width: cell - 12, height: cell - 12, rx: 14, fill: 'none', stroke: color, 'stroke-width': 9 }, e); return e; };
  F.at = (cx, cy) => { const [px, py] = F.pos(cx, cy); return { x: px, y: py }; };
  return F;
}
// Играет события симулятора: робот и подсветка идут синхронно. on(ev, t, dur) — крючок (указатель списка, счётчики).
// Возвращает время конца. Угол накапливается, чтобы поворот шёл на ±90°, а не «через оборот».
function pgRun(F, evs, t0, { per = .8, chk = .55, on, from = 0, to = evs.length } = {}) {
  let t = t0, ang = F.m.start.d * 90;
  evs.slice(0, from).forEach(e => { if (e.t === 'act') ang += e.c === 'L' ? -90 : e.c === 'R' ? 90 : 0; });
  evs.slice(from, to).forEach((ev, k) => {
    const dur = ev.t === 'act' ? per : ev.t === 'chk' ? chk : 0;
    if (ev.t === 'act') {
      if (ev.c === 'L') ang -= 90; else if (ev.c === 'R') ang += 90;
      if (ev.crash) {
        const [px, py] = F.pos(ev.x, ev.y), s = F.cell * .3;
        tw(F.robot, { x: px + PG_DX[ev.d] * s, y: py + PG_DY[ev.d] * s }, t, dur * .45, out);
        tw(F.robot, { x: px, y: py }, t + dur * .5, dur * .45, io);
      } else if (ev.c === 'F') { const [px, py] = F.pos(ev.x, ev.y); tw(F.robot, { x: px, y: py }, t, dur * .92, io); }
      else tw(F.robot, { r: ang }, t, dur * .92, io);
    }
    on?.(ev, t, dur, from + k);
    t += dur;
  });
  return t;
}
// индекс события, после которого прошло n действий (для деления прогона на шаги)
const pgCut = (evs, n) => { let c = 0; for (let i = 0; i < evs.length; i++) { if (evs[i].t === 'act' && ++c > n) return i; } return evs.length; };
const pgPer = (n, t0, tEnd, max = .8) => Math.min(max, Math.max(.3, (tEnd - t0 - .3) / Math.max(1, n)));   // скорость под окно между метками

/* ---------- программа-список с указателем ---------- */
function pgList(p, rows, { x = 0, y = 0, w = 520, size = 40, rowH = 66, title, o = 1 } = {}) {
  const top = title ? 78 : 18, h = top + rows.length * rowH + 20, g = G(p, { x, y, o });
  mk('rect', { width: w, height: h, rx: 22, fill: PC.card, stroke: PC.edge, 'stroke-width': 4 }, g);
  if (title) T(g, title, { x: 34, y: 54, size: 36, fill: COL.dim, weight: 700 });
  const L = { g, rows: [], rowH, top, w, x, y };
  rows.forEach((r, i) => {
    const e = G(g, { x: 0, y: top + i * rowH }), bar = G(e, { o: 0 });
    mk('rect', { x: 12, y: 3, width: w - 24, height: rowH - 6, rx: 10, fill: 'rgba(236,232,220,.22)' }, bar);
    mk('rect', { x: 34, y: 14, width: 10, height: rowH - 28, rx: 4, fill: r.color || PC.cmd }, e);
    T(e, `${i + 1}`, { x: 66, y: rowH / 2 + size * .35, size, fill: COL.dim, weight: 600 });
    const tx = T(e, r.txt, { x: 118, y: rowH / 2 + size * .35, size, weight: 600 });
    L.rows.push({ g: e, bar, tx, y: top + i * rowH });
  });
  L.ptr = pgPointer(g, 20, top + rowH / 2);
  L.at = (i, t, dur = .2) => {                       // указатель и полоса переходят на строку i
    tw(L.ptr, { o: 1, y: top + i * rowH + rowH / 2 }, t, dur);
    L.rows.forEach((r, k) => { if (k === i) tw(r.bar, { o: 1 }, t, .1); else if (k === i - 1 || k === i + 1) tw(r.bar, { o: 0 }, t, .1); });
  };
  L.off = t => { tw(L.ptr, { o: 0 }, t, .2); L.rows.forEach(r => tw(r.bar, { o: 0 }, t, .15)); };
  L.bad = (i, t) => { tw(L.rows[i].tx, { c_fill: COL.bad }, t, .2); };
  return L;
}

/* ---------- блоки-пазлы ---------- */
// Рисует список узлов программы блоками (цвета: действие — синий, цикл — зелёный, условие — янтарный).
// Возвращает {g, h, w, hl: {id: подсветка}}; glow(id, t, dur) — вспышка блока на шкале.
const PG_COND = { empty: '\u2003'.repeat(5), nf: 'not finish', flag: 'finish', free: 'path ahead', wall: 'wall ahead' };
function pgBlocks(p, prog, { x = 0, y = 0, w = 500, h = 72, size = 42, tabs = false, o = 1, flagIcon = true } = {}) {
  const g = G(p, { x, y, o }), B = { g, hl: {}, els: {}, pos: {} }, bumps = [];
  const label = (str, ox, oy, fill = PC.ink) => T(g, str, { x: ox, y: oy + h / 2 + size * .35, size, fill, weight: 700 });
  const slot = (str, ox, oy, icon) => {                      // шестиугольный слот условия
    const tw_ = uiW(str, size - 4) + 44 + (icon ? 44 : 0), hh = h - 16;
    mk('path', { d: `M${ox + 22} ${oy + 8}H${ox + tw_ - 22}L${ox + tw_} ${oy + 8 + hh / 2}L${ox + tw_ - 22} ${oy + 8 + hh}H${ox + 22}L${ox} ${oy + 8 + hh / 2}Z`, fill: '#f4efe0' }, g);
    if (icon) pgFlagShape(g, ox + 36, oy + h / 2 + 4, .55);
    T(g, str, { x: ox + 22 + (icon ? 36 : 0), y: oy + h / 2 + (size - 4) * .35, size: size - 4, fill: PC.ink, weight: 700 });
    return tw_;
  };
  const rr = (ox, oy, ww, hh, fill) => mk('rect', { x: ox, y: oy, width: ww, height: hh, rx: 12, fill }, g);
  const glow = (ox, oy, ww, id) => { B.hl[id] = G(g, { o: 0 }); mk('rect', { x: ox - 4, y: oy - 4, width: ww + 8, height: h + 8, rx: 16, fill: 'none', stroke: COL.chalk, 'stroke-width': 8 }, B.hl[id]); };
  const stack = (list, ox, oy, ww) => {
    let yy = oy;
    list.forEach((n, i) => {
      const y0 = yy;
      if (PG_CMD[n.t]) {
        rr(ox, yy, ww, h, PC.cmd); label(PG_CMD[n.t], ox + 22, yy); glow(ox, yy, ww, n.id); yy += h;
      } else {
        const col = n.t === 'if' ? PC.cond : PC.loop;
        const head = n.head ?? (n.t === 'rep' ? `repeat ${n.n} ${pgRaz(n.n)}` : n.t === 'until' ? 'repeat until' : n.t === 'while' ? 'while' : 'if');
        const hw = uiW(head, size) + 44, sw = n.c ? uiW(PG_COND[n.c], size - 4) + 44 + (n.c === 'flag' && flagIcon ? 44 : 0) : 0;
        const body = (list_, oy_) => {
          if (list_.length) return stack(list_, ox + 40, oy_, ww - 40);
          mk('rect', { x: ox + 40, y: oy_, width: ww - 60, height: h, rx: 10, fill: '#16211e' }, g);   // пустой слот
          return h;
        };
        const headW = Math.max(ww, hw + sw + 20);
        rr(ox, yy, headW, h, col); label(head, ox + 22, yy); if (n.c) slot(PG_COND[n.c], ox + hw + 4, yy, n.c === 'flag' && flagIcon);
        glow(ox, yy, headW, n.id);
        const bh = body(n.t === 'if' ? n.then : n.body, yy + h);
        rr(ox, yy + h, 40, bh, col); B.pos[n.id] = { x: ox, y: yy, w: headW };
        let end = yy + h + bh;
        if (n.t === 'if' && n.else) { rr(ox, end, Math.max(220, ww * .5), h - 14, col); label('else', ox + 22, end - 7); const eh = body(n.else, end + h - 14); rr(ox, end + h - 14, 40, eh, col); end += h - 14 + eh; }
        rr(ox, end, Math.max(220, ww * .5), 26, col); yy = end + 26;
      }
      B.pos[n.id] ||= { x: ox, y: y0, w: ww };
      if (i < list.length - 1 || tabs) bumps.push([ox + 30, yy, list[i].t === 'if' ? PC.cond : PG_CMD[list[i].t] ? PC.cmd : PC.loop]);
      yy += 5;
    });
    return yy - oy - (list.length ? 5 : 0);
  };
  if (tabs) mk('rect', { x: 30, y: 0, width: 46, height: 12, fill: COL.board }, g);
  const total = stack(prog, 0, 0, w);
  bumps.forEach(([bx, by, c]) => mk('rect', { x: bx, y: by - 1, width: 46, height: 14, rx: 4, fill: c }, g));
  B.h = total; B.w = w;
  B.glow = (id, t, dur = .6) => { if (!B.hl[id]) throw new Error('pgBlocks: нет блока ' + id); tw(B.hl[id], { o: 1 }, t, .12); tw(B.hl[id], { o: 0 }, t + Math.max(.2, dur - .1), .12); };
  B.hold = (id, t) => tw(B.hl[id], { o: 1 }, t, .12);          // держит подсветку
  B.drop = (id, t) => tw(B.hl[id], { o: 0 }, t, .12);
  return B;
}

/* ---------- блок-схема ---------- */
function pgNode(p, kind, str, x, y, { w, h = 76, size = 36, fill, o = 0 } = {}) {
  const lines = str.split('\n'), g = G(p, { x, y, o });
  w ||= kind === 'dia' ? 380 : Math.max(...lines.map(s => uiW(s, size))) + 70;
  const col = fill || (kind === 'oval' ? PC.meta : kind === 'dia' ? PC.cond : PC.cmd);
  if (kind === 'oval') mk('rect', { x: -w / 2, y: -h / 2, width: w, height: h, rx: h / 2, fill: col }, g);
  else if (kind === 'rect') mk('rect', { x: -w / 2, y: -h / 2, width: w, height: h, rx: 10, fill: col }, g);
  else mk('path', { d: `M0 ${-h / 2}L${w / 2} 0L0 ${h / 2}L${-w / 2} 0Z`, fill: col, 'stroke-linejoin': 'round' }, g);
  lines.forEach((s, i) => T(g, s, { y: (i - (lines.length - 1) / 2) * size * 1.15 + size * .35, size, fill: PC.ink, weight: 700, anchor: 'middle' }));
  return { g, x, y, w, h, top: [x, y - h / 2], bot: [x, y + h / 2], left: [x - w / 2, y], right: [x + w / 2, y], shape: g };
}
// Стрелка по ломаной pts, наконечник в конце; label — подпись («да»/«нет») у начала. Рисуется draw(a.line, t, dur).
function pgArrow(p, pts, { color = COL.chalk, label, lx = 0, ly = 0, sw = 6, o = 1 } = {}) {
  const n = pts.length, [x1, y1] = pts[n - 2], [x2, y2] = pts[n - 1], a = Math.atan2(y2 - y1, x2 - x1), hl = 26;
  const d = 'M' + pts.map(q => q.join(' ')).join('L') + `M${x2 - hl * Math.cos(a - .5)} ${y2 - hl * Math.sin(a - .5)}L${x2} ${y2}L${x2 - hl * Math.cos(a + .5)} ${y2 - hl * Math.sin(a + .5)}`;
  const g = G(p, { o });
  const line = path(g, d, { stroke: color, 'stroke-width': sw }, { d: 0 });
  const lab = label ? T(g, label, { x: pts[0][0] + lx, y: pts[0][1] + ly, size: 38, fill: COL.chalk, weight: 700, anchor: 'middle', o: 0 }) : null;
  return { g, line, lab, show: (t, dur = .35) => { draw(line, t, dur); if (lab) show(lab, t + dur * .6, .2); } };
}
const pgLight = (a, t, color = COL.chalk) => tw(a.line, { c_stroke: color, 'a_stroke-width': 11 }, t, .25);   // подсветка пройденного пути
const pgNodeLight = (n, t) => { tw(n.g, { s: 1.08 }, t, .2, out); tw(n.g, { s: 1 }, t + .22, .3); };

/* ---------- план занятия (agenda): строки с подсветкой одной части ---------- */
// items: [{n:'1'|null, t, m, practice}]; hi — индекс подсвеченной строки (или -1: все строки появляются по одной с t0).
function pgAgenda(p, items, { hi = -1, t0 = .2, stagger = .09, title = 'Lesson plan', x = 90, y = 200, pitch = 66 } = {}) {
  const head = T(p, title, { x, y: 110, size: 60, weight: 700, o: 0 });
  show(head, .15);
  const rows = items.map((it, i) => {
    const g = G(p, { x, y: y + i * pitch, o: 0 }), on = i === hi;
    const bg = G(g, { o: on ? 1 : 0 });
    mk('rect', { x: -22, y: -42, width: 1480, height: 60, rx: 16, fill: 'rgba(236,232,220,.18)', stroke: it.practice ? PC.practice : COL.chalk, 'stroke-width': 4 }, bg);
    if (it.practice) pgGear(g, 14, -12, 24, PC.practice); else { mk('circle', { cx: 14, cy: -12, r: 24, fill: PC.meta }, g); T(g, it.n, { x: 14, y: 2, size: 36, fill: PC.ink, weight: 700, anchor: 'middle' }); }
    T(g, it.t, { x: 62, y: 0, size: 40, weight: 700, fill: it.practice ? PC.practice : COL.chalk });
    if (it.m) T(g, `${it.m} min`, { x: 1400, y: 0, size: 38, fill: COL.dim, weight: 600, anchor: 'end' });
    return { g, bg };
  });
  rows.forEach((r, i) => tw(r.g, { o: hi < 0 ? 1 : (i === hi ? 1 : .5) }, hi < 0 ? t0 + i * stagger : t0, hi < 0 ? .35 : .4));
  return { head, rows, light: (i, t) => { rows.forEach((r, k) => tw(r.bg, { o: k === i ? 1 : 0 }, t, .3)); } };
}

/* ---------- Python (с главы 2) ---------- */
// AST программы → строки Python [{s, id}] с отступом 4 пробела. Код на слайде и путь робота строятся из одного AST.
const PG_PY = { F: 'forward', L: 'turn_left', R: 'turn_right' };
const PG_PYC = { flag: 'at_flag()', free: 'path_ahead()', wall: 'not path_ahead()', left: 'path_left()', right: 'path_right()' };
function pgPy(list, ind = 0) {
  const pad = ' '.repeat(ind * 4), out = [];
  list.forEach(n => {
    if (PG_PY[n.t]) out.push({ s: `${pad}${PG_PY[n.t]}(${n.n > 1 ? n.n : ''})`, id: n.id });
    else if (n.t === 'rep') out.push({ s: `${pad}for i in range(${n.n}):`, id: n.id }, ...pgPy(n.body, ind + 1));
    else if (n.t === 'until' || n.t === 'while') out.push({ s: `${pad}while ${n.t === 'until' ? 'not ' : ''}${PG_PYC[n.c]}:`, id: n.id }, ...pgPy(n.body, ind + 1));
    else if (n.t === 'if') {                     // {t:'if', elif:true, else:[{t:'if', …}]} печатается как elif
      let k = n, kw = 'if';
      for (;;) {
        out.push({ s: `${pad}${kw} ${PG_PYC[k.c]}:`, id: k.id }, ...pgPy(k.then, ind + 1));
        if (k.elif && k.else?.length === 1 && k.else[0].t === 'if') { k = k.else[0]; kw = 'elif'; continue; }
        if (k.else) out.push({ s: `${pad}else:`, id: k.id }, ...pgPy(k.else, ind + 1));
        break;
      }
    }
  });
  return out;
}
// Раскраска строки кода цветами курса: вызов — синий, значения и переменные — фиолетовый, for/while — зелёный, if/elif/else — янтарный.
const PG_KW_LOOP = new Set(['for', 'while', 'in', 'range']), PG_KW_COND = new Set(['if', 'elif', 'else']);
function pgTokens(s) {
  const toks = [], re = /(\s+)|(#.*)|("[^"]*"?|'[^']*'?)|(\d+)|([A-Za-z_]\w*)|(.)/g, head = (s.match(/^\s*(\w+)/) || [])[1];
  let m;
  while ((m = re.exec(s))) {
    const [w, sp, rem, str, num, id] = m;
    let c = COL.chalk;
    if (sp) c = null;
    else if (rem) c = COL.dim;
    else if (str || num || id === 'True' || id === 'False') c = PC.data;
    else if (id && PG_KW_COND.has(id)) c = PC.cond;
    else if (id && PG_KW_LOOP.has(id)) c = PC.loop;
    else if (id === 'not' || id === 'and' || id === 'or') c = PG_KW_COND.has(head) ? PC.cond : PC.loop;
    else if (id) c = s[re.lastIndex] === '(' ? PC.cmd : PC.data;
    toks.push({ w, col: m.index, c });
  }
  return toks;
}
// Ячейка Colab: кнопка ▶ (или номер запуска [n]), строки кода, подсветка текущей строки, полоса вывода снизу.
// lines — строки или {s}; C.at(i, t) — подсветка строки i; C.off(t); C.set(i, s, t) — строка i заменяется на s;
// C.out(str, t, {bad, dy}) — вывод (bad — красная полоса ошибки; dy — сдвиг вниз для второго блока вывода).
function pgCode(p, lines, { x = 0, y = 0, w = 760, size = 40, rowH = Math.round(size * 1.6), count, o = 0 } = {}) {
  ctx2d.font = `700 ${size}px ${PG_MONO}`;
  const cw = ctx2d.measureText('0').width, g = G(p, { x, y, o }), top = 22, gut = 128;
  const h = top * 2 + lines.length * rowH, C = { g, x, y, w, h, cw, rowH, rows: [], gut };
  mk('rect', { width: w, height: h, rx: 20, fill: PC.card, stroke: PC.edge, 'stroke-width': 4 }, g);
  if (count === undefined) {
    C.btn = G(g, { x: 48, y: top + rowH / 2 });
    mk('circle', { r: 28, fill: COL.chalk }, C.btn); mk('path', { d: 'M-9 -14L15 0L-9 14Z', fill: PC.ink }, C.btn);
  } else C.count = T(g, `[${count}]`, { x: 54, y: top + rowH / 2 + size * .33, size: size * .85, fill: COL.dim, font: PG_MONO, weight: 700, anchor: 'middle' });
  const toks = (row, s) => pgTokens(s).filter(k => k.c).map(k => T(row, k.w, { x: gut + k.col * cw, y: rowH / 2 + size * .36, size, fill: k.c, font: PG_MONO, weight: 700 }));
  lines.forEach((l, i) => {
    const s = typeof l === 'string' ? l : l.s, ry = top + i * rowH, bar = G(g, { o: 0 }), row = G(g, { y: ry });
    mk('rect', { x: gut - 14, y: ry + 4, width: w - gut, height: rowH - 8, rx: 10, fill: 'rgba(236,232,220,.16)' }, bar);
    C.rows.push({ g: row, bar, toks: toks(row, s), y: ry });
  });
  C.set = (i, s, t) => {
    const r = C.rows[i], ng = G(g, { y: r.y, o: 0 });
    toks(ng, s); hide(r.g, t, .2); show(ng, t + .15, .25); r.g = ng;
  };
  C.ptr = pgPointer(g, gut - 24, top + rowH / 2);
  C.at = (i, t, dur = .2) => {
    tw(C.ptr, { o: 1, y: top + i * rowH + rowH / 2 }, t, dur);
    C.rows.forEach((r, k) => tw(r.bar, { o: k === i ? 1 : 0 }, t, .1));
  };
  C.off = t => { tw(C.ptr, { o: 0 }, t, .2); C.rows.forEach(r => tw(r.bar, { o: 0 }, t, .15)); };
  C.out = (str, t, { bad = false, size: os = size * .9, dy = 0 } = {}) => {
    const e = G(g, { y: h + 14 + dy, o: 0 }), oh = Math.round(os * 1.9);
    mk('rect', { width: w, height: oh, rx: 14, fill: bad ? 'rgba(255,107,107,.14)' : 'rgba(236,232,220,.08)', stroke: bad ? PC.bad : 'none', 'stroke-width': bad ? 4 : 0 }, e);
    T(e, str, { x: 28, y: oh / 2 + os * .36, size: os, fill: bad ? PC.bad : COL.chalk, font: PG_MONO, weight: 700 });
    show(e, t, .3);
    return e;
  };
  return C;
}
// Подсветка строк ячейки во время прогона робота: on-крючок для pgRun (строка находится по id узла программы).
const pgCodeHook = (C, lines) => (ev, t) => { if (ev.t === 'act' || ev.t === 'chk' || ev.t === 'iter') { const i = lines.findIndex(l => l.id === ev.id && (ev.t !== 'chk' || !l.s.trim().startsWith('else'))); if (i >= 0) C.at(i, t); } };

// Переменная-коробка: бирка с именем снизу, значение внутри. Значения — тексты в p (anchor middle), чтобы летать между коробкой и кодом.
// B.put(s, t) — новое значение падает сверху; B.take(e, t) — готовый текст e летит в коробку. Старое значение выпадает вниз.
function pgBox(p, name, x, y, { w = 240, h = 150, size = 72, o = 0 } = {}) {
  const g = G(p, { x, y, o }), B = { g, cur: null, cx: x + w / 2, cy: y + h / 2 + size * .36, size };
  path(g, `M0 0V${h}H${w}V0`, { stroke: PC.data, 'stroke-width': 8 });
  ctx2d.font = `700 40px ${PG_MONO}`;
  const tw_ = ctx2d.measureText(name).width + 44;
  mk('rect', { x: w / 2 - tw_ / 2, y: h + 18, width: tw_, height: 62, rx: 12, fill: PC.data }, g);
  T(g, name, { x: w / 2, y: h + 63, size: 40, fill: PC.ink, font: PG_MONO, weight: 700, anchor: 'middle' });
  B.take = (e, t, dur = .45) => {
    if (B.cur) tw(B.cur, { y: B.cy + h * .9, o: 0 }, t + dur * .5, .4);
    tw(e, { x: B.cx, y: B.cy }, t, dur, io); B.cur = e;
  };
  B.put = (s, t) => {
    const e = T(p, s, { x: B.cx, y: B.cy - 130, size, fill: PC.data, font: PG_MONO, weight: 700, anchor: 'middle', o: 0 });
    show(e, t, .2); B.take(e, t, .45);
    return e;
  };
  return B;
}
// Плашка значения: значение моноширинным шрифтом в рамке, справа — тип (int, str, bool).
function pgValue(p, v, x, y, { type, size = 60, o = 0 } = {}) {
  ctx2d.font = `700 ${size}px ${PG_MONO}`;
  const w = ctx2d.measureText(v).width + 64, h = size * 1.6, g = G(p, { x, y, o });
  mk('rect', { width: w, height: h, rx: 16, fill: PC.card, stroke: PC.data, 'stroke-width': 5 }, g);
  T(g, v, { x: w / 2, y: h / 2 + size * .36, size, fill: PC.data, font: PG_MONO, weight: 700, anchor: 'middle' });
  if (type) T(g, type, { x: w + 36, y: h / 2 + size * .3, size: size * .8, fill: COL.chalk, font: PG_MONO, weight: 700 });
  g._w = w; g._h = h;
  return g;
}

// След робота под ним: ломаная по центрам клеток cells=[[x,y],...], рисуется на шкале (t0, dur); closed — замкнуть.
function pgTrail(F, cells, t0, dur, { color = COL.chalk, width = 14, o = .45, closed = false } = {}) {
  const d = 'M' + cells.map(([x, y]) => F.pos(x, y).join(' ')).join('L') + (closed ? 'Z' : '');
  const e = path(F.g, d, { stroke: color, 'stroke-width': width, opacity: o }, { d: 0 });
  F.g.insertBefore(e, F.robot);
  tw(e, { d: 1 }, t0, dur, lin);
  return e;
}
