window.TIMINGS = {
 "intro": {
  "dur": 32.625,
  "marks": {
   "bricks": 8.013
  },
  "cues": [
   [
    0.575,
    "This is lesson two, and today we write real code."
   ],
   [
    3.6,
    "Our robot from lesson one is still here, but now we control it with Python."
   ],
   [
    8.013,
    "Remember the three building blocks: sequence, branching and repetition."
   ],
   [
    12.438,
    "In Python each has its own way of writing."
   ],
   [
    15.163,
    "Today we cover the sequence, which in Python simply means lines of code that run one after another."
   ],
   [
    20.988,
    "Branching comes in lesson three, and loops in lesson four."
   ],
   [
    25.05,
    "Along the way, we meet the main topic of today: values and variables, and how a program takes input and gives output."
   ]
  ]
 },
 "agenda": {
  "dur": 12.65,
  "marks": {
   "parts": 2.288
  },
  "cues": [
   [
    0.55,
    "The lesson has five parts."
   ],
   [
    2.288,
    "How code runs and how to read error messages."
   ],
   [
    5.25,
    "Values, their types, and calculating with numbers."
   ],
   [
    8.25,
    "Variables."
   ],
   [
    9.275,
    "Strings, input and output."
   ],
   [
    11.375,
    "And a summary."
   ]
  ]
 },
 "interp": {
  "dur": 21.9,
  "marks": {
   "read": 12.338
  },
  "cues": [
   [
    0.55,
    "Python is a programming language, and it is also the name of the program that runs code written in it."
   ],
   [
    6.1,
    "When you run Python code, Python reads it and carries it out one statement at a time, from top to bottom."
   ],
   [
    12.338,
    "Here are three lines: forward, turn left, forward."
   ],
   [
    15.812,
    "Python reaches the first line, and the robot moves forward."
   ],
   [
    19.463,
    "Then it turns, then it moves again."
   ]
  ]
 },
 "builtin": {
  "dur": 26.475,
  "marks": {
   "course": 0.575,
   "builtin": 9.088,
   "strict": 15.5
  },
  "cues": [
   [
    0.575,
    "The robot commands, such as forward and turn left, are not part of Python."
   ],
   [
    4.7,
    "They were written for this course, in Python, so that we have something visible to control."
   ],
   [
    9.088,
    "Other commands we will meet today, such as print, input, int and type, are built into Python and work everywhere."
   ],
   [
    15.5,
    "Just like the robot in lesson one, Python understands only names it knows."
   ],
   [
    20.1,
    "There is no command called go to flag, so Python stops with an error: name go to flag is not defined."
   ]
  ]
 },
 "colab": {
  "dur": 42.75,
  "marks": {
   "run": 24.95,
   "level": 32.038
  },
  "cues": [
   [
    0.575,
    "To run Python, you do not have to install anything."
   ],
   [
    3.825,
    "Google Colab is a free service where you write code in a web page and it runs on a Google computer in the cloud."
   ],
   [
    9.963,
    "A Colab document is called a notebook, and it is made of cells."
   ],
   [
    13.675,
    "Some cells hold text, others hold code."
   ],
   [
    16.538,
    "To run a code cell, press the play button on its left, or press Control and Enter."
   ],
   [
    21.538,
    "Anything the code prints appears right under the cell."
   ],
   [
    24.95,
    "Here, the course's robot draws its field under the cell, walks through the program, and reports whether it reached the flag."
   ],
   [
    32.038,
    "In the notebook, every robot cell starts with level and the name of a map, which puts the robot on that map."
   ],
   [
    38.4,
    "On the slides that follow, we often leave that line out to save space."
   ]
  ]
 },
 "runorder": {
  "dur": 38.725,
  "marks": {
   "nums": 0.6,
   "err": 19.613,
   "mem": 25.675
  },
  "cues": [
   [
    0.6,
    "After a cell runs, a number appears in square brackets next to it."
   ],
   [
    4.55,
    "It shows the order in which cells were run."
   ],
   [
    7.138,
    "This matters, because Colab runs cells in the order you run them, not in the order they appear on the page."
   ],
   [
    13.3,
    "Here, the cell with forward was run second, before the cell that puts the robot on a map, which was run third."
   ],
   [
    19.613,
    "So when forward ran, there was no robot on any map yet, and the robot code reported an error."
   ],
   [
    25.675,
    "Everything a cell creates stays in memory for the cells you run after it, until the session is restarted, or until Colab disconnects after a period of inactivity."
   ],
   [
    36.075,
    "Then you run the cells again from the top."
   ]
  ]
 },
 "call": {
  "dur": 49.9,
  "marks": {
   "parts": 6.737,
   "arg": 13.288,
   "empty": 20.725,
   "noparen": 28.575
  },
  "cues": [
   [
    0.6,
    "Every robot command we write in Python is a function call."
   ],
   [
    3.837,
    "A function is a named piece of code that does a job."
   ],
   [
    6.737,
    "To call it, you write its name followed by round brackets."
   ],
   [
    9.775,
    "The name says what to do."
   ],
   [
    11.25,
    "The brackets say: do it now."
   ],
   [
    13.288,
    "Inside the brackets you can pass a value, called an argument."
   ],
   [
    16.55,
    "Forward with three in the brackets moves the robot three cells with one command."
   ],
   [
    20.725,
    "When a function needs no argument, the brackets stay empty, but they must still be there."
   ],
   [
    25.6,
    "Forward with empty brackets moves one cell."
   ],
   [
    28.575,
    "What happens if you forget the brackets?"
   ],
   [
    30.787,
    "Turn left, without brackets, does not call the function."
   ],
   [
    33.85,
    "It just names it."
   ],
   [
    35.25,
    "If this is the last line of the cell, Colab shows what the name refers to: a function."
   ],
   [
    40.487,
    "Otherwise nothing is shown at all."
   ],
   [
    42.587,
    "Either way, nothing else happens."
   ],
   [
    44.737,
    "The robot does not turn, and there is no error message, so this slip is easy to miss."
   ]
  ]
 },
 "comment": {
  "dur": 8.275,
  "marks": {
   "skip": 3.438,
   "notes": 5.537
  },
  "cues": [
   [
    0.575,
    "A line that starts with a hash sign is a comment."
   ],
   [
    3.438,
    "Python ignores it completely."
   ],
   [
    5.537,
    "Comments are notes for people who read the code."
   ]
  ]
 },
 "sequence": {
  "dur": 21.025,
  "marks": {
   "r1": 6.875,
   "r2": 9.588,
   "r3": 11.538,
   "r4": 13.338,
   "r5": 15.775
  },
  "cues": [
   [
    0.55,
    "Python runs lines from top to bottom, one at a time, just like the pointer in the command list in lesson one."
   ],
   [
    6.875,
    "Forward two: the robot is at C1."
   ],
   [
    9.588,
    "Turn left: it faces up."
   ],
   [
    11.538,
    "Forward two: C3."
   ],
   [
    13.338,
    "Turn right: it faces right again."
   ],
   [
    15.775,
    "Forward three: F3, and the flag."
   ],
   [
    18.3,
    "There are no more lines, so the program ends."
   ]
  ]
 },
 "seq-q": {
  "dur": 33.7,
  "marks": {
   "answer": 14.138
  },
  "cues": [
   [
    0.575,
    "Your turn."
   ],
   [
    1.4,
    "The robot starts at A1, facing right."
   ],
   [
    3.875,
    "The code is: forward three, turn left, forward two, turn left, forward, turn right."
   ],
   [
    8.513,
    "Where will the robot end up, and which way will it face?"
   ],
   [
    10.925,
    "Trace it line by line."
   ],
   [
    12.312,
    "Think it over before the answer."
   ],
   [
    14.138,
    "Forward three: D1."
   ],
   [
    15.562,
    "Turn left: facing up."
   ],
   [
    17.088,
    "Forward two: D3."
   ],
   [
    18.562,
    "Turn left: facing left."
   ],
   [
    20.275,
    "Forward: C3."
   ],
   [
    21.663,
    "Turn right: facing up again."
   ],
   [
    23.55,
    "The answer is C3, facing up."
   ],
   [
    26.325,
    "The most common slip is to forget the last line: a turn changes the direction even though the robot stays in its cell."
   ]
  ]
 },
 "errkinds": {
  "dur": 9.35,
  "marks": {
   "kinds": 5.575
  },
  "cues": [
   [
    0.575,
    "Everyone who programs gets errors every day, so it pays to learn to read them."
   ],
   [
    5.575,
    "They come in three kinds, and each kind behaves differently."
   ]
  ]
 },
 "syntax": {
  "dur": 19.375,
  "marks": {
   "err": 5.9,
   "none": 13.325
  },
  "cues": [
   [
    0.55,
    "The first kind is a syntax error: Python cannot understand how the code is written."
   ],
   [
    5.9,
    "Here, a bracket is opened and never closed."
   ],
   [
    9.062,
    "Before running a cell, Python reads the whole cell to understand it."
   ],
   [
    13.325,
    "If the writing is broken anywhere, nothing in the cell runs at all, not even the lines that are correct."
   ]
  ]
 },
 "runtime": {
  "dur": 33.9,
  "marks": {
   "run": 9.763,
   "tb": 21.975,
   "last": 28.675
  },
  "cues": [
   [
    0.525,
    "The second kind is a runtime error."
   ],
   [
    2.625,
    "The code is written correctly, but something goes wrong while it runs."
   ],
   [
    6.188,
    "Here, the second line has a typo: foward instead of forward."
   ],
   [
    9.763,
    "Python does not know that name, so it stops with a name error."
   ],
   [
    13.1,
    "Notice that the first line has already run: the robot moved one cell before the program stopped."
   ],
   [
    18.488,
    "A runtime error stops the program at the line where it happens."
   ],
   [
    21.975,
    "When Python reports an error, it prints a block of text called a traceback."
   ],
   [
    26.275,
    "It shows where the error happened."
   ],
   [
    28.675,
    "Read it from the bottom: the last line names the kind of error and says what went wrong."
   ]
  ]
 },
 "logic": {
  "dur": 35.05,
  "marks": {
   "run": 11.875,
   "cause": 20.338,
   "trace": 31.275
  },
  "cues": [
   [
    0.575,
    "The third kind is a logic error."
   ],
   [
    2.725,
    "The program runs, but it does not do what you meant."
   ],
   [
    5.562,
    "Here, turn left has no brackets, so the robot never turns."
   ],
   [
    9.525,
    "For Python, that line is fine."
   ],
   [
    11.875,
    "The robot then moves forward into a stone."
   ],
   [
    14.713,
    "The robot code reports the crash as a runtime error, but that message is only the symptom."
   ],
   [
    20.338,
    "The real mistake is on the line before, in the missing brackets, and it is a logic error."
   ],
   [
    25.825,
    "With logic errors, the place where things go wrong and the place of the mistake are often different."
   ],
   [
    31.275,
    "This is where tracing, line by line, helps most."
   ]
  ]
 },
 "part2": {
  "dur": 3.375,
  "marks": {},
  "cues": [
   [
    0.55,
    "Part two: values, types and numbers."
   ]
  ]
 },
 "values": {
  "dur": 77.625,
  "marks": {
   "int": 6.263,
   "float": 11.25,
   "str": 27.875,
   "bool": 45.075,
   "type": 60.025
  },
  "cues": [
   [
    0.55,
    "Programs work with values, and every value has a type."
   ],
   [
    3.825,
    "The type decides what you can do with the value."
   ],
   [
    6.263,
    "Three, written without quotes, is an integer, a whole number."
   ],
   [
    9.575,
    "Its type is called int."
   ],
   [
    11.25,
    "Three point five is a floating-point number, a number with a fractional part."
   ],
   [
    15.175,
    "Its type is called float."
   ],
   [
    17.012,
    "In Python, the fractional part is always separated by a dot."
   ],
   [
    20.838,
    "A comma means something else in Python: it separates values, so three comma five would be two separate numbers."
   ],
   [
    27.875,
    "Three in quotes is a string, a piece of text."
   ],
   [
    30.65,
    "Its type is called str, short for string, and people usually read it aloud as string."
   ],
   [
    35.8,
    "The quotes tell Python: this is text, not a number."
   ],
   [
    39.288,
    "To Python, the string three is just a character that looks like a digit."
   ],
   [
    43.025,
    "You cannot do arithmetic with it."
   ],
   [
    45.075,
    "True and False are the two values of the type bool, short for Boolean, after the mathematician George Boole."
   ],
   [
    51.087,
    "They are the yes and no answers of conditions."
   ],
   [
    54.2,
    "Our robot uses them: path ahead returns True if the path is clear, and False if it is not."
   ],
   [
    60.025,
    "Two built-in functions help us look at values."
   ],
   [
    62.913,
    "Print displays values under the cell."
   ],
   [
    65.237,
    "You can give it several values separated by commas, and it prints them on one line with a space between them."
   ],
   [
    71.375,
    "Type tells you the type of a value."
   ],
   [
    73.463,
    "In its answer, the word class is simply Python's word for a type."
   ]
  ]
 },
 "autoshow": {
  "dur": 12.225,
  "marks": {
   "val": 0.55,
   "prog": 5.962
  },
  "cues": [
   [
    0.55,
    "If the last line of a cell is just a value, Colab shows that value even without print."
   ],
   [
    5.962,
    "Only notebooks do this; in an ordinary Python program, nothing is shown unless you call print."
   ]
  ]
 },
 "types-q": {
  "dur": 25.9,
  "marks": {
   "answer": 7.675
  },
  "cues": [
   [
    0.55,
    "A question."
   ],
   [
    1.275,
    "What does this line print: print two plus three, comma, the string two plus the string three?"
   ],
   [
    5.837,
    "Think it over before the answer."
   ],
   [
    7.675,
    "It prints five, and then the characters two and three side by side."
   ],
   [
    11.263,
    "That is text, not the number twenty-three."
   ],
   [
    13.488,
    "Two plus three are numbers, so they are added."
   ],
   [
    16.238,
    "The string two plus the string three are pieces of text, so plus joins them: the text two followed by the text three."
   ],
   [
    22.988,
    "What plus does depends on the types of its values."
   ]
  ]
 },
 "arith": {
  "dur": 21.5,
  "marks": {
   "ops": 10.238,
   "whole": 13.263
  },
  "cues": [
   [
    0.55,
    "Python can calculate."
   ],
   [
    2.288,
    "Plus adds, minus subtracts, and the star multiplies, because there is no multiplication sign on the keyboard."
   ],
   [
    8.675,
    "The slash divides."
   ],
   [
    10.238,
    "Seven divided by two is three point five."
   ],
   [
    13.263,
    "Division with a slash always gives a float, even when the result is whole: six divided by two gives three point zero, not three."
   ]
  ]
 },
 "ops": {
  "dur": 22.7,
  "marks": {
   "fdiv": 2.887,
   "mod": 13.0,
   "pow": 18.3
  },
  "cues": [
   [
    0.575,
    "There are also three more operators."
   ],
   [
    2.887,
    "A double slash is whole-number division: for positive numbers, it tells you how many whole times one number fits into another."
   ],
   [
    10.513,
    "Seven double-slash two is three."
   ],
   [
    13.0,
    "The percent sign gives the remainder of that division: seven percent two is one."
   ],
   [
    18.3,
    "And a double star raises to a power: two double-star three is eight."
   ]
  ]
 },
 "precedence": {
  "dur": 24.95,
  "marks": {
   "mul": 0.55,
   "paren": 11.15,
   "mix": 17.425
  },
  "cues": [
   [
    0.55,
    "Python follows the usual order of operations from mathematics."
   ],
   [
    4.638,
    "Multiplication and division come before addition and subtraction."
   ],
   [
    8.413,
    "So two plus three times four is fourteen."
   ],
   [
    11.15,
    "If you want the addition first, use brackets: two plus three, in brackets, times four, is twenty."
   ],
   [
    17.425,
    "When an int and a float meet in one calculation, the result is a float."
   ],
   [
    21.812,
    "Two plus zero point five is two point five."
   ]
  ]
 },
 "robotmath": {
  "dur": 25.525,
  "marks": {
   "mult": 3.625,
   "div": 6.975,
   "fix": 19.863
  },
  "cues": [
   [
    0.575,
    "You can calculate right inside the brackets of a call."
   ],
   [
    3.625,
    "Forward, two times two, moves the robot four cells."
   ],
   [
    6.975,
    "But forward, six divided by two, fails."
   ],
   [
    9.925,
    "The division gives three point zero, a float, and the robot code was written to accept only a whole number of cells."
   ],
   [
    16.225,
    "It raises a type error: the value has the wrong type."
   ],
   [
    19.863,
    "To get a whole number here, use whole-number division, six double-slash two, which gives the int three."
   ]
  ]
 },
 "part3": {
  "dur": 2.425,
  "marks": {},
  "cues": [
   [
    0.55,
    "Part three: variables."
   ]
  ]
 },
 "assign": {
  "dur": 49.05,
  "marks": {
   "box": 4.837,
   "eq": 10.038,
   "right": 24.75,
   "left": 30.013,
   "bad": 33.488,
   "eqeq": 41.138
  },
  "cues": [
   [
    0.575,
    "A variable is a name for a value, so that the program can keep it and use it later."
   ],
   [
    4.837,
    "A helpful picture is a box with a label."
   ],
   [
    7.175,
    "The label is the name, and the box holds the value."
   ],
   [
    10.038,
    "You create a variable with the equals sign."
   ],
   [
    12.413,
    "In Python, the equals sign does not mean is equal to, as in mathematics."
   ],
   [
    16.55,
    "It is a command: take the value on the right, and store it under the name on the left."
   ],
   [
    20.713,
    "This is called assignment."
   ],
   [
    22.387,
    "Assignment happens in two steps."
   ],
   [
    24.75,
    "First, Python works out the right side."
   ],
   [
    27.75,
    "Here, two plus one gives three."
   ],
   [
    30.013,
    "Then it stores the result under the name on the left, steps."
   ],
   [
    33.488,
    "That is why the left side must be a name: three equals steps is an error, because three is not a name you can store something under."
   ],
   [
    41.138,
    "To check whether two values are equal, Python uses a different symbol, a double equals sign, which we will meet in lesson three."
   ]
  ]
 },
 "box": {
  "dur": 16.075,
  "marks": {
   "use": 4.8,
   "look": 8.45
  },
  "cues": [
   [
    0.575,
    "Once a variable exists, you can use its name wherever you would use the value."
   ],
   [
    4.8,
    "Here, the first line stores three under the name steps."
   ],
   [
    8.45,
    "On the second line, Python looks up steps, finds three, and calls forward with three."
   ],
   [
    13.888,
    "The robot moves three cells."
   ]
  ]
 },
 "reassign": {
  "dur": 33.025,
  "marks": {
   "new": 3.05,
   "self": 8.463,
   "calc": 19.425,
   "store": 25.588
  },
  "cues": [
   [
    0.575,
    "A variable holds one value at a time."
   ],
   [
    3.05,
    "If we now write steps equals five, the five replaces the three."
   ],
   [
    6.825,
    "The old value is gone."
   ],
   [
    8.463,
    "Now a line that looks strange at first: steps equals steps plus one."
   ],
   [
    12.513,
    "In mathematics this would make no sense."
   ],
   [
    14.988,
    "In Python it is an ordinary command, and the two steps of assignment explain it."
   ],
   [
    19.425,
    "First the right side: Python takes the current value of steps, five, and adds one, which gives six."
   ],
   [
    25.588,
    "Then it stores six under the name steps."
   ],
   [
    28.375,
    "This is how programs count things, such as steps taken or coins collected."
   ]
  ]
 },
 "why-var": {
  "dur": 27.2,
  "marks": {
   "run": 3.387,
   "edit": 10.538
  },
  "cues": [
   [
    0.575,
    "Why use a variable when we could write the number directly?"
   ],
   [
    3.387,
    "Here the robot draws a corner, with both sides three cells long."
   ],
   [
    7.125,
    "The number three is written in only one place, the first line."
   ],
   [
    10.538,
    "To make a bigger corner, we change that one line to n equals five, and the rest of the code stays the same."
   ],
   [
    16.812,
    "Without the variable, we would have to find every three in the program and change each one, and it is easy to miss one."
   ],
   [
    23.363,
    "A variable also gives a value a name that explains what it means."
   ]
  ]
 },
 "names": {
  "dur": 42.55,
  "marks": {
   "ok": 3.037,
   "bad": 5.975,
   "case": 15.738,
   "builtin": 22.113,
   "style": 33.237
  },
  "cues": [
   [
    0.625,
    "Names of variables follow a few rules."
   ],
   [
    3.037,
    "A name may contain letters, digits and the underscore, but it cannot start with a digit, and it cannot contain spaces."
   ],
   [
    9.7,
    "Some words are reserved by Python itself, such as if, while and True, and cannot be used as names."
   ],
   [
    15.738,
    "Upper and lower case letters are different: length with a small l and Length with a capital L are two different names."
   ],
   [
    22.113,
    "Also avoid the names of built-in functions, such as print, input, str or type."
   ],
   [
    27.8,
    "Python allows them, but the function then stops working until the session is restarted."
   ],
   [
    33.237,
    "By convention, Python programmers write names in small letters, with underscores between words, and choose names that say what the value means."
   ]
  ]
 },
 "nameerr": {
  "dur": 37.175,
  "marks": {
   "run": 1.637,
   "err": 8.638,
   "fix": 17.45,
   "case": 23.363
  },
  "cues": [
   [
    0.55,
    "What does this cell do?"
   ],
   [
    1.637,
    "Python goes from top to bottom."
   ],
   [
    3.75,
    "On the first line, it needs the value of length, but nothing has been stored under that name yet."
   ],
   [
    8.638,
    "Python stops with a name error: name length is not defined."
   ],
   [
    12.55,
    "It is the same error as a typo in a command name: Python does not know the name."
   ],
   [
    17.45,
    "The fix is to put things in before you take them out: swap the two lines, and the robot moves three cells."
   ],
   [
    23.363,
    "Here is another version of the same error."
   ],
   [
    26.2,
    "The variable is called length with a small l, but the second line asks for Length with a capital L."
   ],
   [
    31.925,
    "For Python, these are two different names, and the second one does not exist."
   ]
  ]
 },
 "stale": {
  "dur": 26.15,
  "marks": {
   "del": 5.1,
   "works": 11.763,
   "breaks": 16.725,
   "restart": 20.15
  },
  "cues": [
   [
    0.625,
    "Notebooks have one more trap."
   ],
   [
    2.462,
    "Variables stay in memory after a cell runs."
   ],
   [
    5.1,
    "If you once ran a cell with length equals three, and later deleted or changed that cell, the value is still in memory."
   ],
   [
    11.763,
    "A later cell that uses length will then work, even though nothing on the page creates it."
   ],
   [
    16.725,
    "The code will break when someone runs the notebook from the start."
   ],
   [
    20.15,
    "If something works and you do not see why, restart the session and run all cells in order, from the top."
   ]
  ]
 },
 "swap": {
  "dur": 45.525,
  "marks": {
   "answer": 15.25,
   "l1": 15.25,
   "l2": 16.838,
   "l3": 18.225,
   "l4": 25.4,
   "l5": 30.413
  },
  "cues": [
   [
    0.575,
    "Here is a classic problem."
   ],
   [
    2.25,
    "The box a holds one, the box b holds two, and we want to swap them."
   ],
   [
    6.287,
    "This attempt looks reasonable: a equals b, then b equals a."
   ],
   [
    9.775,
    "What will print a, b show?"
   ],
   [
    11.413,
    "Follow it box by box."
   ],
   [
    13.113,
    "Think it over before the answer."
   ],
   [
    15.25,
    "Line one stores one in a."
   ],
   [
    16.838,
    "Line two stores two in b."
   ],
   [
    18.225,
    "Line three, a equals b, takes the value of b, two, and stores it in a."
   ],
   [
    22.925,
    "The one that was in a is now gone."
   ],
   [
    25.4,
    "Line four, b equals a, takes the value of a, which is now two, and stores it in b."
   ],
   [
    30.413,
    "So the program prints two, two."
   ],
   [
    32.613,
    "The one was lost on line three."
   ],
   [
    34.75,
    "The table we filled in is the same tracing as in lesson one."
   ],
   [
    38.788,
    "After each line, we write down what every variable holds."
   ],
   [
    42.575,
    "It is a reliable way to check a program in your head."
   ]
  ]
 },
 "swapfix": {
  "dur": 23.5,
  "marks": {
   "s1": 5.375,
   "s2": 8.513,
   "s3": 11.163,
   "done": 14.4
  },
  "cues": [
   [
    0.575,
    "To swap without losing anything, we need a third box to hold one value for a moment."
   ],
   [
    5.375,
    "First, t equals a: t now holds one."
   ],
   [
    8.513,
    "Then a equals b: a holds two."
   ],
   [
    11.163,
    "Then b equals t: b gets the one we saved."
   ],
   [
    14.4,
    "Now a is two and b is one."
   ],
   [
    16.663,
    "Python also has a shorter way to write a swap in one line, but the three-line version shows what happens to each value."
   ]
  ]
 },
 "part4": {
  "dur": 6.075,
  "marks": {},
  "cues": [
   [
    0.55,
    "Part four: strings, input and output."
   ],
   [
    3.487,
    "This is how a program talks to a person."
   ]
  ]
 },
 "strings": {
  "dur": 46.975,
  "marks": {
   "glue": 9.888,
   "mix": 17.025,
   "comma": 29.7,
   "str": 38.925
  },
  "cues": [
   [
    0.575,
    "A string is text in quotes."
   ],
   [
    2.35,
    "You can use double quotes or single quotes, as long as the opening and closing quotes match."
   ],
   [
    7.375,
    "The quotes themselves are not part of the text."
   ],
   [
    9.888,
    "Plus joins two strings into one."
   ],
   [
    12.05,
    "Steps, colon, space, plus the string three, gives the text: Steps: 3."
   ],
   [
    17.025,
    "But plus cannot join a string and a number."
   ],
   [
    19.663,
    "Python stops with a type error: it can only join a string to another string, not to an int."
   ],
   [
    25.525,
    "Python does not guess what you meant and does not turn the number into text on its own."
   ],
   [
    29.7,
    "There are two ways out."
   ],
   [
    31.0,
    "The first: give print several values, separated by commas."
   ],
   [
    35.263,
    "Print accepts values of any type and puts a space between them."
   ],
   [
    38.925,
    "The second: convert the number into a string with the function str."
   ],
   [
    43.013,
    "str of three gives the string three, and now plus can join it."
   ]
  ]
 },
 "convert": {
  "dur": 25.525,
  "marks": {
   "toint": 3.175,
   "tofloat": 8.75,
   "bad": 12.125
  },
  "cues": [
   [
    0.575,
    "Conversion works in the other direction too."
   ],
   [
    3.175,
    "The function int turns a string of digits into a whole number: int of the string three gives the number three."
   ],
   [
    8.75,
    "And float turns a string like three point five into a float."
   ],
   [
    12.125,
    "But int cannot convert just any text."
   ],
   [
    14.525,
    "Int of the string abc, or even int of the string three point five, stops with a value error: the value has the right type, a string, but its content cannot be read as a whole number."
   ]
  ]
 },
 "input": {
  "dur": 53.45,
  "marks": {
   "ask": 6.275,
   "typed": 17.125,
   "str": 21.788,
   "crash": 28.45,
   "fix": 34.1,
   "conv": 43.025,
   "go": 46.275
  },
  "cues": [
   [
    0.6,
    "So far, every value was written in the code."
   ],
   [
    3.15,
    "The function input gets a value from the person at the keyboard."
   ],
   [
    6.275,
    "When Python reaches input, the program pauses and waits."
   ],
   [
    9.725,
    "The text in the brackets is shown as a prompt, so the person knows what to type."
   ],
   [
    13.963,
    "In Colab, a small text box appears under the cell."
   ],
   [
    17.125,
    "The person types an answer and presses Enter, and input returns what was typed."
   ],
   [
    21.788,
    "Input always returns a string."
   ],
   [
    23.887,
    "Even if you type the digit three, n holds the string three, in quotes."
   ],
   [
    28.45,
    "So the second line fails: forward needs a whole number, but it got a string."
   ],
   [
    32.663,
    "A type error again."
   ],
   [
    34.1,
    "The fix is to convert the answer: int, applied to the result of input."
   ],
   [
    38.587,
    "Python works from the inside out: first input returns the string three, then int turns it into the number three, and that is stored in n."
   ],
   [
    46.275,
    "Now the robot moves three cells."
   ],
   [
    48.5,
    "And if someone types a word instead of a number, int stops with the value error we just saw."
   ]
  ]
 },
 "ipo": {
  "dur": 20.425,
  "marks": {
   "in": 0.6,
   "proc": 7.862,
   "out": 10.525,
   "prog": 14.075,
   "ask": 15.113,
   "move": 16.338,
   "report": 18.15
  },
  "cues": [
   [
    0.6,
    "Most programs follow this pattern."
   ],
   [
    2.812,
    "Input: the program gets data, from a person, a file or another program."
   ],
   [
    7.862,
    "Processing: it works with that data."
   ],
   [
    10.525,
    "Output: it shows the result, for example with print."
   ],
   [
    14.075,
    "Here, the program asks for a number, moves the robot that many cells, and reports how many steps it took."
   ]
  ]
 },
 "wrap": {
  "dur": 52.85,
  "marks": {
   "w1": 1.562,
   "w2": 8.238,
   "w3": 13.038,
   "w4": 26.85,
   "w5": 36.562,
   "w6": 48.962
  },
  "cues": [
   [
    0.575,
    "Let's sum up."
   ],
   [
    1.562,
    "Python runs code from top to bottom, one line at a time, and in a notebook, the order in which you run cells matters."
   ],
   [
    8.238,
    "A command is a function call: a name, then brackets, with any arguments inside."
   ],
   [
    13.038,
    "Errors come in three kinds: syntax errors, where nothing runs; runtime errors, which stop the program at the line where they happen; and logic errors, where the program runs but does the wrong thing."
   ],
   [
    24.0,
    "Read error messages from the last line."
   ],
   [
    26.85,
    "Every value has a type, such as int, float, str or bool, and the type decides what operations like plus do."
   ],
   [
    33.938,
    "Division with a slash always gives a float."
   ],
   [
    36.562,
    "A variable is a name for a value; the equals sign stores the value of the right side under the name on the left, and a new value replaces the old one."
   ],
   [
    44.862,
    "A name must exist before you use it, and capital letters matter."
   ],
   [
    48.962,
    "Input always gives a string, and int turns it into a number."
   ]
  ]
 },
 "next": {
  "dur": 14.825,
  "marks": {
   "code": 3.575,
   "new": 10.938
  },
  "cues": [
   [
    0.6,
    "Next time, the robot will start making decisions."
   ],
   [
    3.575,
    "Here is the rule from lesson one, written in Python: if the path ahead is clear, move forward; else, turn right."
   ],
   [
    10.938,
    "What is new is the colon at the end of a line and the indent below it."
   ]
  ]
 }
};
