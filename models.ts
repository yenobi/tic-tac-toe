// todo: my first idea was to implement field as array of arrays,
// so first implementation will stick to this model

// todo: after finish -> check if i could implement the game with linear
// data structures (string with calculated shift)
type X = 'x';
type O = 'o';
type EmptyCell = '_';
type Cell = EmptyCell | X | O;
export type Row = [Cell, Cell, Cell];
export type GameField = [Row, Row, Row];
