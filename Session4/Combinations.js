/**
Given two integers n and k, return all possible combinations of k numbers out of 1 2 3 ... n.

Make sure the combinations are sorted.

To elaborate,

Within every entry, elements should be sorted. [1, 4] is a valid entry while [4, 1] is not.
Entries should be sorted within themselves.
Example :
If n = 4 and k = 2, a solution is:

[
  [1,2],
  [1,3],
  [1,4],
  [2,3],
  [2,4],
  [3,4],
]
*/

module.exports = { 
 //param A : integer
 //param B : integer
 //return a array of array of integers
	res: [],
	combine: function(A, B) {
	    if (A < B) {
	        return [];
	    }
        var res = [];
        this.helper(A, B, 1, [], res);

        return res;
	},
	helper: function(A, B, start, temp, res) {
	    if (temp.length === B) {
	        var curr = temp.slice()
	        res.push(curr);
	        return;
	    } else {
	        for (var i=start; i<=A; i++) {
	            temp.push(i);
	            this.helper(A, B, i+1, temp, res);
	            temp.pop();
	        }
	    }
	    
	}
};
