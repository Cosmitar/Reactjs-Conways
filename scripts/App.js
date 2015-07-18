import React, {Component} from 'react';
import Conway from './Conway';
import Helper from './Helper';

class World extends Component {
	render(){
		let config = this.props.config;
		let items = this.props.items;
		let slots = [], style, cell = {}, cellClassName;

		for( let i = 0; i < items.length; i++ ){
			for( let j = 0; j < items[ i ].length; j++ ){
				cell = items[i][j];
				cellClassName = 'cell ' + ( cell? 'alive' : 'dead' );
				style = {
					width: config.wsize - 1, 
                	height: config.hsize - 1	
				};
				slots.push(
					<div className={cellClassName} style={style}></div>
				);
			}
		}

		let gridStyle = {
	    	width: config.ratioW  * config.wsize, 
	        height: config.ratioH  * config.hsize
	    };
		
		return (
			<div className="grid" style={gridStyle}>{slots}</div>
		);
	}
}

export default class App extends Component {
	constructor(props) {
		super(props);

		let config = {
	  		wsize: 28,
	  		hsize: 28
	  	}
	  	config.ratioW = Math.floor( Helper.window.width / config.wsize );
		config.ratioH = Math.floor( Helper.window.height / config.hsize );	
		this.game = new Conway( config.ratioW, config.ratioH );
		this.config = config;

    	this.state = { items: this.game.items };
    	this.setTimer();
	}

	tick() {
		this.game.tick();
		this.setState( { items: this.game.items }, () => {
			this.setTimer();
		} );
	}
	
	onClickHandler( evt ) {
		//for debug
		//<div onClick={this.onClickHandler.bind(this)}>
		//this.tick();
	}
	
	setTimer() {
		let comp = this;
		this.timerId = setTimeout(function(){
			comp.tick();
		},100);
	}

	render() {
		let comp = this;
		return (
		  <div>
		  	<World config={this.config} items={this.state.items}/>
		  </div>
		);
	}
}
