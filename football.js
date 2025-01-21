import { playerDataArray } from "./data.js";
import { Ball, Player } from "./classes.js";
import { loopAudioBuffer } from "./audioLoopBuffer.js";

const footballPitchCanvas = document.getElementById("canvas2");
const timer = document.getElementById("timer");
// const pageLoad = document.getElementById("pageLoad");
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
let loopVariable = 10;
const playersArray = [];

for (let i = 0; i < playerDataArray.length; i++) {
    playersArray.push(new Player(playerDataArray[i].src, playerDataArray[i].x, playerDataArray[i].y));
}

const loopEngine = () => {
    ctx.clearRect(0, 0, pitchWidth, pitchHeight);
    ctx.drawImage(pitch, 0, 0, fieldWidth, fieldHeight, 0, 0, pitchWidth, pitchHeight);
    playersArray.forEach((player, i) => {
        player.draw(ctx);
        // console.log("Index:>>>", i);
        if (loopSpeed % loopVariable === 0) {
            player.updateMotion(playerDataArray[i].minX, playerDataArray[i].minY, playerDataArray[i].maxX, playerDataArray[i].maxY);
        }
    })
    const ball = new Ball(ballSrc, 115, 240, 18);
    ball.draw(ctx);
    loopSpeed++;
    if (loopSpeed % loopVariable === 0) timeVar++;
    timer.textContent = `Time Passed: ${timeVar}`;
    requestAnimationFrame(loopEngine);
}

loopEngine()


