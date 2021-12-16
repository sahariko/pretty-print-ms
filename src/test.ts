import prettyPrint from '.';

describe('print-time', () => {
  it('Should print milliseconds when time is smaller than 1000', () => {
    expect(prettyPrint(912)).toBe('912ms');
  });

  it('Should print seconds when time is between 1000 and 1000 * 60', () => {
    expect(prettyPrint(5234)).toBe('5s');
  });

  it('Should print minutes and seconds when time is between 1000 * 60 and 1000 * 60 * 60', () => {
    expect(prettyPrint(123075)).toBe('2m 3s');
  });

  it('Should print hours and minutes when time is bigger than 1000 * 60 * 60', () => {
    expect(prettyPrint(46238459)).toBe('12h 50m');
  });
});
