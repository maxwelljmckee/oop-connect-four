export class ColumnWinInspector {
  constructor(column) {
    this.column = column;
  }

  inspect() {
    let count = 0;

    for (let i = 0; i < this.column.length - 1; i++) {
      if (column[i] === column[i + 1]) {
        count++;
      } else {
        count = 0;
      }
      if (count === 3) {
        return count[i];
      }
    }
    return 0;
  }
}
