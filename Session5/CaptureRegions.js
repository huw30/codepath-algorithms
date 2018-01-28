/**

Given a 2D board containing 'X' and 'O', capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

For example,

X X X X
X O O X
X X O X
X O X X

After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
*/

var captureRegions = function(board) {
  if (board.length == 0 || board[0].length == 0) {
    return [];
  }
  var visited = [];
  
  var m = board.length;
  var n = board[0].length;

  for (var i=0; i<m; i++) {
    visited[i] = [];
    for (var j=0; j<n; j++) {
      visited[i][j] = 0;
    }
  } 

  for (var i=0; i<m; i++) {
    for (var j=0; j<n; j++) {
      if (board[i][j] == 'O') {
        isSurrunded(board, i, j, m, n, visited);
      }
    }
  }
  return board;
};

var isSurrunded = function(board, i, j, m, n, visited) {
  if (i >= m || j >= n || i < 0 || j < 0) {
    return false;
  }
  
  if (visited[i][j] == 1) {
    return true;
  }

  visited[i][j] = 1;

  if (board[i][j] == 'O') {
    if (
        isSurrunded(board, i+1, j, m, n, visited) &&
        isSurrunded(board, i, j+1, m, n, visited) &&
        isSurrunded(board, i-1, j, m, n, visited) &&
        isSurrunded(board, i, j-1, m, n, visited)
    ) {
      board[i][j] = 'X';
      return true;
    }
  }

  return true;
};

var board = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X'],
];

console.log(captureRegions(board));






