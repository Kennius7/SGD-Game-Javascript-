import { playerDataArray } from "./data.js";
const footballPitchCanvas = document.getElementById("canvas2");
const timer = document.getElementById("timer");


const ctx = footballPitchCanvas.getContext("2d");
ctx.imageSmoothingEnabled = true;
ctx. imageSmoothingQuality = "high";
const pitchWidth = footballPitchCanvas.width;
const pitchHeight = footballPitchCanvas.height;

const pitch = new Image();
pitch.src = "./src/FootballPitch.jpg";
const fieldWidth = 360;
const fieldHeight = 720;

let timeVar = 0;
let loopSpeed = 0;
let loopVariable = 10;

// const numberOfPlayers = 11;
const playersArray = [];
// console.log("Array:>>>>", playerDataArray);

class Player {
    constructor(imgSrc, x, y) {
        this.iconDimension = 24;
        this.playerImage = new Image();
        this.playerImage.src = imgSrc
        this.x = x;
        this.y = y;
        this.width = this.iconDimension;
        this.height = this.iconDimension;
        this.speed = Math.random() * 2.5 - 2;
    }
    updateMotion (minX, minY, maxX, maxY) {
        // this.x += Math.random() * 4 - 2;
        // this.y += Math.random() * 4 - 2;
        if (minX - this.x > 0) {
            return this.x += 2;
        }
        if (maxX - this.x < 0) {
            return this.x -= 2;
        }
        if (minY - this.y > 0) {
            return this.y++;
        }
        if (maxY - this.y < 0) {
            return this.y--;
        }
        this.x += Math.random() * 8 - 4;
        this.y += Math.random() * 4 - 2;
    }
    draw () {
        ctx.drawImage(this.playerImage, 0, 0, 180, 180, this.x, this.y, this.width, this.height);
    }
}


for (let i = 0; i < playerDataArray.length; i++) {
    playersArray.push(new Player(playerDataArray[i].src, playerDataArray[i].x, playerDataArray[i].y));
}

// console.log("Array:>>>>", playersArray);


const loopEngine = () => {
    ctx.clearRect(0, 0, pitchWidth, pitchHeight);
    ctx.drawImage(pitch, 0, 0, fieldWidth, fieldHeight, 0, 0, pitchWidth, pitchHeight);
    playersArray.forEach((player, i) => {
        player.draw();
        // console.log("Index:>>>", i);
        if (loopSpeed % loopVariable === 0) {
            player.updateMotion(playerDataArray[i].minX, playerDataArray[i].minY, playerDataArray[i].maxX, playerDataArray[i].maxY);
        }
    })
    loopSpeed++;
    if (loopSpeed % loopVariable === 0) timeVar++;
    timer.textContent = `Time Passed: ${timeVar}`;
    requestAnimationFrame(loopEngine);
}

loopEngine()


