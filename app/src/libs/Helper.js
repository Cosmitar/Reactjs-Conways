export default class Helper {
	static getArray( x, y ){
		let retVal = Array.apply( 0, new Uint8Array( x )).map(function() { return Array.apply( 0, new Uint8Array( y )) });
		return retVal;
	}

	static get window() {
		return {
			width: window.innerWidth
				|| document.documentElement.clientWidth
				|| document.body.clientWidth,
			height: window.innerHeight
				|| document.documentElement.clientHeight
				|| document.body.clientHeight
		}
	}
}