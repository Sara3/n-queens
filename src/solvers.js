/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = [];
  for (let i = 0; i < n; i++) {
    var arr = [];
    for (let j = 0; j < n; j++) {
      if (i === j) {
        arr.push(1);
      } else {
        arr.push(0);
      }
    }
    solution.push(arr);  
  }
  

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};
// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});

  const findSol = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (let i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyRooksConflicts()) {
        findSol(row + 1);
      }
      board.togglePiece(row, i);
    }
  };

  findSol(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
// var m = 5;
window.findNQueensSolution = function(n) {
  var isFound = false;
  var board = new Board({n: n});
  var sol = [];
  const findSol = function(row) {
    // var line = [];
    if (row === n) {
      sol.push(JSON.stringify(board));
      isFound = true; 
    }
    while (!isFound) { 
      for (let i = 0; i < m; i++) {
        board.togglePiece(row, i);
        if (!board.hasAnyQueensConflicts()) {
          findSol(row + 1);
        } 
        board.togglePiece(row, i); 
      }
    } 
  };
  console.log('BOARD', sol[0]);

  findSol(0);
  // iterate board and push values into sol
  
  console.log('Single solution for ' + n + ' queens:', sol[0]);
  return JSON.parse(sol[0]);
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  const findSol = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (let i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        findSol(row + 1);
      }
      board.togglePiece(row, i);
    }
  };

  findSol(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  console.log('soln count: ', solutionCount);
  return solutionCount;
};
