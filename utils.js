const prettyPrintMatrix = (matrix) => `${matrix.map(row => row.toString().replace(/,/g, ' ')).toString().replace(/,/g, '\n')}`;

const isValueInArray = (array, value) => array.some(item => item === value);

const arrayFromMatrixByColumn = (matrix) => (column) => matrix.map(row => row[column]);

const traverseArray = (array) => (...positions) => positions.reduce((value, position) => value[position], array);

const isClue = (matrix) => (...positions) => traverseArray(matrix)(...positions) > 0;

const isPossible = (matrix, x, y, value) => (isClue(matrix)(x, y)) ? false: !isValueInArray(traverseArray(matrix)(x), value);

module.exports = {
  prettyPrintMatrix,
  isValueInArray,
  arrayFromMatrixByColumn,
  traverseArray,
  isClue,
  isPossible
}