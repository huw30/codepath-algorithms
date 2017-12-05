/**
Given an array of strings, return all groups of strings that are anagrams. 
Represent a group by a list of integers representing the index in the original list. 
Look at the sample case for clarification.

Example :

Input : cat dog god tca
Output : [[1, 4], [2, 3]]
cat and tca are anagrams which correspond to index 1 and 4. 
dog and god are another set of anagrams which correspond to index 2 and 3.
The indices are 1 based ( the first element has index 1 instead of index 0).

**/


module.exports = { 
	//param A : array of strings
	//return a array of array of integers
	anagrams : function(A){
	    if (A.length === 0) {
	        return [];
	    }
	    var res = [];
        var map = {};
        for (var i=0; i<A.length; i++) {
            var curr = A[i];
            var str = this.sort(curr);
            if (map[str] == undefined) {
                map[str] = [i+1];
            } else {
                map[str].push(i+1);
            }
        }
        
        for (var index in map) {
            res.push(map[index]);
        }
        return res;
	},
	sort: function(str) {
	    var arr = str.split('');
	    arr.sort();
	    return arr.join('');
	}
};
