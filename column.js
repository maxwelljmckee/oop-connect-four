export class Column {
  constructor() {
    this.rows = ["", "", "", "", "", ""];
  }

  add(playerNum) {
    for (let i = 5; i >= 0; i--) {
      if (!this.rows[i]) {
        this.rows[i] = playerNum;
        return;
      }
    }
  }

  getTokenAt(rowIndex) {
    // if !token return null
    // returns 1 for player 1
    // returns 2 for player 2
  }
}
