import {constsCommon} from './../../../consts/common';
import {playerCoordXRunRight} from "../../../consts/player";
import {bounceUp, drawRun, seatUp, stopBounce} from "./actions";

export class Player {
	constructor(pen, xPos, yPos) {
		//позиция
		this.pen = pen;
		this.sprite = constsCommon.SPRITE;
		this.xPos = xPos;
		this.yPos = yPos;
		this.yPosBounce = null;
		this.xImage = playerCoordXRunRight;

		//бег
		this.isRun = true;
		this.runStep = true;
		this.runCounter = 0;

		//прыжок
		this.isBounce = false;
		this.bounceUp = true; //движение вверх
		this.bounceCounterBounce = 0;

		//присед
		this.isSeat = false;
		this.bounceCounterSeat = 0;

		//события
		this._events();
	}

	draw(canvasHeight) {
		this.yPos = (canvasHeight ? canvasHeight : this.yPos) / 2 - 66;
		if (this.isRun) drawRun.apply(this);
		if (this.isBounce) bounceUp.apply(this);
		if (this.isSeat) seatUp.apply(this);
	}


	_keyDown = event => {
		//пробел, стерлка вверх
		if (event.keyCode === 32 || event.keyCode === 38) {
			if (!this.isBounce) this.isBounce = true;
		} else if (event.keyCode === 40) {
			this.isSeat = true;

			//если был прыжок
			if (this.isBounce) {
				stopBounce.apply(this);
			}
		}
	};

	_keyUp = event => {
		//пробел, стерлка вверх
		if (event.keyCode === 32 || event.keyCode === 38) {
		} else if (event.keyCode === 40) {
			this.isSeat = false;
		}
	};

	_events = () => {
		window.addEventListener('keydown', (event) => {
			this._keyDown(event)
		});
		window.addEventListener('keyup', (event) => {
			this._keyUp(event)
		});
	}
}