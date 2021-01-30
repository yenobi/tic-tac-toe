import { expect } from 'chai';
import { GameField, Cell } from './models';
import { getValuesForCoordinates, isAnyEmptyCellIn, isRowInDanger } from './utils';

describe('utils fn', () => {
  it('should derive values from the game fields with coordinates list', () => {
    const gameField = [
      ['o', '_', '_'],
      ['_', 'x', '_'],
      ['_', '_', '_'],
    ] as GameField;
    const diagonalCoordinates: [number, number][] = [
      [0, 0],
      [1, 1],
      [2, 2],
    ];
    const diagonalValues = ['o', 'x', '_'];

    expect(getValuesForCoordinates(diagonalCoordinates, gameField)).to.eql(diagonalValues);
  });

  describe('is any empty cell in a row', () => {
    it('should return true if there is an empty row', () => {
      const rowWithEmptyCell = ['o', '_', '_'] as Cell[];
      expect(isAnyEmptyCellIn(rowWithEmptyCell)).to.be.true;
    });

    it('should return false if there is an empty row', () => {
      const filledRow = ['o', 'x', 'o'] as Cell[];
      expect(isAnyEmptyCellIn(filledRow)).to.be.false;
    });
  });

  describe('is row in danger', () => {
    it('should return true if row is in danger', () => {
      const dangerRow = ['x', '_', 'x'] as Cell[];
      expect(isRowInDanger(dangerRow, 'o')).to.be.true;
    });

    it('should return false if row is safe', () => {
      const dangerRow = ['x', '_', 'o'] as Cell[];
      expect(isRowInDanger(dangerRow, 'o')).to.be.false;
    });
  });
});
