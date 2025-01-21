const canvas = document.getElementById("canvas1");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
let gameSpeed1 = document.getElementById("gameSpeed1");
let gameSpeed2 = document.getElementById("gameSpeed2");

const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;


const playerImage = new Image();
playerImage.src = "./src/Walk.png";
const spriteWidth = 128;
const spriteHeight = 128;
let loopVariable = 1;
let gameFrame = 0;
let staggerFrame = 5;

increaseBtn.addEventListener("click", () => {
    if (staggerFrame <= 30) {
        staggerFrame++;
    }
});

decreaseBtn.addEventListener("click", () => {
    if (staggerFrame >= 0) {
        staggerFrame--;
    }
});



const animate = () => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    // ctx.fillRect(50, 50, 100, 100);
    //? ctx.drawImage(Image, sx, sy, sw, sh, dx, dy, dw, dh);
    
    ctx.drawImage(
        playerImage, loopVariable * spriteWidth, 30, spriteWidth, spriteHeight, 0, 30, canvasWidth, canvasHeight
    );
    
    if (gameFrame % staggerFrame === 0) {
        loopVariable += 1;
        if (loopVariable >= 10) {
            loopVariable = 1
        }
    }

    gameSpeed1.textContent = staggerFrame;
    gameSpeed2.textContent = staggerFrame;
    // console.log("Game Speed:>>>", staggerFrame);

    gameFrame++;
    requestAnimationFrame(animate);
}

animate();
