import {bufferClouds} from "./buffer";
import {Cloud} from "./index";
import {cloudWidth} from "../../../consts/clouds";
import {gameOver} from "../../../consts/game";

export const bufferCloudsStart = (pen, canvasWidth, canvasHeight) => {
	if (bufferClouds.length === 0) {
		bufferClouds.push(new Cloud(pen, canvasWidth, _createYPos(canvasHeight)))
	} else {
		bufferClouds.map((item, index) => {
			//добавляет облако в буфер
				if (bufferClouds.length - 1 === index && !gameOver) {
					if (canvasWidth - cloudWidth - 100 > item.xPos) {
						if ((Math.random() * 100).toFixed(0) <= 2) {
							bufferClouds.push(new Cloud(pen, canvasWidth, _createYPos(canvasHeight)));
						}
					}
				}

			//скорость
			if (!gameOver) {
				item.xPos -= 2;
			}
			item.draw();
		});

		//удаляет облака из буффера

		if (bufferClouds[0].xPos < -cloudWidth && !gameOver) {
			bufferClouds.splice(0, 1);
		}
	}
};

const _createYPos = (canvasHeight) => {
	let yPos = Math.random() * (canvasHeight / 2) - 70;
	if (yPos < 10) {
		yPos = 20;
	}

	return yPos;
};