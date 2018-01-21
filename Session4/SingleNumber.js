/**
Given an array of integers, every element appears twice except for one. Find that single one.

Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example :

Input : [1 2 2 3 1]
Output : 3
*/

module.exports = { 
 //param A : array of integers
 //return an integer
	singleNumber : function(A){
	    var res = 0;
        for (var i=0; i<A.length; i++) {
            res = res ^ A[i];
        }
        return res;
	}
};
