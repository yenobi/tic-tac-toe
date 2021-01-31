import { createGameField } from './create-game-field';
import { isEndGame } from './is-end-game';
import { O, X } from './models';
import { makeMove } from './make-move';
import { getEnemy } from './utils';

export function runGame() {
  const gameField = createGameField();
  // will be some randomazier
  let currentPlayer: X | O = 'x';

  let isEndOfCurrentGame = false;
  let field = gameField;
  do {
    field = makeMove(field, currentPlayer);
    // todo: add enable logger flag for each move
    // console.log('--------- new move:')
    // console.log(field)
    isEndOfCurrentGame = isEndGame(field, currentPlayer);
    currentPlayer = getEnemy(currentPlayer);
  } while (!isEndOfCurrentGame);

  // { winner: x | o | null, gameField: '' }
  return field;
}
