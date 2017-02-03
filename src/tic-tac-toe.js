class TicTacToe {
    constructor() {
        this.field = [[null, null, null],[null, null, null],[null, null, null]];
        this.sign = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.sign;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] == null){
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            if (this.sign === 'x') this.sign = 'o';
            else this.sign = 'x';
        }
    }

    isFinished() {
        if (this.getWinner() !== null || this.isDraw() || this.noMoreTurns()) return true;
        return false;
    }

    getWinner() {
        //rows
             if (this.field[0][0] !== null && this.field[0][0] == this.field[0][1] && this.field[0][0] == this.field[0][2]) return this.field[0][0];
        else if (this.field[1][0] !== null && this.field[1][0] == this.field[1][1] && this.field[1][0] == this.field[1][2]) return this.field[1][0];
        else if (this.field[2][0] !== null && this.field[2][0] == this.field[2][1] && this.field[2][0] == this.field[2][2]) return this.field[2][0];
        //columns
        else if (this.field[0][0] !== null && this.field[0][0] == this.field[1][0] && this.field[0][0] == this.field[2][0]) return this.field[0][0];
        else if (this.field[0][1] !== null && this.field[0][1] == this.field[1][1] && this.field[0][1] == this.field[2][1]) return this.field[0][1];
        else if (this.field[0][2] !== null && this.field[0][2] == this.field[1][2] && this.field[0][2] == this.field[2][2]) return this.field[0][2];
        //diagonals
        else if (this.field[0][0] !== null && this.field[0][0] == this.field[1][1] && this.field[0][0] == this.field[2][2]) return this.field[0][0];
        else if (this.field[0][2] !== null && this.field[0][2] == this.field[1][1] && this.field[0][2] == this.field[2][0]) return this.field[0][2];
        else return null;
    }

    noMoreTurns() {
        for (var i = 0; i < 3; i++){
            for (var j = 0; j < 3; j++){
                if (this.field[i][j] == null) return false;
            }
        }
        return true;
    }

    isDraw() {
        return (!this.noMoreTurns() || this.getWinner()) ? false : true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
