
export class Column {
  constructor() {
    this.rows = ["", "", "", "", "", ""];
  }

  ////// POPULATE ROW ARRAY WITH CURRENTPLAYER NUMBER ///////
  add(playerNum) {
    for (let i = 5; i >= 0; i--) {
      if (!this.rows[i]) {
        this.rows[i] = playerNum;
        return;
      }
    }
  }

  //////// IDENTIFY TOKEN AT INDEX /////////
  getTokenAt(rowIndex) {
    if (this.rows[rowIndex] === 1) {
        return 1;
    } else if (this.rows[rowIndex] === 2) {
        return 2;
    } else  {
        return null;
    }
  }

  isFull() {
      return this.rows.every(el => el);
  }
}
