export class ColumnWinInspector {
  constructor(column) {
    this.column = column;
  }

  inspect() {
    let count = 0;

    for (let i = 0; i < this.column.length - 1; i++) {
      if (column[i] === column[i + 1]) {
        // console.log(column[i]);
        count++;
        // console.log(count);
      } else {
        count = 0;
      }
      if (count === 3) {
        // console.log(column[i]);
        return this.column[i];
      }
    }
    // console.log(this.column);
    return 0;
  }
}
