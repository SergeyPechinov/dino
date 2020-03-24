import {constsCommon} from "../../../consts/common";
import {cloudCoordX, cloudCoordY, cloudWidth, cloudHeight} from "../../../consts/clouds";

export class Cloud {
	constructor(pen, xPos, yPos) {
		this.pen = pen;
		this.xPos = xPos;
		this.yPos = yPos;
		this.sprite = constsCommon.SPRITE;
	}

	draw() {
		this.pen.beginPath();
		this.pen.drawImage(this.sprite, cloudCoordX, cloudCoordY, cloudWidth, cloudHeight, this.xPos, this.yPos, cloudWidth, cloudHeight);
		this.pen.closePath();
	}
}