import { createGameField } from './create-game-field';
import { expect } from 'chai';

describe('create game field function', () => {
  it('should create an empty game field', () => {
    const emptyField = [
      ['_', '_', '_'],
      ['_', '_', '_'],
      ['_', '_', '_'],
    ];

    expect(createGameField()).to.be.eql(emptyField);
  });

  it('should create game field from the received string', () => {
    const input = `
      xo_
      ___
      ___
    `;
    const expectedGameField = [
      ['x', 'o', '_'],
      ['_', '_', '_'],
      ['_', '_', '_'],
    ];

    expect(createGameField(input)).to.eql(expectedGameField);
  });

  it('should create game field from the received string, more complex example', () => {
    const input = `
      x_x
      _o_
      _o_
    `;
    const expectedGameField = [
      ['x', '_', 'x'],
      ['_', 'o', '_'],
      ['_', 'o', '_'],
    ];

    expect(createGameField(input)).to.eql(expectedGameField);
  });
});
