import {Player} from "./index";
import {playerXPos} from "../../../consts/player";
import {
	playerCoordXRunLeft,
	playerCoordXRunRight,
	playerCoordXBounce,
	playerCoordSeatLeft,
	playerCoordSeatRight,
	groundSpeed,
	playerHeight,
	playerWidth,
	playerHeightSeat,
	playerWidthSeat
} from "../../../consts/player";

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
	} else if (this.isSeat) {
		this.xImage = this.runStep ? playerCoordSeatLeft : playerCoordSeatRight;
	} else {
		this.xImage = this.runStep ? playerCoordXRunLeft : playerCoordXRunRight;
	}

	//если сидит то меняет y позицию в картинке
	if (this.isSeat) {
		this.yImage = 36;
	} else {
		this.yImage = 3;
	}

	let playerYPos;

	if (this.isSeat) {
		playerYPos = this.yPos + 33;
	} else if (this.yPosBounce) {
		playerYPos = this.yPosBounce;
	} else {
		playerYPos = this.yPos;
	}

	let newPlayerWidth;
	let newPlayerHeight;

	if (this.isSeat) {
		newPlayerWidth = playerWidthSeat;
		newPlayerHeight = playerHeightSeat;
	} else {
		newPlayerWidth = playerWidth;
		newPlayerHeight = playerHeight;
	}

	// const playerYPos = this.yPosBounce ? this.yPosBounce : this.yPos;

	this.pen.beginPath();
	this.pen.drawImage(this.sprite, this.xImage, this.yImage, newPlayerWidth, newPlayerHeight, this.xPos, playerYPos, newPlayerWidth, newPlayerHeight);
	this.pen.closePath();

	this.runCounter++;

	if (this.runCounter === 6) {
		this.runStep = !this.runStep;
		this.runCounter = 0;
	}
}

export function bounceUp() {
	//прыжок вверх
	if (this.bounceCounterBounce < 25 && this.bounceUp) {
		this.bounceCounterBounce = this.bounceCounterBounce + (25 - this.bounceCounterBounce) / groundSpeed.VERY_SLOW;
		if (this.bounceCounterBounce > 20) this.bounceUp = false;
		this.yPosBounce = this.yPos + 10 * (this.bounceCounterBounce - this.bounceCounterBounce * 2);
	} //прыжок вниз
	else if (this.bounceCounterBounce < 24 && !this.bounceUp) {
		this.bounceCounterBounce = this.bounceCounterBounce - (25 - this.bounceCounterBounce) / groundSpeed.VERY_SLOW;

		//если уже внизу то останавливаем
		if (this.bounceCounterBounce < 1) {
			stopBounce.apply(this);
		} else {
			this.yPosBounce = this.yPos + 10 * (this.bounceCounterBounce - this.bounceCounterBounce * 2);
		}
	}
}

export function seatUp() {
}

export function stopBounce() {
	this.bounceUp = true;
	this.isBounce = false;
	this.bounceCounterBounce = 1;
	this.yPosBounce = null;
}