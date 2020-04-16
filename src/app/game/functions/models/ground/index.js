import {constsCommon} from './../../../consts/common';
import {gameOver} from "../../../consts/game";

export class Ground {
	constructor(pen, x = 0, y = this.height / 2, height = pen.canvas.clientHeight, width = pen.canvas.clientWidth) {
		this.pen = pen;
		this.sprite = constsCommon.SPRITE;
		this.xPos = x;
		this.yPos = y;
		this.height = height;
		this.width = width;
	}

	draw() {
		this.pen.beginPath();
		this.pen.drawImage(this.sprite, 2, 104, 2400, 24, this.xPos, this.yPos, 2400, 24);
		this.pen.closePath();
	}

	updatePos = (speed, y) => {
		gameOver ? this.xPos = this.xPos : this.xPos = this.xPos - speed;
		this.yPos = y;
	};
}