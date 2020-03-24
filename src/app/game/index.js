import React, {Component} from 'react';
import './index.scss';
import {initGame} from './functions/init/index'

class Game extends Component {
	constructor(props) {
		super(props);

		this.refCanvas = React.createRef();

		window.addEventListener('resize', (event)=> {
			this.refCanvas.current.width = event.target.innerWidth;
			this.refCanvas.current.height = event.target.innerHeight;
		});
	}

	componentDidMount() {
		initGame(this.refCanvas.current);
	}

	render() {
		return (
				<canvas ref={this.refCanvas} className={'canvas'}/>
		);
	}
}

export default Game;