import { Cell, GameField, O, X } from './models';

type MapOfColumns = [
  [[number, number], [number, number], [number, number]],
  [[number, number], [number, number], [number, number]],
  [[number, number], [number, number], [number, number]],
];

function getEnemy(currentPlayer: X | O): X | O {
  return currentPlayer === 'x' ? 'o' : 'x';
}

function isRowInDanger(row: Cell[], currentPlayer: X | O): boolean {
  let enemy = getEnemy(currentPlayer);
  const howManyEnemyCellsInARow = row.filter((cell) => cell === enemy).length;

  return howManyEnemyCellsInARow === 2;
}

// todo: add tsdoc instead of comment
// return answer is [row, cellInARow] with indexes from 0 to 2
export function getNextMoveCell(currentGameField: GameField, currentPlayer: X | O): [number, number] {
  let emptyCellPointer: [number, number] = null;

  // check if horizontals are in danger
  for (const currentRow of currentGameField) {
    const isAnyEmptyCellInCurrentRow = currentRow.some((cell) => cell === '_');

    if (!isAnyEmptyCellInCurrentRow) continue;

    const emptyCellInTheCurrentRow: [number, number] = [currentGameField.indexOf(currentRow), currentRow.indexOf('_')];

    if (isRowInDanger(currentRow, currentPlayer)) {
      return emptyCellInTheCurrentRow;
    }

    if (emptyCellPointer === null) {
      emptyCellPointer = emptyCellInTheCurrentRow;
    }
  }

  // check if verticals are in danger
  const mapOfColumns: MapOfColumns = [
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
    const valuesOfCurrentCol = currentCol.map(([rowPointer, cellPointer]) => currentGameField[rowPointer][cellPointer]);

    // todo: add fn utril to keep code dry
    const isAnyEmptyCellInCurrentCol = valuesOfCurrentCol.some((cell) => cell === '_');

    if (!isAnyEmptyCellInCurrentCol) continue;

    if (isRowInDanger(valuesOfCurrentCol, currentPlayer)) {
      const indexOfEmptyCellInMapOfColumns = valuesOfCurrentCol.indexOf('_');
      return currentCol[indexOfEmptyCellInMapOfColumns];
    }
  }
}
