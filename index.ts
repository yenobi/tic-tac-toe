// fn createGameField

// fn logCurrentStateOfGameField => log field from the input

// fn runGame (one move from one player) (field) => updatedField

// - determineWinner 

// field, firstPlayer, secondPlayer, nextMove

import { GameField, Row } from './models';

// assumption => the string alwaus has the proper format
// assumption => the `\n` is used to go to the next line



// return or danger square or empty one
function getNextSquare(field: GameField, enemy: string): [number, number] {
  let isDangerRow = false;
  let dangerSquare: [number, number];
  
  // let saveFirstEmptySquare;
  
  field.forEach((row, indexOfRow) => {
//     filter row with empty strings -> if any empty string save index
    const emptySuares: string[] = row.filter(square => square === '_');
    
     if (emptySquares.length === 1) {
      //     the row is in danger
//        save index of square and index of row
       
//        todo: change forEach to for cyecle to have possibility to exit the cyecl
      
    }
    //       the row is filled or 2 squares empty and player is safe
    //     just proceed with next row
  });
  
  

// if row has 2 enemy characters one by one
//   row => any empty spaces?
//     if yes and more then 1 -> we are ok
//       else => check the chars in the spaces
  
  
// if column has 2 enemy characters one by one
// if diagonal has 2 enemey charactes one by one
}

function makeMove(currentGameField: GameField) {
  const currentPlayer = detectNextPlayer(currentGameField);
  const enemy = currentPlayer === 'x' ? 'o' : 'x';
  
  const isCurrentPlayerInDanger = isAnotherGamerWinning(currentGameField, enemy);
  
//   todo: fn to find first empty spot instead of [2, 3]
  let nextMove: [number, number] = getNextSquare(field, enemy);

//     insert own char in the square
//     return the field
}




// todo: if did not end with task in 13.55 -> algorithm

// function runGame(field: GameField): GameField {
//   const currentField = createGameField();
// // fill in to prevent win of the opposite
// // random move
//   return updatedField;
// }



function MyTestAssert(name: string, actual: any, expected: any) {
  
 console.log(name)
 if (actual === expected) {
   console.log(' + OK');
 } else {
   console.log(' - FAIL, got '); 
   console.log(actual);
   console.log('instead of');
   console.log(expected);
 }
}

// logCurrentField(field) no output, just side effect logging
