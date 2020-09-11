
export class DiagonalWinInspector {
    constructor(col1, col2, col3, col4) {
        this.col1 = col1;
        this.col2 = col2;
        this.col3 = col3;
        this.col4 = col4;
    }

    inspect() {
        for (let i = 5; i > 2; i--) {
            if (
                this.col1.rows[i] === this.col2.rows[i - 1] &&
                this.col2.rows[i - 1] === this.col3.rows[i - 2] &&
                this.col3.rows[i - 2] === this.col4.rows[i - 3]
            ) {
                return this.col1.rows[i];
            } else if (
                this.col1.rows[i - 3] === this.col2.rows[i - 2] &&
                this.col2.rows[i - 2] === this.col3.rows[i - 1] &&
                this.col3.rows[i - 1] === this.col4.rows[i]
            ) {
                return this.col4.rows[i];
            }
        }
        
        return 0;
    }
}
