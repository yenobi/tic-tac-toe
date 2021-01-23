import { getNextMoveCell } from './get-next-move-cell';
import { expect } from 'chai';
import { GameField } from './models';

describe('get next move cell', () => {
  describe('should return that prevent current player from losing next turn', () => {
    it('horizontal danger', () => {
      const fieldWithXWinOnNextMove = [
        ['x', '_', 'x'],
        ['o', 'x', '_'],
        ['_', '_', 'o'],
      ] as GameField;
      const winXCellCoordinates = [0, 1];

      expect(getNextMoveCell(fieldWithXWinOnNextMove, 'o')).to.eql(winXCellCoordinates);
    });

    it('horizontal danger, complex', () => {
      const fieldWithXWinOnNextMove = [
        ['_', '_', 'o'],
        ['o', 'x', '_'],
        ['x', '_', 'x'],
      ] as GameField;
      const winXCellCoordinates = [2, 1];

      expect(getNextMoveCell(fieldWithXWinOnNextMove, 'o')).to.eql(winXCellCoordinates);
    });

    it('vertical danger', () => {
      const fieldWithXWinOnNextMove = [
        ['o', 'o', 'x'],
        ['_', 'x', '_'],
        ['_', '_', 'x'],
      ] as GameField;
      const winXCellCoordinates = [1, 2];

      expect(getNextMoveCell(fieldWithXWinOnNextMove, 'o')).to.eql(winXCellCoordinates);
    });

    it('diagonal danger', () => {
      const fieldWithXWinOnNextMove = [
        ['x', '_', 'o'],
        ['_', 'x', '_'],
        ['_', '_', '_'],
      ] as GameField;
      const winXCellCoordinates = [2, 2];

      expect(getNextMoveCell(fieldWithXWinOnNextMove, 'o')).to.eql(winXCellCoordinates);
    });
  });

  it('should return first empty cell if play is not in danger', () => {
    const fieldWithoutImmediateThreats = [
      ['o', '_', '_'],
      ['_', 'x', '_'],
      ['_', '_', '_'],
    ] as GameField;
    const firstEmptyCell = [0, 1];

    expect(getNextMoveCell(fieldWithoutImmediateThreats, 'x')).to.eql(firstEmptyCell);
  });
});
