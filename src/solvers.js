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
  var numRooks = 0;
  
  // this.set, this.togglePiece(r, c), this.hasAnyRooksConflicts
  // this.findNRooksSolution(n), 
  // recursion to find next possible
  // base case when n rooks are placed and no rookConflicts
  
  // create empty n board
  var board = new Board({n: 3});
  count = 0; 
 // var f = function(psition 0 -> n*n)
  // if(position === n*n ) { return; }
  //loop thu col
     //loop thru row
      //if no conflict
        //add a rock to board.toggle(row, col)
        //numrock ++
      //}
  //f(n++);
  // if numrock  === n 
        //count ++ 

  









/*
  const findSol = function(board) {
    for (i = 0; i < n; i++) {
      // console.log('findSol: ', board);
      for (j = 0; i < n; i++) {
        board.get(i)[j] = 1;
        console.log('findSol: ', board);
        numRooks++;
        if (board.hasAnyRooksConflicts) {
          board.togglePiece(i, j);
          numRooks--;
        } else {
          findSol(board);
        }
      }
    }
    if (numRooks === 4) {
      solutionCount++;
      console.log(board);
    }
  };
  findSol(board);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
*/

  
  var find = function(row, col) {
   
      //loop thru what?
      

    }
  }




};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = [];
  

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
