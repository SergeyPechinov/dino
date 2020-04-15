import {Cactus} from "./cactus";
import {cactuses} from "../../../consts/cactuses";
import {bufferFrags} from "./buffer";
import {DinoFly} from "./dinoFly";
import {dinoFly} from "../../../consts/dinoFly";

export const bufferFragsStart = (pen, canvasWidth, canvasHeight) => {
	if (bufferFrags.length < 1) {
		bufferFrags.push(_changeRandomFrag(pen, canvasWidth, canvasHeight / 2));
	} else {
		bufferFrags.map((item, index) => {
			//добавляет врага в буффера
			if (bufferFrags.length - 1 === index) {
				if (canvasWidth - item.frag.width - 900 > item.xPos) {
					bufferFrags.push(_changeRandomFrag(pen, canvasWidth, canvasHeight / 2));
				}
			}

			//скорость
			item.xPos -= 5;
			item.draw();
		});
	}
	//удаляет врага из буффера
	if (bufferFrags[0].xPos < -bufferFrags[0].frag.width) {
		bufferFrags.splice(0, 1);
	}
};

const _changeRandomFrag = (pen, canvasWidth, canvasHeight) => {
	let randomNumber = Math.random();
	if (randomNumber >= 0.5) {
		randomNumber = ((randomNumber * 2 - 1) * 10).toFixed(0);
		randomNumber = Number(randomNumber);

		if ((randomNumber >= 0) && (randomNumber < 10 / 6)) {
			return new Cactus(pen, canvasWidth, canvasHeight, cactuses.mini.one);
		} else if ((randomNumber >= 10 / 6) && (randomNumber < 10 / 6 * 2)) {
			return new Cactus(pen, canvasWidth, canvasHeight, cactuses.mini.two);
		} else if ((randomNumber >= 10 / 6 * 2) && (randomNumber < 10 / 6 * 3)) {
			return new Cactus(pen, canvasWidth, canvasHeight, cactuses.mini.three);
		} else if ((randomNumber >= 10 / 6 * 3) && (randomNumber < 10 / 6 * 4)) {
			return new Cactus(pen, canvasWidth, canvasHeight, cactuses.big.one);
		} else if ((randomNumber >= 10 / 6 * 4) && (randomNumber < 10 / 6 * 5)) {
			return new Cactus(pen, canvasWidth, canvasHeight, cactuses.big.two);
		} else if ((randomNumber >= 10 / 6 * 5) && (randomNumber <= 10)) {
			return new Cactus(pen, canvasWidth, canvasHeight, cactuses.big.three);
		}
	} else {
		return new DinoFly(pen, canvasWidth, canvasHeight, dinoFly.top);
	}
};