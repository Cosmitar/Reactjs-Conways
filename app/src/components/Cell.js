import React, {Component} from 'react';
import Config from './../Config';

class Cell extends Component {
    render(){
        let condition = this.props.condition;
        let className = 'cell ' + ( condition? 'alive' : 'dead' );
        let style = {
            width: Config.wsize - 1, 
            height: Config.hsize - 1
        };

        return (
            <div className={className} style={style}></div>
        );
    }
}

export default Cell;