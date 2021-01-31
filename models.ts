// todo: my first idea was to implement field as array of arrays,
// so first implementation will stick to this model

// todo: after finish -> check if i could implement the game with linear
// data structures (string with calculated shift)
export type X = 'x';
export type O = 'o';
export type EmptyCell = '_';
export type Cell = EmptyCell | X | O;
export type Row = [Cell, Cell, Cell];
export type GameField = [Row, Row, Row];
export type MapOfCoordinates = Array<[[number, number], [number, number], [number, number]]>;

export const columnsCoordinates: MapOfCoordinates = [
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

export const diagonalsCoordindates: MapOfCoordinates = [
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
