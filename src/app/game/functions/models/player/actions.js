import {Player} from "./index";
import {playerXPos} from "../../../consts/player";
import {playerCoordXRunLeft, playerCoordXRunRight, playerCoordXBounce, groundSpeed} from "../../../consts/player";

let player;
let xPos = playerXPos;

export const playerStart = (pen, canvasHeight) => {
	if (!player) {
		player = new Player(pen, xPos, canvasHeight);
	}

	player.draw(canvasHeight);
};

//во время бега
export function drawRun() {
	if (this.isBounce) {
		this.xImage = playerCoordXBounce;
	} else {
		this.xImage = this.runStep ? playerCoordXRunRight : playerCoordXRunLeft;
	}

	this.pen.beginPath();
	this.pen.drawImage(this.sprite, this.xImage, 3, 88, 94, this.xPos, this.yPosBounce ? this.yPosBounce : this.yPos, 88, 94);
	this.pen.closePath();

	this.runCounter++;

	if (this.runCounter === 6) {
		this.runStep = !this.runStep;
		this.runCounter = 0;
	}
}

export function bounceUp() {
	//прыжок вверх
	if (this.bounceCounter < 25 && this.bounceUp) {
		this.bounceCounter = this.bounceCounter + (25 - this.bounceCounter) / groundSpeed.VERY_SLOW;
		if (this.bounceCounter > 20) this.bounceUp = false;
		this.yPosBounce = this.yPos + 10 * (this.bounceCounter - this.bounceCounter * 2);
	}
	//прыжок вниз
	else if (this.bounceCounter < 24 && !this.bounceUp) {
		this.bounceCounter = this.bounceCounter - (25 - this.bounceCounter) / groundSpeed.VERY_SLOW;

		//если уже внизу то останавливаем
		if (this.bounceCounter < 1) {
			this.bounceUp = true;
			this.isBounce = false;
			this.bounceCounter = 1;
			this.yPosBounce = null;
		} else {
			this.yPosBounce = this.yPos + 10 * (this.bounceCounter - this.bounceCounter * 2);
		}
	}
}