# Tic-tac-toe game

## todo:
- unit test for run game
- project structure
- docs in readme file
- migrate to string model in separate branch to compare
- cli tool to run the game?
- better strategies
-> first move to center
-> if possibility to win
## Description

- what is this repo about

## Check it yourself

- the instructions how to run the code

1. Pull the repository
2. Check the input game field

## Copy-pasted description

Your task is to implement TicTacToe class
Methods:

- getCurrentPlayerSymbol() should return x or o

- nextTurn(row, col) should properly update class state (change current player, update marks storage etc.)

- isFinished() - should return true if game is finished (e.g. there is a winner or it is a draw)

- getWinner() should return winner symbol (x or o) or null if there is no winner yet

- noMoreTurns() - should return true if there is no more fields to place a x or o

- isDraw() should return true if there is no more turns and no winner

- getFieldValue(row, col) should return matrix[row][col] value (if any) or null
