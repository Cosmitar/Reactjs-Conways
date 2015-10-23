"use strict"
import Helper from './libs/Helper';

class Config {
    constructor(){
        this.wsize = 28;
        this.hsize = 28;
        this.refreshRate_ms = 100;
        let window = Helper.window;
        this.ratioW = Math.floor( window.width / this.wsize );
        this.ratioH = Math.floor( window.height / this.hsize );
    }
}

export default new Config;