import {bufferCloudsStart} from "../models/clouds/actions";
import {bufferGroundsStart} from "../models/ground/actions";
import {playerStart} from "../models/player/actions";
import {Cloud} from "../models/clouds";

let canvasWidth = 0;
let canvasHeight = 0;

// let sprite = new Image();
//
// let player = null;

export const initGame = (canvas) => {
	let pen = canvas.getContext('2d');

	if (!pen) return false;


	canvasSizesUpdate(canvas, pen);

	window.addEventListener('resize', () => {
		canvasSizesUpdate(canvas, pen);
	});
	updateCanvas(canvas, pen);
};

const updateCanvas = (canvas, pen) => {
	pen.clearRect(0, 0, canvasWidth, canvasHeight);
	bufferCloudsStart(pen, canvasWidth, canvasHeight);
	bufferGroundsStart(pen, canvasWidth, canvasHeight);
	playerStart(pen, canvasHeight);

	window.requestAnimationFrame(() => {
		updateCanvas(canvas, pen);
	});
};

const canvasSizesUpdate = (canvas, pen) => {
	canvasWidth = pen.canvas.clientWidth;
	canvasHeight = pen.canvas.clientHeight;

	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
};