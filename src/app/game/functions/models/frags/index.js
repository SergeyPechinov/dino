import {groundHeight} from "../../../consts/ground";
import {constsCommon} from "../../../consts/common";

export class Frag {
	constructor(pen, xPos, yPos, frag) {
		this.pen = pen;
		this.xPos = xPos;
		this.yPos = yPos;
		this.sprite = constsCommon.SPRITE;
		this.frag = frag;
	}

	draw() {
		this.pen.beginPath();
		this.pen.drawImage(this.sprite, this.frag.coordX, this.frag.coordY, this.frag.width, this.frag.height, this.xPos, this.yPos - this.frag.height + groundHeight, this.frag.width, this.frag.height);
		this.pen.closePath();
	}
}