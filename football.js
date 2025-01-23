import { latestCoordinates, homePlayerDataArray, awayPlayerDataArray, posObj } from "./data.js";
import { Ball, Player } from "./classes.js";
import { loopAudioBuffer } from "./audioLoopBuffer.js";

const footballPitchCanvas = document.getElementById("canvas2");
const timer = document.getElementById("timer");
const homePlayerPass = document.getElementById("HPP");
const homePlayerScore = document.getElementById("HPS");
const awayPlayerPass = document.getElementById("APP");
const awayPlayerScore = document.getElementById("APS");

window.addEventListener("DOMContentLoaded", () => loopAudioBuffer("./src/InMatchSounds1.mp3"));


const ctx = footballPitchCanvas.getContext("2d");
ctx.imageSmoothingEnabled = true;
ctx. imageSmoothingQuality = "high";
const pitchWidth = footballPitchCanvas.width;
const pitchHeight = footballPitchCanvas.height;

const pitch = new Image();
pitch.src = "./src/FootballPitch.jpg";
const fieldWidth = 360;
const fieldHeight = 720;
const ballSrc = "./src/soccer-ball.png";

let timeVar = 0;
let loopSpeed = 0;
let playerSpeed = 2;
let ballSpeed = 3;
let loopVariable = 10;
let playerPass = 6;
let debugMode = false;
const home = true;
const away = false;
const homePlayersArray = [];
const awayPlayersArray = [];
let coordinatesArray = [
    {name: 'HGK', x: 114.07621359943158, y: -0.43018217170615536}, 
    {name: 'HLWB', x: 40.94069234932532, y: 49.53273125707716}, 
    {name: 'HLCB', x: 89.13187295277241, y: 49.43655635894342}, 
    {name: 'HRCB', x: 139.4016989041429, y: 50.49167712207287}, 
    {name: 'HRWB', x: 186.7239593420658, y: 51.045772872285255}, 
    {name: 'HLWF', x: 39.4918154323497, y: 221.43173417156677}, 
    {name: 'HLMF', x: 89.75125827477818, y: 221.93585055603936}, 
    {name: 'HRMF', x: 136.3873778003408, y: 223.24201058035482}, 
    {name: 'HRWF', x: 193.17629146849413, y: 220.49215874760483}, 
    {name: 'HLF', x: 95.66738396217859, y: 429.4761466028511},
    {name: 'HRF', x: 95.66738396217859, y: 429.4761466028511},
    {name: 'AGK', x: 118.1451142691826, y: 467.49312394023497},
    {name: 'ALWB', x: 48.50099146813725, y: 427.848394327311},
    {name: 'ALCB', x: 84.75535794298096, y: 431.96766017244806},
    {name: 'ARCB', x: 137.6552199585102, y: 431.6726022165926},
    {name: 'ARWB', x: 190.199791569462, y: 427.013538874227},
    {name: 'ALWF', x: 38.566300593164456, y: 247.40897097346146},
    {name: 'ALMF', x: 87.33747793616504, y: 251.49395060895125},
    {name: 'ARMF', x: 133.08931812147873, y: 249.67346153422145},
    {name: 'ARWF', x: 187.190483844611, y: 248.8437507055183},
    {name: 'ALF', x: 90.45021559107525, y: 81.55842256182059},
    {name: 'ARF', x: 145.8210964290545, y: 76.78895699330279}, 
]

let matchStart = false;

homePlayerPass.addEventListener("click", () => {
    timeVar = 0; 
    matchStart = true;
    if (playerPass >= 10) playerPass = 1;
    playerPass++;
});

awayPlayerPass.addEventListener("click", () => {
    timeVar = 0; 
    matchStart = true;
    if (playerPass <= 11 || playerPass >= 21) playerPass = 11;
    playerPass++;
});

window.addEventListener("keydown", (e) => {
    if (e.key === "d") {
        debugMode = !debugMode;
        console.log("Keyboad press check", e);
    }
    console.log("Press:", e, "Debug State:", debugMode);
})

for (let i = 0; i < homePlayerDataArray.length; i++) {
    homePlayersArray.push(
        new Player(homePlayerDataArray[i].src, homePlayerDataArray[i].x, homePlayerDataArray[i].y, homePlayerDataArray[i].name)
    );
}
for (let i = 0; i < awayPlayerDataArray.length; i++) {
    awayPlayersArray.push(
        new Player(awayPlayerDataArray[i].src, awayPlayerDataArray[i].x, awayPlayerDataArray[i].y, awayPlayerDataArray[i].name)
    );
}

const ball = new Ball(ballSrc, posObj.LCMX + 10, posObj.MidY - 5, 18);

const loopEngine = () => {
    ctx.clearRect(0, 0, pitchWidth, pitchHeight);
    ctx.drawImage(pitch, 0, 0, fieldWidth, fieldHeight, 0, 0, pitchWidth, pitchHeight);
    ball.draw(ctx, debugMode);
    homePlayersArray.forEach((player, i) => {
        player.draw(ctx, home, debugMode);
        // console.log("Index:>>>", i);
        if (loopSpeed % loopVariable === 0) {
            player.updateMotion(
                loopSpeed,
                homePlayerDataArray[i].minX, 
                homePlayerDataArray[i].minY, 
                homePlayerDataArray[i].maxX, 
                homePlayerDataArray[i].maxY,
                playerSpeed
            );
            coordinatesArray = latestCoordinates(coordinatesArray, player.getCoordinates(player.name));
            // console.log("Home Coordinate Array:>>>", coordinatesArray);
        }
    })
    awayPlayersArray.forEach((player, i) => {
        player.draw(ctx, away, debugMode);
        // console.log("Index:>>>", i);
        if (loopSpeed % loopVariable === 0) {
            player.updateMotion(
                loopSpeed,
                awayPlayerDataArray[i].minX, 
                awayPlayerDataArray[i].minY, 
                awayPlayerDataArray[i].maxX, 
                awayPlayerDataArray[i].maxY,
                playerSpeed
            );
            coordinatesArray = latestCoordinates(coordinatesArray, player.getCoordinates(player.name));
            // console.log("Away Coordinate Array:>>>", coordinatesArray);
        }
    })
    loopSpeed++;
    const ballShiftX = 2;
    const ballShiftY = 2;
    ball.updateBall(
        loopSpeed, 
        coordinatesArray[playerPass].x, 
        coordinatesArray[playerPass].y, 
        ballShiftX, 
        ballShiftY,
        ballSpeed
    );

    if (loopSpeed % loopVariable === 0) {
        timeVar++;
        if (matchStart && timeVar < 2) ball.soundEffect();
    }

    timer.textContent = `Time Passed: ${timeVar}`;
    requestAnimationFrame(loopEngine);
}

loopEngine();


