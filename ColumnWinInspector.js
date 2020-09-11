export class ColumnWinInspector {
  constructor(column) {
    this.column = column;
  }

  inspect() {
    let rows = this.column.rows
    let count = 0;
    
    for (let i = rows.length - 1; i >= 0; i--) {
      if (!rows[i]) {
        count = 0
      }
      if (rows[i] === rows[i - 1]) {
        count++;
      } else {
        count = 0
      }
      if (count === 3) {
        return rows[i];
      }
    }
    return 0;
  }
}
