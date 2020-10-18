const {
  prettyPrintMatrix,
  isValueInArray,
  arrayFromMatrixByColumn,
  isClue,
  isPossible
} = require('./utils');

const sudoku = [
  [0,2,0,5,0,8,4,0,0],
  [5,8,0,7,0,0,9,2,6],
  [0,0,0,0,0,0,8,1,0],
  [4,5,8,2,0,0,0,0,1],
  [0,0,0,4,0,3,0,0,0],
  [1,0,0,0,0,5,2,9,4],
  [0,6,5,0,0,0,0,0,0],
  [3,1,9,0,0,2,0,8,7],
  [0,0,7,1,0,9,0,6,0],
];

const x = 2;
const y = 2;
const value = 3;

console.log(`
${prettyPrintMatrix(sudoku)}
(!clue && !isValueInRow && !isValueInColumn) === isPossible
(!${isClue(sudoku)(x, y)} && !${isValueInArray(sudoku[x], value)} && !${isValueInArray(arrayFromMatrixByColumn(sudoku)(y), value)}) === ${isPossible(sudoku, x, y, value)}
Is Clue?: ${isClue(sudoku)(x, y)}
Is Value In Row?: ${isValueInArray(sudoku[x], value)}
Is Value In Column?: ${isValueInArray(arrayFromMatrixByColumn(sudoku)(y), value)}
Is Possible?: ${isPossible(sudoku, x, y, value)}
`);
