/**
Given an array of N integers, 
find the pair of integers in the array
which have minimum XOR value. 
Report the minimum XOR value.

Examples : 
Input 
0 2 5 7 
Output 
2 (0 XOR 2) 
Input 
0 4 7 9 
Output 
3 (4 XOR 7)

Constraints: 
2 <= N <= 100 000 
0 <= A[i] <= 1 000 000 000
*/

module.exports = { 
 //param A : array of integers
 //return an integer
	findMinXor : function(A){
	    var min = Number.MAX_SAFE_INTEGER;
	    A.sort(function(a, b) { return a-b; });
	    for (var i=0; i<A.length - 1; i++) {
	        min = Math.min(min, A[i] ^ A[i+1])
	    }
        return min;
	}
};

/**
Time: O(n*Logn)
Space: O(1)
*/
