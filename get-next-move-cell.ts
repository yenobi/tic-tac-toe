import { GameField, O, X, MapOfCoordinates } from './models';
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

  const mapOfColumns: MapOfCoordinates = [
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
  ];
  for (const currentCol of mapOfColumns) {
    const valuesOfCurrentCol = getValuesForCoordinates(currentCol, currentGameField);

    if (!isAnyEmptyCellIn(valuesOfCurrentCol)) continue;

    if (isRowInDanger(valuesOfCurrentCol, currentPlayer)) {
      const indexOfEmptyCellInMapOfColumns = valuesOfCurrentCol.indexOf('_');
      return currentCol[indexOfEmptyCellInMapOfColumns];
    }
  }

  const mapOfDiagonals: MapOfCoordinates = [
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  for (const currentDiagonal of mapOfDiagonals) {
    const valuesOfCurrentDiagonal = getValuesForCoordinates(currentDiagonal, currentGameField);

    if (!isAnyEmptyCellIn(valuesOfCurrentDiagonal)) continue;

    if (isRowInDanger(valuesOfCurrentDiagonal, currentPlayer)) {
      const indexOfEmptyCellInMapOfColumns = valuesOfCurrentDiagonal.indexOf('_');
      return currentDiagonal[indexOfEmptyCellInMapOfColumns];
    }
  }

  return emptyCellPointer;
}
