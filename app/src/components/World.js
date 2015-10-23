import React, {Component} from 'react';
import Config from './../Config';
import Cell from './Cell';

class World extends Component {
    render(){
        let items = this.props.items;
        let slots = [];

        for( let i = 0; i < items.length; i++ ){
            for( let j = 0; j < items[ i ].length; j++ ){
                slots.push(
                    <Cell condition={items[i][j]}/>
                );
            }
        }

        let gridStyle = {
            width: Config.ratioW  * Config.wsize, 
            height: Config.ratioH  * Config.hsize
        };
        
        return (
            <div className="grid" style={gridStyle}>{slots}</div>
        );
    }
}

export default World;