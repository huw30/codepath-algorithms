/**
Given N * M field of O's and X's, where O=white, X=black
Return the number of black shapes. A black shape consists of one or more adjacent X's (diagonals not included)

Example:

OOOXOOO
OOXXOXO
OXOOOXO

answer is 3 shapes are  :
(i)    X
     X X
(ii)
      X
 (iii)
      X
      X
Note that we are looking for connected shapes here.

For example,

XXX
XXX
XXX
is just one single connected black shape.
*/

module.exports = { 
 //param A : array of strings
 //return an integer
	black : function(A){
        if (A.length < 1) {
            return 0;
        }
        var m = A.length;
        var n = A[0].length;
        var res = 0;
        var visited = [];

        for (var i=0; i<m; i++) {
            visited[i] = [];
        }

        for (var i=0; i<m; i++) {
            for (var j=0; j<n; j++) {
                if (A[i][j] === 'X') {
                    res++;
                    this.convertNeiborghs(A, i, j, m, n, visited);
                }
            }
        }
        return res;
	},
	convertNeiborghs: function(A, i, j, m, n, visited) {
	    if (i < 0 || j < 0 || i >= m || j >= n) {
	        return;
	    }

	    if (A[i][j] === 'O') {
	        return;
	    }
	    if (visited[i][j] === true) {
	        return;
	    }

        visited[i][j] = true;
        A[i] = this.setCharAt(A[i], j, 'O');

        this.convertNeiborghs(A, i+1, j, m, n, visited);
        this.convertNeiborghs(A, i, j+1, m, n, visited);
        this.convertNeiborghs(A, i-1, j, m, n, visited);
        this.convertNeiborghs(A, i, j-1, m, n, visited);
	},
	setCharAt: function(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }
};
