/**
Given a m x n grid filled with non-negative numbers, 
find a path from top left to bottom right 
which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time. 

Example :

Input : 

    [  1 3 2
       4 3 1
       5 6 1
    ]

Output : 8
     1 -> 3 -> 2 -> 1 -> 1
*/

module.exports = { 
 //param A : array of array of integers
 //return an integer
	minPathSum : function(A){
        if (A.length == 0) {
            return 0;
        }
        var m = A.length - 1;
        var n = A[0].length - 1;
        var res = 0;
        var dp = [];

        for (var i=0; i<=m; i++) {
            dp[i] = [];
        }

        res += this.minMove(A, 0, 0, m, n, dp);
        return res;
	},
	minMove: function(A, row, col, m, n, dp) {
        if (!this.isValidMove(A, row, col, m, n)) {
            return Number.MAX_SAFE_INTEGER;
        }
        if (row == m && col == n) {
            return A[m][n];
        }
        if (dp[row][col] !== undefined) {
            return dp[row][col];
        }

        var curr = A[row][col];
        var right = this.minMove(A, row, col + 1, m, n, dp);
        var down = this.minMove(A, row + 1, col, m, n, dp);

        dp[row][col] = Math.min(right, down) + curr;
        return dp[row][col];
	},
	isValidMove: function(A, row, col, m, n) {
	    if (row < 0 || col < 0) {
	        return false;
	    }
	    if (row > m || col > n) {
	        return false;
	    }
	    return true;
	}
};
