import { GameField, Row, O, X } from './models';

function calcMoves(row: Row): [number, number] {
  let counterX = 0;
  let counterY = 0;

  row
    .filter((square) => square !== '_')
    .forEach((square) => {
      const isX = square === 'x';
      if (isX) {
        counterX++;
      } else {
        counterY++;
      }
    });

  return [counterX, counterY];
}

export function getCurrentPlayer(currentGameField: GameField): X | O {
  const moves = currentGameField.map((row) => calcMoves(row));

  const [amountOfX, amountOfO] = moves.reduce(
    ([currentX, currentY], [counterX, counterY]) => {
      return [currentX + counterX, currentY + counterY];
    },
    [0, 0],
  );

  return amountOfX <= amountOfO ? 'x' : 'o';
}
