/**
Given a collection of numbers, return all possible permutations.

Example:

[1,2,3] will have the following permutations:

[1,2,3]
[1,3,2]
[2,1,3] 
[2,3,1] 
[3,1,2] 
[3,2,1]
*/

module.exports = { 
 //param A : array of integers
 //return a array of array of integers
	permute: function(A) {
        var res = [];
        this.helper(res, [], A);
        return res;
	},
	helper: function(res, temp, A) {
	    if (temp.length == A.length) {
	        res.push(temp.slice());
	    } else {
	        for (var i=0; i<A.length; i++) {
	            if (temp.indexOf(A[i]) !== -1) continue;
    	        temp.push(A[i]);
    	        this.helper(res, temp, A);
    	        temp.pop();
	        }
	    }
	}
};
