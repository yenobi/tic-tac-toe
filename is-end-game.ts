import { GameField, X, O, columnsCoordinates, diagonalsCoordindates, MapOfCoordinates } from './models';
import { getValuesForCoordinates, isAnyEmptyCellIn } from './utils';

function check(coordinates: MapOfCoordinates, currentPlayer: X | O, currentGameField: GameField) {
  return coordinates.reduce((isEnd, colCoords) => {
    if (isEnd) {
      return isEnd;
    }

    const values = getValuesForCoordinates(colCoords, currentGameField);

    return values.every((cell) => cell === currentPlayer);
  }, false);
}

function isWinnerInTheGame(gameField: GameField, currentPlayer: X | O): boolean {
  const isWinnerInHorizontals = gameField.reduce((isEnd, currentRow) => {
    if (isEnd) {
      return isEnd;
    }

    return currentRow.every((cell) => cell === currentPlayer);
  }, false);

  if (isWinnerInHorizontals) {
    return isWinnerInHorizontals;
  }

  const isWinnerInVerticals = check(columnsCoordinates, currentPlayer, gameField);

  if (isWinnerInVerticals) {
    return isWinnerInVerticals;
  }

  const isWinnerInDiagonals = check(diagonalsCoordindates, currentPlayer, gameField);

  if (isWinnerInDiagonals) {
    return isWinnerInDiagonals;
  }

  return false;
}

export function isEndGame(gameField: GameField, currentPlayer: X | O): boolean {
  const isWinnerOnField = isWinnerInTheGame(gameField, currentPlayer);

  if (isWinnerOnField) {
    return isWinnerOnField;
  }

  const isAnyEmptyCell = gameField.reduce((isEmpty, row) => {
    if (!isEmpty) {
      return !isEmpty;
    }

    return isAnyEmptyCellIn(row);
  }, true);

  return !isAnyEmptyCell;
}
