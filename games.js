import { Column } from "./column.js";
import { ColumnWinInspector } from "./ColumnWinInspector.js";
import { DiagonalWinInspector } from "./diagonalWinInspector.js";
import { RowWinInspector } from "./rowWinInspector.js";

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
    } else if (this.winner === 0) {
      return `${this.player1} v.s. ${this.player2}`;
    } else {
      return `Player ${this.winner} Wins!!!!`;
    }
  }

  playInColumn(colIndex) {
    this.columns[colIndex].add(this.currentPlayer);

    if (this.currentPlayer === 1) this.currentPlayer = 2;
    else this.currentPlayer = 1;

    this.checkForTie();
    if (!this.winner) {
      this.checkForRowWin();
      this.checkForColumnWin();
      this.checkForDiagonalWin();
    }
  }

  getTokenAt(rowIndex, colIndex) {
    return this.columns[colIndex].getTokenAt(rowIndex);
  }

  isColumnFull(colIndex) {
    if (this.winner !== 0) {
      return true;
    }
    return this.columns[colIndex].isFull();
  }

  checkForTie() {
    if (this.winner !== 0) {
      return;
    }
    if (this.columns.every((col, i) => this.isColumnFull(i))) {
      this.winner = 3;
    }
  }

  checkForColumnWin() {
    this.columns.forEach((col) => {
      let inspector = new ColumnWinInspector(col);
      if (inspector.inspect() === 1 || inspector.inspect() === 2) {
        this.winner = inspector.inspect();
        return;
      }
    });
  }

  checkForRowWin() {
    if (this.winner) {
      return;
    }

    for (let i = 0; i < 4; i++) {
      let colGroup = this.columns.slice(i, i + 4);
      let inspector = new RowWinInspector(...colGroup);
      if (inspector.inspect()) {
        this.winner = inspector.inspect();
        break;
      }
    }
  }

  checkForDiagonalWin() {
    if (this.winner) {
      return;
    }

    for (let i = 0; i < 4; i++) {
      let colGroup = this.columns.slice(i, i + 4);
      let inspector = new DiagonalWinInspector(...colGroup);
      if (inspector.inspect()) {
        this.winner = inspector.inspect();
        break;
      }
    }
  }
  
}
