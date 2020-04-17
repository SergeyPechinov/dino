import {bufferCloudsStart} from "../models/clouds/actions";
import {bufferGroundsStart} from "../models/ground/actions";
import {playerStart} from "../models/player/actions";
import {bufferFragsStart} from "../models/frags/actions";
import {
	GAME_SPEED_FAST,
	GAME_SPEED_NORMAL,
	GAME_SPEED_SLOW, GAME_SPEED_VERY_FAST,
	gameOver,
	gamePoints,
	setGamePoints,
	setGameSpeed
} from "../../consts/game";

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

	if (gamePoints > 200 && gamePoints < 400) {
		setGameSpeed(GAME_SPEED_SLOW);
	} else if (gamePoints >= 400 && gamePoints < 600) {
		setGameSpeed(GAME_SPEED_NORMAL);
	} else if (gamePoints >= 600 && gamePoints < 800) {
		setGameSpeed(GAME_SPEED_FAST)
	} else if (gamePoints >= 800) {
		setGameSpeed(GAME_SPEED_VERY_FAST);
	}


	pen.clearRect(0, 0, canvasWidth, canvasHeight);
	bufferCloudsStart(pen, canvasWidth, canvasHeight);
	bufferGroundsStart(pen, canvasWidth, canvasHeight);
	bufferFragsStart(pen, canvasWidth, canvasHeight);
	playerStart(pen, canvasHeight);

	window.requestAnimationFrame(() => {
		updateCanvas(canvas, pen);
	});

	if (!gameOver) {
		setGamePoints(gamePoints + 1);
	}
};

const canvasSizesUpdate = (canvas, pen) => {
	canvasWidth = pen.canvas.clientWidth;
	canvasHeight = pen.canvas.clientHeight;

	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
};