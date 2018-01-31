/*
Given a 2 * N Grid of numbers, 
choose numbers such that the sum of the numbers
is maximum and no two chosen numbers 
are adjacent horizontally, vertically or diagonally, 
and return it.

Example:

Grid:
    1 2 3 4
    2 3 4 5
so we will choose
3 and 5 so sum will be 3 + 5 = 8


Note that you can choose more than 2 numbers
*/
module.exports = { 
 //param A : array of array of integers
 //return an integer
	adjacent : function(A){
        if (A.length == 0) {
            return 0;
        }
        var size = A[0].length;
        if (size == 0) {
            return 0;
        }

        var priorSum = 0; // column i - 2
        var lastSum = 0;  // column i - 1

        for (var i = 0; i < size; i++) {
            var total = Math.max(A[0][i], A[1][i]) + priorSum;
            var res = Math.max(total, lastSum);

            priorSum = lastSum;
            lastSum = res;
        }
        return Math.max(priorSum, lastSum);
	}
};
