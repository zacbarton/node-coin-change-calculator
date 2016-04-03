const expect = require('chai').expect;
const ccc = require('../');

describe('coin-change-calculator', function desc() {
  it('should be a function', () => {
    expect(ccc).to.be.a('function');
  });

  it('should not error if no denominations are supplied', () => {
    const change = ccc(1);
    expect(change).to.not.be.an('error');
  });

  it('should not error if value is not a number', () => {
    const change = ccc('a');
    expect(change).to.not.be.an('error');
  });

  it('should not error if value is negative', () => {
    const change = ccc(-1);
    expect(change).to.deep.equal([]);
  });

  it('should return correct change', () => {
    const change = ccc(23);
    expect(change).to.deep.equal([20, 2, 1]);
  });

  it('should return correct change with custom denominations', () => {
    const change = ccc(23, [5, 1]);
    expect(change).to.deep.equal([5, 5, 5, 5, 1, 1, 1]);
  });

  it('should not error if custom denominations are invalid', () => {
    const change = ccc(23, ['a', 'b']);
    expect(change).to.deep.equal([20, 2, 1]);
  });
});
