import {constsCommon} from './../../../consts/common';
import {playerCoordXRunRight} from "../../../consts/player";
import {bounceUp, drawRun} from "./actions";

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
		this.bounceCounter = 1;

		//события
		this._events();
	}

	draw(canvasHeight) {
		this.yPos = (canvasHeight ? canvasHeight : this.yPos) / 2 - 66;
		if (this.isRun) drawRun.apply(this);
		if (this.isBounce) bounceUp.apply(this);
	}


	_keyDown = event => {
		//пробел, стерлка вверх
		if (event.keyCode === 32 || event.keyCode === 38) {
			if (!this.isBounce) this.isBounce = true;
		}
	};

	_keyUp = event => {
		//пробел, стерлка вверх
		if (event.keyCode === 32 || event.keyCode === 38) {
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