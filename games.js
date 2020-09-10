import { Column } from "./column.js";

export class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = 1;
    this.columns = [];
    this.winner = 0;

    for (let i = 0; i < 7; i++) {
      this.columns.push(new Column());
    }
  }

  getName() {
    if (this.winner === 3) {
      return `${this.player1} ties with ${this.player2}`;
    } else if ((this.winner = 0)) {
      return `${this.player1} v.s. ${this.player2}`;
    }
  }

  playInColumn(colIndex) {
    this.columns[colIndex].add(this.currentPlayer);

    if (this.currentPlayer === 1) this.currentPlayer = 2;
    else this.currentPlayer = 1;

    this.checkForTie();
  }

  getTokenAt(rowIndex, colIndex) {
    return this.columns[colIndex].getTokenAt(rowIndex);
  }

  isColumnFull(colIndex) {
    return this.columns[colIndex].isFull();
  }

  checkForTie() {
    if (this.columns.every((col, i) => this.isColumnFull(i))) {
      this.winner = 3;
    }
  }
}
