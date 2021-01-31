import { Cell, GameField, X, O } from './models';

export function getValuesForCoordinates(coordinatesList: [number, number][], gameField: GameField): Cell[] {
  return coordinatesList.map(([rowPointer, cellPointer]) => gameField[rowPointer][cellPointer]);
}

export function isAnyEmptyCellIn(currentRow: Cell[]): boolean {
  return currentRow.some((cell) => cell === '_');
}

export function getEnemy(currentPlayer: X | O): X | O {
  return currentPlayer === 'x' ? 'o' : 'x';
}

export function isRowInDanger(row: Cell[], currentPlayer: X | O): boolean {
  let enemy = getEnemy(currentPlayer);
  const howManyEnemyCellsInARow = row.filter((cell) => cell === enemy).length;

  return howManyEnemyCellsInARow === 2;
}
