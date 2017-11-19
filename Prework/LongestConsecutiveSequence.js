module.exports = { 
	//param A : array of integers
	//return an integer
	longestConsecutive : function(A){
        if (A.length === 0) {
            return 0;
        }
    
        A.sort(function(a,b) {
          return a-b; 
        }); // [1,2,3,4,100,200]
        // [1,2,3,5,6,7,8,10]
    
        var max = 1;
        var i = 1;
        var length = 1;
        while (i < A.length) {
            if (A[i] == A[i-1]) {
                i++; 
                continue;
            }
            if (A[i] - A[i-1] == 1) {
                length++;
                max = Math.max(max, length);
            } else {
                length = 1;
            }
            i++;
        }
        
        return max;
	}
};