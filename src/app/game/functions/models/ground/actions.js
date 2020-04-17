import {Ground} from "./index";
import {constsCommon} from "../../../consts/common";
import {bufferGrounds} from "./buffer";
import {gameOver, gameSpeed} from "../../../consts/game";

export const bufferGroundsStart = (pen, canvasWidth, canvasHeight) => {
	if (bufferGrounds.length === 0) {
		bufferGrounds.push(new Ground(pen, 0));
	} else {
		const bufferGroundsLength = bufferGrounds.length;
		const bufferGroundsLast = bufferGrounds[bufferGroundsLength - 1];
		const spriteWidth = constsCommon.SPRITE.width;

		//двигает
		for (let i = 0; i < bufferGroundsLength; i++) {
			bufferGrounds[i].updatePos(gameSpeed, canvasHeight / 2);
			bufferGrounds[i].draw();
			bufferGrounds[i].yPos = canvasHeight / 2;
		}

		if (!gameOver) {
			//добавляет в буфер
			if (bufferGroundsLast.xPos - 30 < canvasWidth - spriteWidth && bufferGroundsLast.xPos + canvasWidth / 2 > canvasWidth - spriteWidth) {
				bufferGrounds.push(new Ground(pen, bufferGroundsLast.xPos + spriteWidth - 10));
			}

			//удаляет из буфера
			if (bufferGrounds[0].xPos < -(spriteWidth + canvasWidth)) {
				bufferGrounds.splice(0, 1);
			}
		}
	}
};