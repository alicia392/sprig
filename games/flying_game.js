/*
@title: Flying Game
@author: Zainab Khorakiwala
*/

const player = "p";
const box = "b";
const goal = "g";
const wall = "w";
const melody = tune`
361.4457831325301,
361.4457831325301: d4~361.4457831325301,
361.4457831325301: e4~361.4457831325301,
361.4457831325301: g4~361.4457831325301 + f4~361.4457831325301 + a4~361.4457831325301,
361.4457831325301: a4~361.4457831325301,
361.4457831325301: a4~361.4457831325301,
361.4457831325301: b4~361.4457831325301,
361.4457831325301: b4~361.4457831325301,
361.4457831325301: b4~361.4457831325301,
361.4457831325301: b4~361.4457831325301,
361.4457831325301: c5~361.4457831325301 + b4~361.4457831325301,
361.4457831325301: c5~361.4457831325301,
361.4457831325301: d5~361.4457831325301,
361.4457831325301: c5~361.4457831325301,
361.4457831325301: d5~361.4457831325301,
361.4457831325301: c5~361.4457831325301,
361.4457831325301: c5~361.4457831325301 + d5~361.4457831325301,
361.4457831325301: f5~361.4457831325301 + e5~361.4457831325301,
361.4457831325301: a5~361.4457831325301 + g5~361.4457831325301,
361.4457831325301: a5~361.4457831325301,
361.4457831325301: a5~361.4457831325301 + g5~361.4457831325301 + b4~361.4457831325301 + a4~361.4457831325301 + g4~361.4457831325301,
361.4457831325301: g5~361.4457831325301 + d5~361.4457831325301 + c5~361.4457831325301 + g4~361.4457831325301,
361.4457831325301: f5~361.4457831325301 + e5~361.4457831325301 + g4~361.4457831325301,
361.4457831325301: g4~361.4457831325301,
361.4457831325301: a4~361.4457831325301,
361.4457831325301: a4~361.4457831325301,
361.4457831325301: a4~361.4457831325301 + f4~361.4457831325301 + e4~361.4457831325301,
361.4457831325301: c5~361.4457831325301 + b4~361.4457831325301 + a4~361.4457831325301 + g4~361.4457831325301 + e4~361.4457831325301,
361.4457831325301: c5~361.4457831325301 + b4~361.4457831325301 + d4~361.4457831325301,
361.4457831325301: d4~361.4457831325301,
361.4457831325301: d4~361.4457831325301,
361.4457831325301: e4~361.4457831325301 + b4~361.4457831325301 + a4~361.4457831325301 + g4~361.4457831325301 + f4~361.4457831325301`

setLegend(
  [ player, bitmap`
................
.......7........
......777.......
......7.7.......
......7.7.......
.....7777.......
...77...777777..
..77.........7..
...77.......7...
.....77777777...
......7.7.......
......7.7.......
......777.......
.......7........
................
................`],
  [ box, bitmap`
................
................
................
................
...33333333.....
...39999993.....
...39666693.....
..L39644693LLLL.
.LL39644693LLLLL
LLL39644693LLLLL
LLLLLL....LLLLL.
LLLLLL....LLLL..
...LLL..........
....L...........
................
................`],
  [ goal, bitmap`
................
................
................
.....5555555....
.....5DDD5D5....
.....5DD5DD5....
.....5D55D55....
.....5555DD5....
.....5D5DD55....
.....5555555....
................
................
................
................
................
................`],
  [ wall, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`]
);

let level = 0;
const levels = [
  map`
....
.p..
..bg`,
  map`
p..
.b.
..g`,
  map`
p..g
.b..
....
....`,
  map`
p...
...b
...b
.bbg`,
  map`
...
.p.
...`,
  map`
p...
.b.g
....
..bg`,
  map`
.....
.b.g.
..p..
.b.b.
.....`,
  map`
.w.g
.p..
..b.
w...`,
];

const currentLevel = levels[level];
setMap(currentLevel);

setSolids([ player, box, wall ]);

setPushables({
  [player]: [ box],
  [box]: [ box]
});

// START - PLAYER MOVEMENT CONTROLS

onInput("w", () => {
  getFirst(player).y -= 1;
});

onInput("a", () => {
  getFirst(player).x -= 1;
});

onInput("s", () => {
  getFirst(player).y += 1;
});

onInput("d", () => {
  getFirst(player).x += 1;
});


onInput("j", () => {
  const currentLevel = levels[level];
  if (currentLevel !== undefined) {
    clearText("");
    setMap(currentLevel);
  }
});

afterInput(() => {
  playTune(melody)
  // count the number of tiles with goals
  const targetNumber = tilesWith(goal).length;
  
  // count the number of tiles with goals and boxes
  const numberCovered = tilesWith(goal, box).length;

  if (numberCovered === targetNumber) {
    // increase the current level number
    level = level + 1;

    const currentLevel = levels[level];

    // make sure the level exists and if so set the map
    if (currentLevel !== undefined) {
      setMap(currentLevel);
    } else {
      addText("Congratulations", { y: 4, color: color`0` });
    }
  }
});






