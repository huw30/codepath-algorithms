/**
Given a grid of size m * n, lets assume you are starting at (1,1) 
and your goal is to reach (m,n). At any instance, if you are on (x,y), 
you can either go to (x, y + 1) or (x + 1, y).

Now consider if some obstacles are added to the grids. How many unique paths would there be?
An obstacle and empty space is marked as 1 and 0 respectively in the grid.

Example :
There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
The total number of unique paths is 2.


*/
module.exports = { 
 //param A : array of array of integers
 //return an integer
	uniquePathsWithObstacles : function(A){
        return this.traversal(A, 0, 0);
	},
	traversal: function(A, i, j) {
	    if (!this.validPath(A, i, j)) {
	        return 0;
	    }
	    if (this.isAtEnd(A, i, j)) {
	        return 1;
	    }
	    return this.traversal(A, i+1, j) + this.traversal(A, i, j+1);
	},
	validPath: function(A, i, j) {
	    if (i >= A.length || j >= A[0].length) {
	        return false;
	    }
	    if (A[i][j] == 1)  {
	        return false;
	    }
	    return true;
	},
	isAtEnd: function(A, i, j) {
	    if (i === A.length - 1 && j === A[0].length - 1) {
	        return true;
	    }
	    return false;
	}
};
