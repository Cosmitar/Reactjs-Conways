import Helper from './Helper';
import Seeder from './Seeder.js';
export default class Conway {
	constructor( width, height ) {
		this.items = Helper.getArray( height, width );
		
		//seeder Blinker pattern
		//Seeder.blinker( this.items, 6, 8 );

		//seeder Toad pattern
		//Seeder.toad( this.items, 6, 8 );

		//seeder Glider pattern
		//Seeder.glider( this.items, 6, 8 );

		//seeder Chess pattern
		Seeder.chess( this.items );

		
		
	}

	getNeighbors( x, y ) {
		return {
			nw: this.items[x-1][y-1],
			w: this.items[x][y-1],
			sw: this.items[x+1][y-1],
			n: this.items[x-1][y],
			s: this.items[x+1][y],
			ne: this.items[x-1][y+1],
			e: this.items[x][y+1],
			se: this.items[x+1][y+1]
		}
	}

	tick() {
		let movements = [], neighbors, livingNeighbors = 0;
		let cell = {}, newStatus;
		let rule1,rule2,rule3,rule4;
		for( let i = 1; i < this.items.length-1; i++ ){
			for( let j = 1; j < this.items[ i ].length-1; j++ ){
				cell = this.items[ i ][ j ];

				//calculate living neighbors
				neighbors = this.getNeighbors( i, j );
				livingNeighbors = 0;
				for( let key in neighbors ){
					if( !isNaN( neighbors[key] )){
						livingNeighbors+= neighbors[key];
					}
				}

				//evaluate Conway's rules
				rule1 = cell && livingNeighbors < 2;
				rule2 = cell && livingNeighbors == 2 || livingNeighbors == 3;
				rule3 = cell && livingNeighbors > 3;
				rule4 = !cell && livingNeighbors == 3;

				newStatus = ( rule2 || rule4 ) && !( rule1 || rule3 );
				if( cell != newStatus ){
					movements.push({
						alive: newStatus,
						x: i,
						y: j
					});
				}
				
			}
		}
		for( cell of movements ){
			this.items[cell.x][cell.y] = cell.alive;
		}
	}
}