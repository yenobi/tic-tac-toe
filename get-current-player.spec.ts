import { getCurrentPlayer } from './get-current-player';
import { expect } from 'chai';
import { GameField } from './models';

describe('get current player fn', () => {
  it('should return x', () => {
    const currentFieldState = [
      ['x', 'o', '_'],
      ['_', '_', '_'],
      ['_', '_', '_'],
    ] as GameField;

    expect(getCurrentPlayer(currentFieldState)).to.be.equal('x');
  });

  it('should also return x', () => {
    let currentFieldState = [
      ['x', 'o', 'o'],
      ['_', '_', 'o'],
      ['_', '_', '_'],
    ] as GameField;

    expect(getCurrentPlayer(currentFieldState)).to.be.equal('x');
  });

  it('should return o', () => {
    let currentFieldState = [
      ['x', 'o', 'x'],
      ['_', '_', '_'],
      ['_', '_', '_'],
    ] as GameField;

    expect(getCurrentPlayer(currentFieldState)).to.be.equal('o');
  });
});
