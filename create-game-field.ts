import { Cell, GameField, EmptyCell, Row } from './models';

function fillTheGameField(fieldState: string): GameField {
  const oneLineField = fieldState.trim();
  const rowsState = oneLineField.split('\n') as [Cell, Cell, Cell];

  return rowsState.map((row: Cell) => row.trim().split('') as Row) as [Row, Row, Row];
}

export function createGameField(initialFieldState?: string): GameField {
  const emptyCell = '_' as EmptyCell;
  const emptyField = [
    [emptyCell, emptyCell, emptyCell],
    [emptyCell, emptyCell, emptyCell],
    [emptyCell, emptyCell, emptyCell],
  ] as GameField;

  if (!initialFieldState) {
    return emptyField;
  }

  return fillTheGameField(initialFieldState);
}
