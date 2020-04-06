import {Frag} from "./index";
import {groundHeight} from "../../../consts/ground";
import {playerHeight} from "../../../consts/player";
import {dinoFly} from "../../../consts/dinoFly";

export class DinoFly extends Frag {
	constructor(...args) {
		super(...args);
		const random = Math.random() * 3;

		// this.yPos = this.yPos - groundHeight;


		if (random < 1) {
			// над игроком
			this.yPos = this.yPos - playerHeight - 10;
		} else if (random < 2) {
			// для того что бы приседал
			this.yPos = this.yPos - playerHeight / 2 - 15;
		} else {
			// для того что бы прыгал
			this.yPos = this.yPos - groundHeight;
		}

		this.top = true;
		this.timer = 0;
	}

	draw() {
		if (this.top) {
			if (this.timer > 10) {
				this.top = false;
				this.timer = 0;
				this.frag = dinoFly.bottom;
			} else {
				this.timer++;
			}
		} else {
			if (this.timer > 10) {
				this.top = true;
				this.timer = 0;
				this.frag = dinoFly.top;
			} else {
				this.timer++;
			}
		}
		super.draw();
	}
}