window.TIMINGS = {
 "intro": {
  "dur": 27.775,
  "marks": {
   "seq": 9.088,
   "branch": 11.888,
   "rep": 15.15
  },
  "cues": [
   [
    0.575,
    "This is lesson one, and there is no code in it yet."
   ],
   [
    3.175,
    "Instead, we look at how the steps of every program are organised."
   ],
   [
    6.575,
    "There are only three basic building blocks."
   ],
   [
    9.088,
    "A sequence: do things one after another."
   ],
   [
    11.888,
    "Branching: choose what to do depending on a condition."
   ],
   [
    15.15,
    "And repetition: do something again and again."
   ],
   [
    17.975,
    "It has been proved that any algorithm can be written with only these three, combined and nested inside each other."
   ],
   [
    24.125,
    "Real programs also use many other tools, for convenience."
   ]
  ]
 },
 "agenda": {
  "dur": 18.3,
  "marks": {
   "parts": 2.525
  },
  "cues": [
   [
    0.575,
    "The lesson has seven parts."
   ],
   [
    2.525,
    "First, what an algorithm is and who carries it out."
   ],
   [
    5.875,
    "Then the three building blocks one at a time: sequence, then visual programming as a way to write them, then repetition, then branching."
   ],
   [
    14.125,
    "Then we combine them, and finish with a summary and a first look at code."
   ]
  ]
 },
 "everyday": {
  "dur": 22.825,
  "marks": {
   "lab": 3.412,
   "route": 8.263,
   "atm": 13.238
  },
  "cues": [
   [
    0.575,
    "You follow step-by-step instructions every day."
   ],
   [
    3.412,
    "A lab method: measure the reagent, mix it with the sample, write down the result."
   ],
   [
    8.263,
    "A route: walk to the bus stop, take bus number five, get off at the third stop."
   ],
   [
    13.238,
    "A cash machine: insert the card, enter the PIN, choose the amount, take the card and the cash."
   ],
   [
    18.975,
    "They differ in length, but each one is a list of steps in a fixed order."
   ]
  ]
 },
 "define": {
  "dur": 32.9,
  "marks": {
   "steps": 2.212,
   "vague": 15.4,
   "def": 21.512
  },
  "cues": [
   [
    0.575,
    "Here is a recipe for tea."
   ],
   [
    2.212,
    "Boil the water."
   ],
   [
    3.2,
    "Put a tea bag in a cup."
   ],
   [
    4.513,
    "Pour in the boiling water."
   ],
   [
    5.837,
    "Wait three minutes."
   ],
   [
    7.188,
    "Add sugar to taste."
   ],
   [
    8.55,
    "A person can follow this easily."
   ],
   [
    10.6,
    "But imagine handing it to someone, or something, that does exactly what it is told and nothing more."
   ],
   [
    15.4,
    "\"To taste\" means nothing to it."
   ],
   [
    17.262,
    "How many spoons?"
   ],
   [
    18.375,
    "Zero, one, five?"
   ],
   [
    19.7,
    "The instruction does not say."
   ],
   [
    21.512,
    "An algorithm is a precise, step-by-step procedure for solving a problem or completing a task."
   ],
   [
    27.5,
    "Precise means that each step can be carried out in only one way, so nobody has to guess."
   ]
  ]
 },
 "word": {
  "dur": 22.55,
  "marks": {
   "book": 8.8,
   "latin": 15.075
  },
  "cues": [
   [
    0.55,
    "The word comes from a person's name."
   ],
   [
    2.912,
    "In the ninth century, the Persian scholar Muhammad ibn Musa al-Khwarizmi worked in Baghdad."
   ],
   [
    8.8,
    "He wrote a book on calculating with the Hindu-Arabic numerals, the digits zero to nine that we still use."
   ],
   [
    15.075,
    "When the book was translated into Latin, his name was written as Algoritmi, and from that name came the word algorithm."
   ]
  ]
 },
 "props": {
  "dur": 53.375,
  "marks": {
   "exact": 6.8,
   "finite": 17.125,
   "server": 26.975,
   "mass": 39.888
  },
  "cues": [
   [
    0.575,
    "Textbooks list the properties of an algorithm in slightly different ways."
   ],
   [
    4.487,
    "Here are the three that matter most to us."
   ],
   [
    6.8,
    "The first is precision."
   ],
   [
    8.413,
    "Each step has exactly one meaning for whoever carries it out."
   ],
   [
    12.075,
    "\"Add sugar to taste\" fails this test."
   ],
   [
    14.8,
    "\"Add two spoons of sugar\" passes."
   ],
   [
    17.125,
    "The second is finiteness."
   ],
   [
    18.913,
    "An algorithm that is supposed to give an answer must stop after a finite number of steps, because nobody gets the answer while it is still running."
   ],
   [
    26.975,
    "Some programs are meant to run for months, such as a web server or the controller of a traffic light."
   ],
   [
    32.05,
    "They keep working by repeating a task that finishes each time: answer one request, then the next one; switch the light, then switch it again."
   ],
   [
    39.888,
    "The third is generality."
   ],
   [
    41.55,
    "It marks a good algorithm, and some textbooks do not count it as a strict requirement."
   ],
   [
    46.312,
    "A general algorithm solves a whole class of problems: column addition works for any pair of numbers, whatever their size."
   ]
  ]
 },
 "props-q": {
  "dur": 26.55,
  "marks": {
   "answer": 11.35,
   "a2": 14.8,
   "a3": 21.9
  },
  "cues": [
   [
    0.575,
    "Here are three instructions."
   ],
   [
    1.9,
    "Which property does each one break?"
   ],
   [
    3.75,
    "\"Stir for a while.\" \"Repeat: take a step forward.\" And \"Add twelve and seven: the answer is nineteen.\" Think it over before the answer."
   ],
   [
    11.35,
    "\"Stir for a while\" does not say how long, so it is not precise."
   ],
   [
    14.8,
    "\"Repeat: take a step forward\" has nothing that ever stops it, so if we expect it to finish and give a result, it breaks finiteness."
   ],
   [
    21.9,
    "And \"add twelve and seven\" handles exactly one case, so it lacks generality."
   ]
  ]
 },
 "executor": {
  "dur": 99.6,
  "marks": {
   "cmds": 14.438,
   "ask": 25.0,
   "only": 33.062,
   "ski": 42.462,
   "computer": 59.487
  },
  "cues": [
   [
    0.575,
    "An algorithm is always written for someone or something that carries it out."
   ],
   [
    4.263,
    "In this course we will call it the executor."
   ],
   [
    6.65,
    "The executor of a recipe is a cook."
   ],
   [
    9.175,
    "Ours is a robot on a grid of cells, much like the one in the Maze game from Blockly Games."
   ],
   [
    14.438,
    "The robot knows only three commands."
   ],
   [
    16.775,
    "Forward: move one cell ahead."
   ],
   [
    19.038,
    "Turn left, and turn right: turn on the spot by a quarter turn, without moving to another cell."
   ],
   [
    25.0,
    "It can also answer a few yes or no questions about its surroundings, such as: is the path ahead clear?"
   ],
   [
    31.075,
    "We will need these questions later."
   ],
   [
    33.062,
    "What if we tell the robot: go to the flag?"
   ],
   [
    35.575,
    "It will not understand."
   ],
   [
    37.05,
    "There is no such command."
   ],
   [
    38.788,
    "Everything we want it to do must be built from the commands it knows."
   ],
   [
    42.462,
    "The full list of commands an executor understands is called its command set."
   ],
   [
    47.325,
    "So precision always depends on the executor: a step is precise only if this executor knows exactly how to carry it out."
   ],
   [
    54.85,
    "\"Add two spoons of sugar\" is precise for a person, but not for our robot."
   ],
   [
    59.487,
    "A computer is an executor too."
   ],
   [
    61.875,
    "Its processor has its own set of very simple commands, called the instruction set."
   ],
   [
    67.062,
    "A programming language such as Python lets us write in a form that is much easier for people."
   ],
   [
    73.05,
    "A special program, called an interpreter, then carries out that text for us, using the processor's own simple instructions."
   ],
   [
    80.038,
    "Instructions written in such a language are called a program."
   ],
   [
    83.375,
    "Usually a program carries out an algorithm, but the two words do not mean the same thing."
   ],
   [
    88.138,
    "A program does not have to stop: a web server runs for months on purpose, and a program with a bug can loop forever."
   ],
   [
    95.125,
    "Neither of these is an algorithm in the strict sense, yet both are programs."
   ]
  ]
 },
 "forms": {
  "dur": 53.775,
  "marks": {
   "words": 6.638,
   "chart": 12.55,
   "blocks": 29.025,
   "code": 33.45
  },
  "cues": [
   [
    0.6,
    "One algorithm can be written down in several ways."
   ],
   [
    3.612,
    "Let's take a tiny one: if it is raining, take an umbrella."
   ],
   [
    6.638,
    "In words."
   ],
   [
    7.562,
    "This is the most natural for people, but ordinary language is easy to read in more than one way."
   ],
   [
    12.55,
    "As a flowchart."
   ],
   [
    13.525,
    "A flowchart is a diagram."
   ],
   [
    15.263,
    "A rounded shape marks the start and the end."
   ],
   [
    17.663,
    "A rectangle is an action."
   ],
   [
    19.463,
    "A diamond is a question with two exits, yes and no."
   ],
   [
    22.738,
    "Arrows show the order."
   ],
   [
    24.325,
    "There is also a parallelogram, for input and output, which we will meet later."
   ],
   [
    29.025,
    "As blocks."
   ],
   [
    30.05,
    "The same logic is assembled from puzzle-like pieces with the mouse."
   ],
   [
    33.45,
    "And as code."
   ],
   [
    34.588,
    "This is Python, a real programming language."
   ],
   [
    37.538,
    "The line \"if rain:\" means: if it is raining."
   ],
   [
    40.5,
    "The line below it is shifted to the right, and that shift, called an indent, means: this part belongs inside the \"if\"."
   ],
   [
    47.05,
    "The names here, rain and take umbrella, are made up for the example."
   ],
   [
    50.975,
    "We will write real Python in the next lesson."
   ]
  ]
 },
 "part2": {
  "dur": 3.25,
  "marks": {},
  "cues": [
   [
    0.625,
    "Now the first building block: the sequence."
   ]
  ]
 },
 "sequence": {
  "dur": 24.35,
  "marks": {
   "f1": 11.6,
   "l": 14.388,
   "f2": 19.325,
   "done": 22.3
  },
  "cues": [
   [
    0.6,
    "In a sequence, the commands run one after another, from top to bottom, each exactly once."
   ],
   [
    5.562,
    "Here is a program of five commands."
   ],
   [
    7.763,
    "Follow the pointer: each line of the list is one action of the robot."
   ],
   [
    11.6,
    "Forward, forward: the robot is at C1."
   ],
   [
    14.388,
    "Turn left: it now faces up, and it is still at C1, because a turn does not move it."
   ],
   [
    19.325,
    "Forward, forward: C2, then C3."
   ],
   [
    22.3,
    "The robot has reached the flag."
   ]
  ]
 },
 "trace": {
  "dur": 17.2,
  "marks": {
   "rows": 4.938
  },
  "cues": [
   [
    0.6,
    "Running a program by hand, step by step, is called tracing."
   ],
   [
    4.938,
    "After each command we write down where the robot is and which way it faces."
   ],
   [
    9.763,
    "Tracing lets you check a program without a computer, and it is a reliable way to find out why a program does something unexpected."
   ]
  ]
 },
 "seq-q": {
  "dur": 29.325,
  "marks": {
   "answer": 11.875
  },
  "cues": [
   [
    0.575,
    "Your turn."
   ],
   [
    1.375,
    "The robot starts at A1, facing right."
   ],
   [
    3.85,
    "The program is: forward, forward, turn left, forward, turn left, forward."
   ],
   [
    7.912,
    "Where will it end up, and which way will it face?"
   ],
   [
    10.062,
    "Think it over before the answer."
   ],
   [
    11.875,
    "Forward, forward: C1, still facing right."
   ],
   [
    14.438,
    "Turn left: now facing up."
   ],
   [
    16.062,
    "Forward: C2."
   ],
   [
    17.312,
    "Turn left again: now facing left."
   ],
   [
    19.525,
    "Forward: B2."
   ],
   [
    20.812,
    "So the answer is B2, facing left."
   ],
   [
    23.45,
    "If you got a different answer, find the first step where your table differs."
   ],
   [
    27.525,
    "That is where the mistake is."
   ]
  ]
 },
 "order": {
  "dur": 31.325,
  "marks": {
   "run": 6.425,
   "wall": 10.9,
   "bug": 26.05
  },
  "cues": [
   [
    0.575,
    "Order matters."
   ],
   [
    1.688,
    "Here are the same five commands as before, but the second and the third have swapped places."
   ],
   [
    6.425,
    "Forward: B1."
   ],
   [
    7.812,
    "Turn left: facing up."
   ],
   [
    9.5,
    "Forward: B2."
   ],
   [
    10.9,
    "The next forward would take the robot into B3, and there is a stone there."
   ],
   [
    14.963,
    "The robot crashes, and the rest of the program cannot run."
   ],
   [
    18.363,
    "The robot did exactly what was written."
   ],
   [
    20.8,
    "When a program does the wrong thing, the cause is almost always a mistake in the program."
   ],
   [
    26.05,
    "A mistake in a program is called a bug, and finding and fixing it is called debugging."
   ]
  ]
 },
 "flowchart": {
  "dur": 12.925,
  "marks": {
   "map": 2.9,
   "arrows": 6.525
  },
  "cues": [
   [
    0.575,
    "Here is the same sequence as a flowchart: a start, five actions joined by arrows, and an end."
   ],
   [
    6.525,
    "For a plain sequence, the arrows go straight down."
   ],
   [
    9.625,
    "Flowcharts pay off once a program starts to branch."
   ]
  ]
 },
 "visual": {
  "dur": 26.475,
  "marks": {
   "tools": 5.55,
   "list": 13.8,
   "same": 16.588,
   "drag": 20.0
  },
  "cues": [
   [
    0.6,
    "In visual programming, a program is built from ready-made blocks instead of typed text."
   ],
   [
    5.55,
    "Two well-known examples are Scratch, made at MIT, and Blockly, made by Google; the Maze game we borrowed the robot from is built with Blockly."
   ],
   [
    13.8,
    "Here is our program as a list and as blocks."
   ],
   [
    16.588,
    "The meaning is the same: each line is one block."
   ],
   [
    20.0,
    "Blocks are dragged with the mouse and snap together, top to bottom, which is exactly the order in which they run."
   ]
  ]
 },
 "shapes": {
  "dur": 50.05,
  "marks": {
   "cmd": 2.862,
   "hex": 6.787,
   "fit": 10.238,
   "loop": 23.463,
   "snap": 27.75,
   "logic": 38.325
  },
  "cues": [
   [
    0.575,
    "The shape of a block shows what it is for."
   ],
   [
    2.862,
    "A command is a plain piece that joins others above and below."
   ],
   [
    6.787,
    "In Scratch, for example, a condition is a hexagon, and it fits only into a hexagonal slot, because a condition is a yes or no question, and a question cannot stand where an action is expected."
   ],
   [
    18.738,
    "Other block editors mark conditions differently, but the idea is the same."
   ],
   [
    23.463,
    "A loop is shaped like a bracket, with room inside for other blocks."
   ],
   [
    27.75,
    "Because the shapes fit together only in certain ways, you cannot make a typing mistake, and many meaningless combinations do not fit at all, which makes blocks a good way to start."
   ],
   [
    38.325,
    "But blocks do not protect you from logical mistakes: a program can be perfectly assembled and still send the robot into a wall."
   ],
   [
    46.163,
    "You still have to think through the steps exactly as you would in code."
   ]
  ]
 },
 "part4": {
  "dur": 6.0,
  "marks": {},
  "cues": [
   [
    0.55,
    "The next building block is repetition."
   ],
   [
    3.037,
    "A part of a program that repeats is called a loop."
   ]
  ]
 },
 "repeat": {
  "dur": 27.125,
  "marks": {
   "fold": 8.338,
   "count": 23.175
  },
  "cues": [
   [
    0.6,
    "To walk along this corridor, the robot needs eight steps forward."
   ],
   [
    3.925,
    "We could write \"forward\" eight times."
   ],
   [
    5.75,
    "That is tedious, and it is easy to miscount."
   ],
   [
    8.338,
    "Instead, we fold the eight lines into one loop: repeat eight times, forward."
   ],
   [
    12.55,
    "The robot still knows only the command \"forward\"."
   ],
   [
    15.4,
    "\"Repeat\" is part of how we write the program, not a new thing the robot can do."
   ],
   [
    19.562,
    "A loop that runs a set number of times is called a counted loop."
   ],
   [
    23.175,
    "The counter shows each pass, and after the eighth, the loop is finished."
   ]
  ]
 },
 "body": {
  "dur": 21.425,
  "marks": {
   "run": 8.438,
   "run2": 16.562
  },
  "cues": [
   [
    0.6,
    "A loop can contain several commands."
   ],
   [
    2.837,
    "Together they are called the body of the loop."
   ],
   [
    5.087,
    "Here the body is: forward, forward, turn right."
   ],
   [
    8.438,
    "Each pass of the loop runs the whole body, from top to bottom."
   ],
   [
    12.2,
    "One pass walks one side of the square and turns the robot for the next side."
   ],
   [
    16.562,
    "After four passes, the robot is back where it started, facing the same way."
   ]
  ]
 },
 "repeat-q": {
  "dur": 32.475,
  "marks": {
   "answer": 13.263
  },
  "cues": [
   [
    0.55,
    "A question."
   ],
   [
    1.475,
    "The robot starts at B1, facing right."
   ],
   [
    3.85,
    "The program is: repeat three times: forward, forward, turn left."
   ],
   [
    8.037,
    "Where will it end up, which way will it face, and how many cells will it move?"
   ],
   [
    11.438,
    "Think it over before the answer."
   ],
   [
    13.263,
    "Pass one: forward twice, to D1, then turn left, so it faces up."
   ],
   [
    17.213,
    "Pass two: forward twice, to D3, then turn left, so it faces left."
   ],
   [
    21.613,
    "Pass three: forward twice, to B3, then turn left, so it faces down."
   ],
   [
    26.725,
    "Three passes of two cells each: six cells."
   ],
   [
    29.6,
    "The robot ends at B3, facing down."
   ]
  ]
 },
 "while": {
  "dur": 44.7,
  "marks": {
   "while": 8.5,
   "stop": 26.475,
   "zero": 34.95
  },
  "cues": [
   [
    0.6,
    "Sometimes we do not know in advance how many times to repeat."
   ],
   [
    3.912,
    "How many steps is it to the wall?"
   ],
   [
    5.625,
    "We do not know, and the program should not depend on it."
   ],
   [
    8.5,
    "For this there is a second kind of loop, the conditional loop: while the path ahead is clear, move forward."
   ],
   [
    14.05,
    "The condition is checked before every pass."
   ],
   [
    16.725,
    "If the answer is yes, the body runs once, and the condition is checked again."
   ],
   [
    21.15,
    "If the answer is no, the loop ends and the program goes on to whatever comes after it."
   ],
   [
    26.475,
    "Here the robot checks four times with a yes, takes four steps, and the fifth check gives a no."
   ],
   [
    32.15,
    "That last no is how the loop knows to stop."
   ],
   [
    34.95,
    "What if the wall is right in front of the robot from the start?"
   ],
   [
    38.15,
    "The very first check gives no, and the body does not run at all."
   ],
   [
    42.05,
    "A \"while\" loop can run zero times."
   ]
  ]
 },
 "until": {
  "dur": 33.275,
  "marks": {
   "until": 0.6,
   "same": 6.375,
   "pascal": 17.062
  },
  "cues": [
   [
    0.6,
    "In the Blockly Maze game, the loop is written the other way round: repeat until the robot reaches the finish."
   ],
   [
    6.375,
    "\"Repeat until finish\" means the same as \"while not at the finish\"."
   ],
   [
    10.025,
    "It is the same kind of loop, with the condition turned around."
   ],
   [
    13.413,
    "In Blockly, this condition is also checked before each pass."
   ],
   [
    17.062,
    "In some other languages, such as Pascal, \"repeat until\" checks its condition after the body, so the body always runs at least once."
   ],
   [
    24.75,
    "Be careful with the word \"not\"."
   ],
   [
    27.0,
    "If you wrote \"while at the finish\" by mistake, the robot, which does not start at the finish, would not move at all."
   ]
  ]
 },
 "forever": {
  "dur": 36.975,
  "marks": {
   "spin": 7.638,
   "inf": 17.438
  },
  "cues": [
   [
    0.55,
    "If the condition of a loop never becomes false, the loop never ends."
   ],
   [
    4.213,
    "Look at this one: while the path ahead is clear, turn left."
   ],
   [
    7.638,
    "Here the robot stands in the middle of an open room: whichever way it faces, the path ahead is clear, and turning on the spot does not change that."
   ],
   [
    15.562,
    "The robot spins forever."
   ],
   [
    17.438,
    "This is an infinite loop, and a program stuck in one has to be stopped from outside, for example with a stop button."
   ],
   [
    24.375,
    "When a program stops responding, an accidental infinite loop is one of the possible reasons."
   ],
   [
    30.337,
    "To avoid it, check that something in the body moves the program closer to the moment when the condition becomes false."
   ]
  ]
 },
 "counter": {
  "dur": 20.425,
  "marks": {
   "walk": 3.938,
   "box": 12.35
  },
  "cues": [
   [
    0.625,
    "Loops are also used for counting and adding things up."
   ],
   [
    3.938,
    "As the robot walks along this corridor, we keep a count of the coins it passes: each time it stands on a coin, the count goes up by one."
   ],
   [
    12.35,
    "Such a count is kept in a named box in the computer's memory, called a variable."
   ],
   [
    17.425,
    "Variables are the main topic of the next lesson."
   ]
  ]
 },
 "part5": {
  "dur": 4.15,
  "marks": {},
  "cues": [
   [
    0.55,
    "The last building block is branching: choosing what to do."
   ]
  ]
 },
 "branch": {
  "dur": 33.5,
  "marks": {
   "bool": 4.237,
   "cond": 11.725,
   "yes": 16.925,
   "no": 19.6
  },
  "cues": [
   [
    0.575,
    "A condition is a question whose answer can only be yes or no."
   ],
   [
    4.237,
    "In programming, these two answers are called true and false, and values that can only be true or false are called Boolean values."
   ],
   [
    11.725,
    "Is there a wall ahead?"
   ],
   [
    12.975,
    "In a flowchart, a condition is drawn as a diamond with two exits."
   ],
   [
    16.925,
    "If the answer is yes, the robot turns right."
   ],
   [
    19.6,
    "If the answer is no, it moves forward."
   ],
   [
    22.113,
    "Each time the condition is checked, exactly one of the two branches runs, never both and never neither."
   ],
   [
    28.425,
    "This is called an if-else: if the condition holds, do one thing, else do the other."
   ]
  ]
 },
 "branch-half": {
  "dur": 14.15,
  "marks": {
   "skip": 7.275
  },
  "cues": [
   [
    0.575,
    "Sometimes there is nothing to do when the answer is no."
   ],
   [
    3.662,
    "Paying in a shop: if the card has bonus points, spend them."
   ],
   [
    7.275,
    "If it has none, we skip this step."
   ],
   [
    9.513,
    "Either way, we then pay what is left."
   ],
   [
    11.825,
    "This is an \"if\" without an \"else\"."
   ]
  ]
 },
 "atm": {
  "dur": 32.95,
  "marks": {
   "outer": 3.537,
   "inner": 10.188,
   "run1": 20.175,
   "run2": 27.275
  },
  "cues": [
   [
    0.575,
    "Conditions can be placed inside other conditions."
   ],
   [
    3.537,
    "A cash machine first checks the PIN."
   ],
   [
    5.85,
    "If it is wrong, the machine reports an error, and the amount is never checked."
   ],
   [
    10.188,
    "Only if the PIN is correct does it check whether the amount fits within the balance."
   ],
   [
    14.438,
    "The second check sits inside the \"yes\" branch of the first one."
   ],
   [
    17.988,
    "This is called nested branching."
   ],
   [
    20.175,
    "With a balance of five thousand, a request for three thousand passes both checks, and the cash is given out."
   ],
   [
    27.275,
    "A request for seven thousand passes the first check but fails the second: not enough money."
   ]
  ]
 },
 "chain": {
  "dur": 18.525,
  "marks": {
   "red": 5.875,
   "yellow": 7.888,
   "green": 10.513
  },
  "cues": [
   [
    0.55,
    "When there are more than two options, conditions can form a chain."
   ],
   [
    4.337,
    "A driver at a traffic light: is it red?"
   ],
   [
    6.837,
    "Then stop."
   ],
   [
    7.888,
    "Otherwise, is it yellow?"
   ],
   [
    9.562,
    "Then wait."
   ],
   [
    10.513,
    "Otherwise, it must be green: go."
   ],
   [
    12.925,
    "The checks run from top to bottom and stop at the first yes."
   ],
   [
    16.475,
    "The rest are not checked at all."
   ]
  ]
 },
 "grades": {
  "dur": 26.4,
  "marks": {
   "rule": 4.737,
   "score": 11.425,
   "good": 15.1,
   "bad": 19.175
  },
  "cues": [
   [
    0.55,
    "The order of a chain matters when the conditions can be true at the same time."
   ],
   [
    4.737,
    "Take a grading rule: ninety points or more is an A, seventy-five or more is a B, anything lower is a C."
   ],
   [
    11.425,
    "A score of ninety-five meets both of the first two conditions."
   ],
   [
    15.1,
    "If we check \"ninety or more\" first, it gets an A, which is right."
   ],
   [
    19.175,
    "If we put \"seventy-five or more\" first, it would stop there and get a B."
   ],
   [
    22.863,
    "In a chain, the more specific condition must come first."
   ]
  ]
 },
 "branch-q": {
  "dur": 32.175,
  "marks": {
   "answer": 15.675
  },
  "cues": [
   [
    0.4,
    "A question."
   ],
   [
    1.25,
    "The robot faces right, and there is a stone right in front of it."
   ],
   [
    4.513,
    "A stone counts as a wall: the robot cannot pass through it."
   ],
   [
    7.75,
    "The program is: if there is a wall ahead, turn left; else, move forward."
   ],
   [
    11.15,
    "And after that, one more forward."
   ],
   [
    12.9,
    "Where will the robot end up?"
   ],
   [
    14.025,
    "Think it over before the answer."
   ],
   [
    15.675,
    "There is a wall ahead, so the \"yes\" branch runs: the robot turns left and now faces up."
   ],
   [
    20.463,
    "The \"else\" branch is skipped."
   ],
   [
    22.325,
    "Then comes the last forward, which is outside the \"if\", so it always runs."
   ],
   [
    26.725,
    "The robot moves one cell up."
   ],
   [
    28.75,
    "It ends in the cell just above where it started, facing up."
   ]
  ]
 },
 "combo": {
  "dur": 51.75,
  "marks": {
   "prog": 4.112,
   "leg1": 25.95,
   "leg2": 30.8,
   "leg3": 34.95,
   "leg4": 38.85
  },
  "cues": [
   [
    0.625,
    "Now let's combine everything: a loop with a condition inside."
   ],
   [
    4.112,
    "Repeat until the robot reaches the finish: if the path ahead is clear, move forward; else, turn right."
   ],
   [
    9.713,
    "Notice the difference between \"if\" and \"while\"."
   ],
   [
    12.238,
    "An \"if\" checks its condition once, each time the program reaches it."
   ],
   [
    15.838,
    "A \"while\" checks its condition before every pass."
   ],
   [
    18.762,
    "That is why the \"if\" sits inside the loop: the loop keeps the robot going, and the \"if\" makes a fresh choice on every pass."
   ],
   [
    25.95,
    "Watch: along the top corridor, the path is clear, so the robot keeps moving forward."
   ],
   [
    30.8,
    "At the wall, the \"else\" branch turns it right, and it goes down the right-hand side."
   ],
   [
    34.95,
    "At the bottom, it turns right again and goes along the bottom corridor."
   ],
   [
    38.85,
    "At its end, a third right turn points it up, one step brings it onto the flag, and the loop ends."
   ],
   [
    44.7,
    "Five lines of blocks replace a long list of commands, and the same five lines would work for many other mazes of this kind."
   ]
  ]
 },
 "combo-fail": {
  "dur": 26.025,
  "marks": {
   "loop": 1.863,
   "again": 15.738
  },
  "cues": [
   [
    0.55,
    "But not for all of them."
   ],
   [
    1.863,
    "Here is an open room, and the flag is in the middle."
   ],
   [
    4.725,
    "The robot goes forward until it meets a wall, turns right, and goes on."
   ],
   [
    8.925,
    "It only ever turns when a wall stops it, so it travels around the edge of the room, and the flag in the middle is never on its path."
   ],
   [
    15.738,
    "The loop never ends."
   ],
   [
    17.338,
    "The rule was right for the first maze and wrong for this one."
   ],
   [
    20.663,
    "So an algorithm has to be tested on different data, not only on the example it was written for."
   ]
  ]
 },
 "to-text": {
  "dur": 30.975,
  "marks": {
   "map": 2.987,
   "indent": 13.35,
   "made": 24.8
  },
  "cues": [
   [
    0.575,
    "The same program can be written as text."
   ],
   [
    2.987,
    "Here it is in Python: while not at the flag: if the path ahead is clear, move forward; otherwise, turn right."
   ],
   [
    9.538,
    "Each line of blocks has become one line of text, in the same colour."
   ],
   [
    13.35,
    "And where blocks use brackets to show what is inside what, Python uses indents."
   ],
   [
    18.113,
    "Everything shifted right under the \"while\" is inside the loop."
   ],
   [
    21.663,
    "Only the \"turn right\" is inside the \"else\"."
   ],
   [
    24.8,
    "Here too, the function names are made up for this example; in the next lesson we will use real ones."
   ]
  ]
 },
 "wrap": {
  "dur": 31.775,
  "marks": {
   "w1": 1.525,
   "w2": 12.562,
   "w3": 15.75,
   "w4": 20.363,
   "w5": 25.825
  },
  "cues": [
   [
    0.575,
    "Let's sum up."
   ],
   [
    1.525,
    "An algorithm is a precise, step-by-step procedure that solves a problem."
   ],
   [
    6.013,
    "A program is a set of instructions in a language a computer can carry out, and it usually carries out an algorithm."
   ],
   [
    12.562,
    "A sequence runs commands one after another."
   ],
   [
    15.75,
    "A loop repeats: either a set number of times, or while a condition holds."
   ],
   [
    20.363,
    "A condition is a yes or no question, and branching uses it to choose what to do."
   ],
   [
    25.825,
    "And when a program goes wrong, trace it step by step: the computer does exactly what is written."
   ]
  ]
 },
 "next": {
  "dur": 12.45,
  "marks": {
   "io": 5.15,
   "box": 9.975
  },
  "cues": [
   [
    0.575,
    "In the next lesson, we will write the same robot programs in real Python."
   ],
   [
    5.15,
    "We will see how a program takes input, processes it, and produces output, and how it keeps values in variables."
   ]
  ]
 }
};
