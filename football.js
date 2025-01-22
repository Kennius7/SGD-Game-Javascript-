import { latestCoordinates, playerDataArray, posObj } from "./data.js";
import { Ball, Player } from "./classes.js";
import { loopAudioBuffer } from "./audioLoopBuffer.js";

const footballPitchCanvas = document.getElementById("canvas2");
const timer = document.getElementById("timer");
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
const playersArray = [];
let coordinatesArray = [
    {name: 'GK', x: 114.07621359943158, y: -0.43018217170615536}, 
    {name: 'LWB', x: 40.94069234932532, y: 49.53273125707716}, 
    {name: 'LCB', x: 89.13187295277241, y: 49.43655635894342}, 
    {name: 'RCB', x: 139.4016989041429, y: 50.49167712207287}, 
    {name: 'RWB', x: 186.7239593420658, y: 51.045772872285255}, 
    {name: 'LWF', x: 39.4918154323497, y: 221.43173417156677}, 
    {name: 'LMF', x: 89.75125827477818, y: 221.93585055603936}, 
    {name: 'RMF', x: 136.3873778003408, y: 223.24201058035482}, 
    {name: 'RWF', x: 193.17629146849413, y: 220.49215874760483}, 
    {name: 'LF', x: 95.66738396217859, y: 429.4761466028511},
    {name: 'RF', x: 95.66738396217859, y: 429.4761466028511},
];

let matchStart = false;

window.addEventListener("click", () => {
    timeVar = 0; 
    matchStart = true;
    if (playerPass === 10) playerPass = 1;
    playerPass++;
});

window.addEventListener("keydown", (e) => {
    if (e.key === "d") {
        debugMode = !debugMode;
        console.log("Keyboad press check", e);
    }
    console.log("Press:", e, "Debug State:", debugMode);
})

for (let i = 0; i < playerDataArray.length; i++) {
    playersArray.push(
        new Player(playerDataArray[i].src, playerDataArray[i].x, playerDataArray[i].y, playerDataArray[i].name)
    );
}

const ball = new Ball(ballSrc, posObj.LCMX + 10, posObj.MidY - 5, 18);

const loopEngine = () => {
    ctx.clearRect(0, 0, pitchWidth, pitchHeight);
    ctx.drawImage(pitch, 0, 0, fieldWidth, fieldHeight, 0, 0, pitchWidth, pitchHeight);
    ball.draw(ctx, coordinatesArray[playerPass].x, coordinatesArray[playerPass].y, debugMode);
    playersArray.forEach((player, i) => {
        player.draw(ctx, debugMode);
        // console.log("Index:>>>", i);
        if (loopSpeed % loopVariable === 0) {
            player.updateMotion(
                loopSpeed,
                playerDataArray[i].minX, 
                playerDataArray[i].minY, 
                playerDataArray[i].maxX, 
                playerDataArray[i].maxY,
                playerSpeed
            );
            coordinatesArray = latestCoordinates(coordinatesArray, player.getCoordinates(player.name));
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


