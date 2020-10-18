const {
  prettyPrintMatrix,
  isValueInArray,
  arrayFromMatrixByColumn,
  traverseArray,
  isClue,
  isPossible,
} = require('./utils');

const EMPTY_ARRAY = [];
const EMPTY_MATRIX = [[]];

const SUDOKU = [
  [0, 2, 0, 5, 0, 8, 4, 0, 0],
  [5, 8, 0, 7, 0, 0, 9, 2, 6],
  [0, 0, 0, 0, 0, 0, 8, 1, 0],
  [4, 5, 8, 2, 0, 0, 0, 0, 1],
  [0, 0, 0, 4, 0, 3, 0, 0, 0],
  [1, 0, 0, 0, 0, 5, 2, 9, 4],
  [0, 6, 5, 0, 0, 0, 0, 0, 0],
  [3, 1, 9, 0, 0, 2, 0, 8, 7],
  [0, 0, 7, 1, 0, 9, 0, 6, 0],
];

const FIRST_COLUMN = [0, 5, 0, 4, 0, 1, 0, 3, 0];

const PRETTY_SUDOKU = `0 2 0 5 0 8 4 0 0
5 8 0 7 0 0 9 2 6
0 0 0 0 0 0 8 1 0
4 5 8 2 0 0 0 0 1
0 0 0 4 0 3 0 0 0
1 0 0 0 0 5 2 9 4
0 6 5 0 0 0 0 0 0
3 1 9 0 0 2 0 8 7
0 0 7 1 0 9 0 6 0`;

describe('prettyPrintMatrix', () => {
  test('writes 0x0 data properly', () => {
    expect(prettyPrintMatrix(EMPTY_MATRIX)).toBe('');
  });

  test('pretty prints sudoku data properly', () => {
    expect(prettyPrintMatrix(SUDOKU)).toBe(PRETTY_SUDOKU);
  });
});

describe('isValueInArray', () => {
  test('false if array is empty', () => {
    expect(isValueInArray(EMPTY_ARRAY, 9)).toBe(false);
  });

  test('false if value is does not exist', () => {
    expect(isValueInArray(SUDOKU[0], 9)).toBe(false);
  });

  test('true if value is does exist', () => {
    expect(isValueInArray(SUDOKU[0], 2)).toBe(true);
  });
});

describe('arrayFromMatrixByColumn', () => {
  test('proper array for source matrix', () => {
    expect(arrayFromMatrixByColumn(SUDOKU)(0)).toStrictEqual(FIRST_COLUMN);
  });
});

describe('traverseArray', () => {
  test('undefined if matrix is empty', () => {
    expect(traverseArray(EMPTY_MATRIX)(0, 0)).toBe(undefined);
  });

  test('value of [0,0] in matrix', () => {
    expect(traverseArray(SUDOKU)(0, 0)).toBe(0);
  });

  test('value of [1,1] in matrix', () => {
    expect(traverseArray(SUDOKU)(1, 1)).toBe(8);
  });
});

describe('isClue', () => {
  test('[0,0] should return false', () => {
    expect(isClue(SUDOKU)(0, 0)).toBe(false);
  });
  test('[2,2] should return false', () => {
    expect(isClue(SUDOKU)(2, 2)).toBe(false);
  });
  test('[0,1] should return true', () => {
    expect(isClue(SUDOKU)(0, 1)).toBe(true);
  });
  test('[1,0] should return true', () => {
    expect(isClue(SUDOKU)(1, 0)).toBe(true);
  });
});

describe('isPossible', () => {
  test('returns false if value is clue', () => {
    expect(isPossible(SUDOKU, 0, 1, 1)).toBe(false);
  });

  test('returns true if space is not clue and value is unique in row', () => {
    expect(isPossible(SUDOKU, 0, 0, 1)).toBe(true);
  });

  test('returns false if space is not clue and value is repeated in row', () => {
    expect(isPossible(SUDOKU, 0, 0, 2)).toBe(false);
  });
});
