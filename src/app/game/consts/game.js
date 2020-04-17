export let gameOver = false;

export let gamePoints = 0;

export const GAME_SPEED_VERY_SLOW = 8;
export const GAME_SPEED_SLOW = 12;
export const GAME_SPEED_NORMAL = 16;
export const GAME_SPEED_FAST = 20;
export const GAME_SPEED_VERY_FAST = 24;

export let gameSpeed = GAME_SPEED_VERY_SLOW;

export const setGameOver = value => {
	gameOver = value;
};

export const setGameSpeed = speed => {
	gameSpeed = speed;
};

export const  setGamePoints = points => {
	gamePoints = points;
};