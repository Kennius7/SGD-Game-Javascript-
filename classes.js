

export class Player {
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
    draw (ctx) {
        ctx.drawImage(this.playerImage, 0, 0, 180, 180, this.x, this.y, this.width, this.height);
    }
}

export class Ball {
    constructor(imgSrc, x, y, ballSize=22) {
        this.iconDimension = ballSize;
        this.ballImage = new Image();
        this.ballImage.src = imgSrc
        this.x = x;
        this.y = y;
        this.width = this.iconDimension;
        this.height = this.iconDimension;
    }
    draw (ctx) {
        ctx.drawImage(this.ballImage, 0, 0, 256, 256, this.x, this.y, this.width, this.height);
    }
    soundEffect () {
        const kickEffect = new Audio();
        kickEffect.src = "./src/ballkick1.mp3";
        kickEffect.play();
    }
}



