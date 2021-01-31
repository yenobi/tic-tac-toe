import { getNextMoveCell } from './get-next-move-cell';
import { GameField, O, X } from './models';

export function makeMove(currentGameField: GameField, currentPlayer: X | O) {
  const [moveRow, moveCell] = getNextMoveCell(currentGameField, currentPlayer);

  return currentGameField.map((row, index) => {
    if (index !== moveRow) {
      return row;
    }

    return row.map((cell, index) => {
      if (index !== moveCell) {
        return cell;
      }

      return currentPlayer;
    });
  }) as GameField;
}
