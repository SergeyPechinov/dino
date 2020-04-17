import {bufferFrags} from "./models/frags/buffer";
import {setGameOver} from "../consts/game";

export function clash() {
	// console.log(`xPos: ${this.playerXPos}`);
	// console.log(`yPos: ${this.playerYPos}`);
	// console.log(`width: ${this.playerWidth}`);
	// console.log(`height: ${this.playerHeight}`);

	// console.log(bufferFrags[0].frag.coordX)
	// console.log(bufferFrags[0].frag.coordY)
	// console.log(bufferFrags[0].frag.width)
	// console.log(bufferFrags[0].frag.height)

	// for (let frag of bufferFrags) {
	// 	const xPos = frag.frag.coordX;
	// 	const yPos = frag.frag.coordY;
	// 	const width = frag.frag.width;
	// 	const height = frag.frag.height;
	// }

	bufferFrags.forEach((frag) => {
		const xPos = frag.xPos;
		const yPos = frag.yPos;
		const width = frag.frag.width;
		const height = frag.frag.height;

		if (this.playerXPos + this.playerWidth >= xPos && this.playerXPos <= xPos + width) {
			if (this.playerYPos + this.playerHeight >= yPos && this.playerYPos <= yPos) {
				setGameOver(true);
			}
		}
	})
}