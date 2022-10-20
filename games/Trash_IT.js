/*
@title: Trash_IT
@author: N Rizwan
*/

/*
Hey there guys!

Objective : Delete the File

> Put the Folder into the Trash
> Avoid the 💀 FOR YOUR OWN SAFETY!
> Press L for MAGIK
> Press K for Music
> As you progress, it will be more confusing 😏

*/
//===================VARIABLES=====================    
const player = "p";
const w = "w";
const w1 = "r";
const w2 = "s";
const w3 = "f";
const w4 = "q";
const w5 = "t";
const w6 = "y";
const w7 = "u";
const folder = "d";
const dustbin = "k";
const skull = "l";
const power = "o";
const poweroff = "g";
const black = "h";
const back = "b";
const box = "M";
const portal = "P";
const fake = "F";
const T = "T";
const H = "H";
const E = "E";
const N = "N";
const D = "D";
const I = "I";
const C = "C";
const s = tune`
166.66666666666666,
166.66666666666666: f5^166.66666666666666,
5000`;
const wa = tune`
166.66666666666666,
166.66666666666666: d5^166.66666666666666,
5000`;
const a = tune`
166.66666666666666,
166.66666666666666: a5^166.66666666666666,
5000`;
const d = tune`
166.66666666666666,
166.66666666666666: d5^166.66666666666666,
5000`;
const music = tune`
428.57142857142856: g4~428.57142857142856,
428.57142857142856: g4~428.57142857142856 + c5-428.57142857142856,
428.57142857142856: b4~428.57142857142856 + c5-428.57142857142856,
428.57142857142856: b4~428.57142857142856,
428.57142857142856: d5^428.57142857142856,
428.57142857142856: c5~428.57142857142856 + d5^428.57142857142856,
428.57142857142856: c5~428.57142857142856,
428.57142857142856: c5~428.57142857142856 + e5~428.57142857142856,
428.57142857142856: e5~428.57142857142856,
428.57142857142856: e5~428.57142857142856 + f5^428.57142857142856,
428.57142857142856: e5~428.57142857142856 + f5^428.57142857142856,
428.57142857142856: e5~428.57142857142856,
428.57142857142856: e5~428.57142857142856,
428.57142857142856: e5~428.57142857142856 + f5~428.57142857142856 + a5^428.57142857142856,
428.57142857142856: a5^428.57142857142856 + f4^428.57142857142856 + g4^428.57142857142856,
428.57142857142856: a5^428.57142857142856 + g4^428.57142857142856 + e5^428.57142857142856,
428.57142857142856: g4^428.57142857142856 + e5^428.57142857142856,
428.57142857142856: g4^428.57142857142856 + e5^428.57142857142856,
428.57142857142856: g4^428.57142857142856 + f5^428.57142857142856,
428.57142857142856: g4^428.57142857142856 + a4^428.57142857142856 + g5^428.57142857142856 + f5^428.57142857142856,
428.57142857142856: a4^428.57142857142856 + a5^428.57142857142856,
428.57142857142856: c5-428.57142857142856 + d5-428.57142857142856,
428.57142857142856: d5-428.57142857142856,
428.57142857142856: d5-428.57142857142856 + f4~428.57142857142856 + f5^428.57142857142856,
428.57142857142856: d5-428.57142857142856 + e5-428.57142857142856 + f4~428.57142857142856,
428.57142857142856: e5-428.57142857142856 + g4~428.57142857142856,
428.57142857142856: a4~428.57142857142856,
428.57142857142856: c5~428.57142857142856 + b4~428.57142857142856 + g5^428.57142857142856,
428.57142857142856: d5~428.57142857142856 + a5^428.57142857142856,
428.57142857142856: e5~428.57142857142856 + b5^428.57142857142856 + a5^428.57142857142856 + d4^428.57142857142856,
428.57142857142856: f5~428.57142857142856 + d4^428.57142857142856,
428.57142857142856: d4^428.57142857142856 + c4^428.57142857142856`;


//==============BITMAPS===================

setLegend(
  [ player, bitmap`
................
..00.....000....
.0220..001220...
.0222001201220..
.0122220122220..
..012222222L220.
...012222L22L20.
...0012222L2220.
...0LL122222220.
...0L11222222020
....011222222220
.....0111102210.
......00001210..
........0L110...
........0LL0....
.........00.....`],
  [ w, bitmap`
0000000000000000
1111111111111111
1111111111111111
0000000000000000
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [ w1, bitmap`
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222`],
  [ w2, bitmap`
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
0000000000000000
1111111111111111
1111111111111111
0000000000000000`],
  [ w3, bitmap`
2222222222220110
2222222222220110
2222222222220110
2222222222220110
2222222222220110
2222222222220110
2222222222220110
2222222222220110
2222222222220110
2222222222220110
2222222222220110
2222222222220110
2222222222220110
2222222222220110
2222222222220110
2222222222220110`],
  [ w4, bitmap`
2222200000000000
2222001111111111
2220011111111111
2200111000000000
2001110022222222
0011100222222222
0111002222222222
0110022222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222`],
  [ w5, bitmap`
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110222222222222
0110022222222222
0111002222222222
0011100222222222
2001110022222222
2200111000000000
2220011111111111
2222001111111111
2222200000000000`],
  [ w6, bitmap`
2222222222220110
2222222222220110
2222222222220110
2222222222220110
2222222222220110
2222222222220110
2222222222220110
2222222222220110
2222222222200110
2222222222001110
2222222220011100
2222222200111002
0000000001110022
1111111111100222
1111111111002222
0000000000022222`],
  [ w7, bitmap`
0000000000222222
1111111110022222
1111111111002222
0000000011100222
2222222001110022
2222222200111002
2222222220011100
2222222222001110
2222222222200110
2222222222220110
2222222222220110
2222222222220110
2222222222220110
2222222222220110
2222222222220110
2222222222220110`],
  [ folder, bitmap`
................
................
...0000000......
..022222220000..
.02666666622220.
0266666000000000
0266660222222260
0200002666666660
0202226666666660
0202666666666660
0202666666666660
0202666666666660
0602666666666660
0602666666666660
.06666666666660.
..000000000000..`],
  [ dustbin, bitmap`
......0000......
....000.L000....
...0.....LLL0...
..0...11.....0..
..011111111110..
...0.11.11.10...
...0.11.11.10...
...0.11.11.10...
...0.11.11.10...
...0.11.11.10...
...0.11.11.10...
...0.LL.LL.L0...
...0........0...
...01......10...
....00000000....
................`],
  [ skull, bitmap`
................
...0000000000...
..002222222200..
.00222222222200.
.02222222222220.
.02222222222220.
.00002220000220.
.00002220000220.
.000220200022.0.
.02222222222000.
.02222222220000.
.0022222200000..
..02022020000...
..0000000000....
................
................`],
  [ fake, bitmap`
................
...3333333333...
..332222222233..
.33222222222233.
.32222222222223.
.32222222222223.
.33332223333223.
.33332223333223.
.33322323332223.
.32222222222333.
.32222222223333.
.3322222233333..
..32322323333...
..3333333333....
................
................`],
  [ power, bitmap`
2333333333333332
3333333223333333
3333333223333333
3333223223223333
3332223223222333
3332233223322333
3322333223332233
3322333333332233
3322333333332233
3312233333322333
3312223333222333
3331222222221333
3333112222113333
3333311111133333
3333333333333333
2333333333333332`],
  [ poweroff, bitmap`
2444444444444442
4444444444444444
4444444442222444
4444224442224444
4442224442222444
4442244442122244
4422444444412244
4422444444412244
4422444444412244
4412244444122L44
4412224444222L44
444122222222L444
4444112222LL4444
4444411111L44444
4444444444444444
2444444444444442`],
  [ back, bitmap`
2222000000002222
2200222222220022
2022220222222202
2022200222222202
0222000222222220
0220000000222220
0200000000002220
0220000000000220
0222000220000220
0222200222000220
0222220222000220
0222222222000220
2022222222202202
2022222222222202
2200222222220022
2222000000002222`],
  [black, bitmap`
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
0000000000000000`],
  [box, bitmap`
2222222222222222
2002222222000222
0550222222052022
0551000000155202
0551LL2222155520
0551LL2L22155520
0551LL2222155520
0555111111555520
0555555555555520
0555111111155520
0551666666615520
0551611166615520
0551666666615520
0351611111615320
0551LLLLLLL15520
2000000000000002`],
  [portal, bitmap`
................
................
.....0000000....
....00LLLLL0....
...00LL000000...
...0L00828880...
..00L02228880...
..01L028888880..
..010288888880..
..010288888280..
.0110888888280..
.0108888888880..
.0108888888880..
.01088888828800.
001088882228880.
010888888888880.`],
  [T, bitmap`
................
..111111111111..
.1100000000000..
.1000000000000..
......100.......
......100.......
......100.......
......100.......
......100.......
......100.......
......100.......
......100.......
......100.......
......100.......
......100.......
......100.......`],
  [H, bitmap`
................
..11........11..
.110.......110..
.100.......100..
.100.......100..
.100.......100..
.100.......100..
.100.......100..
.1001111111100..
.1000000000000..
.1000000000000..
.100.......100..
.100.......100..
.100.......100..
.100.......100..
.100.......100..`],
  [E, bitmap`
................
..111111111111..
.1100000000000..
.1000000000000..
.100............
.100............
.100............
.100............
.1001111111111..
.1000000000000..
.1000000000000..
.100............
.100............
.1001111111111..
.1000000000000..
.1000000000000..`],
  [N, bitmap`
................
..11........11..
.1100......110..
.10000.....100..
.10000.....100..
.100000....100..
.1001000...100..
.1001100...100..
.100.1100..100..
.100..100..100..
.100..1100.100..
.100...100.100..
.100...1100100..
.100....110000..
.100.....10000..
.100.....11000..`],
  [D, bitmap`
................
..1111..........
.110000.........
.1000000000.....
.100110000000...
.100..1110000...
.100.....11000..
.100.......100..
.100.......1100.
.100.......1100.
.100.......1100.
.100.......1100.
.100......11000.
.100..11110000..
.100000000000...
.100000000......`],
  [I, bitmap`
................
..111111111111..
.1100000000000..
.1000000000000..
......100.......
......100.......
......100.......
......100.......
......100.......
......100.......
......100.......
......100.......
......100.......
...111100.......
..110000000000..
..100000000000..`],
  [C, bitmap`
................
................
....111111......
...1100000......
...1000000......
....10000.......
....10000.......
....10000.......
....1100........
.....100........
.....100........
.....100........
................
.....100........
.....100........
................`],
);

//====================LEVELS=========================
let level = 0;
const levels = [
  map`
qwwwwwwwwwwwu
r...........f
r.d.........f
r..NED.HICl.f
r...........f
r...........f
rp.........kf
tsssssssssssy`, //MAIN PAGE
   map`
qwwwwwwwwwwwu
rM...M..hh..f
rhhhlh......f
r....h.hdhM.f
r.h.Mh.M....f
r.hh.....hh.f
rph.......hkf
tsssssssssssy`, //Level 1
   map`
qwwwwwwwwwwwu
r.....Ml....f
r....hhhh.d.f
r...hhh..Mh.f
r.M.h.M.....f
r.h.M...hhh.f
rph...M....kf
tsssssssssssy`, //Level 2
   map`
qwwwwwwwwwwwu
r..M....M...f
r..h..hh....f
r..M.h..MhM.f
r.h..h...h..f
rkhdM.hhlh.Mf
rph........hf
tsssssssssssy`, //Level 3
   map`
qwwwwwwwwwwwu
r.hhh...hhh.f
rh....M...lhf
r.M..MkM....f
r.h...h...d.f
r..hh...hh.hf
rp....M..M..f
tsssssssssssy`, //Level 4
   map`
qwwwwwwwwwwwu
rM....M....Mf
rh.M..h..M.hf
r..h.hkh.h..f
r...hl.lh...f
rh.M..d..M.hf
rp..h.M.h.hof
tsssssssssssy`, //Level 5
   map`
qwwwwwwwwwwwu
rk......M.l.f
rhhhhM......f
r.......h...f
r.M..hlh.Mdhf
rhhhM....h..f
rp....M....lf
tsssssssssssy`, //Level 6
   map`
qwwwwwwwwwwwu
rh..M...h..hf
r...h...d...f
rMM.hhhhh...f
r...M.h..MMMf
r..M..l.....f
rpMh..k...h.f
tsssssssssssy`, //Level 7
   map`
qwwwwwwwwwwwu
r.l.M......Mf
rh..hhhhl.M.f
rh.llh.lpl..f
r..M.lh.M.h.f
r.hl.Mh...hdf
rh.M..M...hkf
tsssssssssssy`, //Level 8
   map`
qwwwwwwwwwwwu
rlllllllllllf
rlllllllllllf
rMlllllllllMf
rMlllllllllMf
rMlllllllllMf
rpd...F....kf
tsssssssssssy`, //Level 9
   map`
qwwwwwwwwwwwu
r.g.......o.f
r...M..F..M.f
r.M...PM....f
rhhhhhhhhhhhf
r...ll...ll.f
rp..llM.dllkf
tsssssssssssy`, //Level 10
   map`
qwwwwwwwwwwwu
rhhl.h.M....f
rh...h.hhhM.f
r.dM.h......f
r......M.h..f
r.hhh..Mh.h.f
rp....h..lhkf
tsssssssssssy`, //Level 11
   map`
qwwwwwwwwwwwu
r.M..h..hhhhf
r.F..h..h...f
r.h.....h.M.f
r.lMd.h...hMf
r.h.....M...f
rph...M....kf
tsssssssssssy`, //Level 12
   map`
qwwwwwwwwwwwu
rh....M..h..f
rF.M.....M..f
rh.h.....hF.f
rh.hM.M..h..f
rh.hhFh.h.dlf
rpkh..h.....f
tsssssssssssy`, //Level 13
   map`
qwwwwwwwwwwwu
rFFFFFFFFFFFf
rFFFFFFFFFFFf
rFFFFFFFFFFFf
rFFFFFFFFFFFf
rFFFFFFFdFFFf
rp.M......lkf
tsssssssssssy`, //Level 14
   map`
qwwwwwwwwwwwu
ro.M.......hf
rhhhhhhhM.Mhf
r......l..h.f
r.h...M.....f
r.h.Mhhhh.d.f
rph.khMh..M.f
tsssssssssssy`, //Level 15
  map`
qwwwwwwwwwwwu
r...........f
r...THE.....f
r......ENDC.f
r...........f
r.....l.....f
rp..........f
tsssssssssssy`, //END
  
];
const currentLevel = levels[level];
setMap(currentLevel);

//==================PROPERTIES===================

setSolids([player,w,w1,w2,w3,w4,w5,w6,w7,black,box,folder,back,poweroff]);
setPushables({
  [player]: [box,folder,back,poweroff],
  [folder]: [folder],
 
});

//===============PLAYER INPUT===================

onInput("s", () => {getFirst(player).y += 1
    playTune(s);});
onInput("w", () => {getFirst(player).y -= 1
    playTune(wa);});
onInput("d", () => {getFirst(player).x += 1
    playTune(d);});
onInput("a", () => {getFirst(player).x -= 1
    playTune(a);});

//========================================================


afterInput(() => {

  //===========FOLDER TO TRASH SCRIPT==============
  const dustbins = tilesWith(dustbin).length;
  const targett = tilesWith(dustbin, folder).length;
  if (dustbins === targett) 
  {
    level = level + 1;
    const currentLevel = levels[level];
  if (currentLevel !== undefined) 
  {
      setMap(currentLevel);
    } 
  }

  
  //===========MOUSE TO SKULL RESTART SCRIPT==============
  
const skulls = tilesWith(skull).length;
  const target = tilesWith(skull, player).length;
  if (skulls === target) 
  {
    let tr = level = 0;
    const ds = levels[tr];
  if (ds !== undefined) 
  {
      setMap(ds);
    } 
  }

  
  //======================HEADER============================
  addText("-Trash IT!-",{ color: color`8` });
  addText("-Delete the File-", { y:15, color: color`8` });
  //========================================================
});


//============PRESS `l` To go back to MAIN PAGE==================
onInput("l", () => {
  const currentLevel = levels[level=0];
  clearText();
  setMap(currentLevel);
});

onInput("k", () => {
playTune(music, Infinity);
});

//===================================================================================