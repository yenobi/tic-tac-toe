import { isEndGame } from './is-end-game';
import { GameField } from './models';
import { expect } from 'chai';

describe('is end game', () => {
  describe('should return false', () => {
    it('on empty field', () => {
      const emptyField = [
        ['_', '_', '_'],
        ['_', '_', '_'],
        ['_', '_', '_'],
      ] as GameField;

      expect(isEndGame(emptyField, 'x')).to.be.false;
    });

    it('if there is no winner', () => {
      const fieldWithoutWinner = [
        ['o', '_', '_'],
        ['_', 'x', '_'],
        ['_', '_', 'x'],
      ] as GameField;

      expect(isEndGame(fieldWithoutWinner, 'o')).to.be.false;
    });
  });

  describe('should return true', () => {
    it('if there is no empty cell left', () => {
      const fieldWithoutEmptyCell = [
        ['x', 'o', 'x'],
        ['o', 'x', 'o'],
        ['o', 'x', 'o'],
      ] as GameField;

      expect(isEndGame(fieldWithoutEmptyCell, 'x')).to.be.true;
    });

    it('if there is winner in horizontal', () => {
      const fieldWithHorizontalWinner = [
        ['x', 'x', 'x'],
        ['_', 'x', 'o'],
        ['o', '_', 'o'],
      ] as GameField;

      expect(isEndGame(fieldWithHorizontalWinner, 'x')).to.be.true;
    });

    it('if there is winner in vertical', () => {
      const fieldWithVerticalWinner = [
        ['x', '_', 'o'],
        ['x', 'x', '_'],
        ['x', 'o', 'o'],
      ] as GameField;

      expect(isEndGame(fieldWithVerticalWinner, 'x')).to.be.true;
    });

    it('if there is winner in diagonal', () => {
      const fieldWithDiagonalWinner = [
        ['x', '_', '_'],
        ['_', 'x', 'o'],
        ['_', 'o', 'x'],
      ] as GameField;

      expect(isEndGame(fieldWithDiagonalWinner, 'x')).to.be.true;
    });
  });
});
