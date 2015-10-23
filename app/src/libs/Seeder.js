class Seeder {
    static blinker( field, ox, oy ){
        field[ox][oy-1] = 1;
        field[ox][oy] = 1;
        field[ox][oy+1] = 1;
    }

    static toad( field, ox, oy ){
        field[ox][oy-2] = 1;
        field[ox][oy-1] = 1;
        field[ox][oy] = 1;
        field[ox+1][oy-1] = 1;
        field[ox+1][oy] = 1;
        field[ox+1][oy+1] = 1;
    }

    static glider( field, ox, oy ){
        field[ox-1][oy] = 1;
        field[ox][oy] = 1;
        field[ox+1][oy] = 1;
        field[ox+1][oy-1] = 1;
        field[ox][oy-2] = 1;
    }

    static chess( field, ox = 0, oy = 0 ){
        for( let i = 1; i < field.length-1; i++ ){
            for( let j = 1; j < field[ i ].length-1; j++ ){
                field[i][j] = ( (i+j) % 2 == 0 );
            }
        }
    }
}
export default Seeder;