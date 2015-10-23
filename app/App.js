import React, {Component} from 'react';
import Conway from './src/libs/Conway';
import Config from './src/Config';
import World from './src/components/World';

class App extends Component {
    constructor(props) {
        super(props);
        this.game = new Conway( Config.ratioW, Config.ratioH );
        this.state = { items: this.game.items };
        this.setTimer();
    }

    tick() {
        this.game.tick();
        this.setState( { items: this.game.items }, () => {
            this.setTimer();
        } );
    }
    
    setTimer() {
        let comp = this;
        this.timerId = setTimeout(function(){
            comp.tick();
        },Config.refreshRate_ms);
    }

    render() {
        return (
          <div>
            <World items={this.state.items}/>
          </div>
        );
    }
}

export default App;