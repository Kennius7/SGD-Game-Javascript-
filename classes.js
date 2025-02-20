const easeInOutQuad = t => { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t };


export class Player {
    constructor(imgSrc, x, y, name) {
        this.iconDimension = 24;
        this.playerImage = new Image();
        this.playerImage.src = imgSrc
        this.x = x;
        this.y = y;
        this.name = name;
        this.width = this.iconDimension;
        this.height = this.iconDimension;
        this.speed = Math.random() * 2.5 - 2;
    }
    updateMotion (gameSpeed, minX, minY, maxX, maxY, playerSpeed) {
        if (gameSpeed % playerSpeed === 0) {
            if (minX - this.x > 0) {
                this.x += 2;
                return;
            }
            if (maxX - this.x < 0) {
                this.x -= 2;
                return;
            }
            if (minY - this.y > 0) {
                this.y++;
                return;
            }
            if (maxY - this.y < 0) {
                this.y--;
                return;
            }
            this.x += Math.random() * 8 - 4;
            this.y += Math.random() * 4 - 2;
        }
    }
    draw (ctx, home, debugState) {
        if (debugState) ctx.strokeRect(this.x, this.y, this.width, this.height);
        if (home) {
            ctx.drawImage(this.playerImage, 0, 0, 360, 360, this.x, this.y, this.width, this.height);
        } else { ctx.drawImage(this.playerImage, 0, 0, 360, 360, this.x, this.y, this.width, this.height); }
    }
    getCoordinates (name) {
        return { name: name, x: this.x, y: this.y,}
    }
}




export class Ball {
    constructor(imgSrc, x, y, ballSize) {
        this.width = ballSize;
        this.height = ballSize;
        this.ballImage = new Image();
        this.ballImage.src = imgSrc
        this.x = x;
        this.y = y;
        this.trail = [];
        this.maxTrailLength = 50;
        this.maxBallPassLength = 2;
        this.progress = 0;
        this.frame = 0;
    }
    draw (ctx, debugState) {
        if (debugState) ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.ballImage, 0, 0, 360, 360, this.x, this.y, this.width, this.height);
        // ctx.save();
        // this.trail.push({ x, y });
        // if (this.trail.length > this.maxTrailLength) this.trail.shift();
        // ctx.beginPath();
        // this.trail.forEach((pos, i) => ctx.lineTo(pos.x, pos.y));
        // ctx.strokeStyle = "rgba(0, 0, 0, 0.4)";
        // ctx.stroke();
        // ctx.translate(this.x, this.y);
        // ctx.restore();
    }
    soundEffect () {
        const kickEffect = new Audio();
        kickEffect.src = "./src/ballkick1.mp3";
        kickEffect.play();
    }
    updateBall (gameSpeed, playerX, playerY, subX, subY, ballSpeed) {
        // this.progress += 0.1;
        // if (this.progress > 1) this.progress = 1;
        const addMoveX = (playerX - this.x);
        const addMoveY = (playerY - this.y);
        if (gameSpeed % ballSpeed === 0) {
            this.x += (addMoveX - subX) / 7;
            this.y += (addMoveY - subY) / 7;
        }
    }
}



