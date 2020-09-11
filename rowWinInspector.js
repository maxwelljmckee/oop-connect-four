
export class RowWinInspector {
    constructor(col1, col2, col3, col4) {
        this.col1 = col1;
        this.col2 = col2;
        this.col3 = col3;
        this.col4 = col4;
    }

    inspect() {
        for (let i = 5; i >= 0; i--) {
            if (col1[i] === col2[i] && col2[i] === col3[i] && col3[i] === col4[i]) {
                return col1[i]
            }
        }
        return 0
    }
}