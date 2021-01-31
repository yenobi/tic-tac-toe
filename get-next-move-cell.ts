import { GameField, O, X, columnsCoordinates, diagonalsCoordindates } from './models';
import { getValuesForCoordinates, isAnyEmptyCellIn, isRowInDanger } from './utils';

// todo: add tsdoc instead of comment
// return answer is [row, cellInARow] with indexes from 0 to 2
export function getNextMoveCell(currentGameField: GameField, currentPlayer: X | O): [number, number] {
  let emptyCellPointer: [number, number] = null;

  for (const currentRow of currentGameField) {
    if (!isAnyEmptyCellIn(currentRow)) continue;

    const emptyCellInTheCurrentRow: [number, number] = [currentGameField.indexOf(currentRow), currentRow.indexOf('_')];

    if (isRowInDanger(currentRow, currentPlayer)) {
      return emptyCellInTheCurrentRow;
    }

    if (emptyCellPointer === null) {
      emptyCellPointer = emptyCellInTheCurrentRow;
    }
  }

  for (const currentCol of columnsCoordinates) {
    const valuesOfCurrentCol = getValuesForCoordinates(currentCol, currentGameField);

    if (!isAnyEmptyCellIn(valuesOfCurrentCol)) continue;

    if (isRowInDanger(valuesOfCurrentCol, currentPlayer)) {
      const indexOfEmptyCellInMapOfColumns = valuesOfCurrentCol.indexOf('_');
      return currentCol[indexOfEmptyCellInMapOfColumns];
    }
  }

  for (const currentDiagonal of diagonalsCoordindates) {
    const valuesOfCurrentDiagonal = getValuesForCoordinates(currentDiagonal, currentGameField);

    if (!isAnyEmptyCellIn(valuesOfCurrentDiagonal)) continue;

    if (isRowInDanger(valuesOfCurrentDiagonal, currentPlayer)) {
      const indexOfEmptyCellInMapOfColumns = valuesOfCurrentDiagonal.indexOf('_');
      return currentDiagonal[indexOfEmptyCellInMapOfColumns];
    }
  }

  return emptyCellPointer;
}
