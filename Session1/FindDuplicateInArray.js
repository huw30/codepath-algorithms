module.exports = { 
	//param A : array of integers
	//return an integer
	repeatedNumber : function(A){
        var map = {};
        for (var i=0; i<A.length; i++) {
            if (map[A[i]]) {
                var currCount = map[A[i]];
                map[A[i]] = currCount + 1;
            } else {
                map[A[i]] = 1;
            }
        }
        for(var key in map) {
            if (map[key] > 1) {
                return key;
            }
        }

        return -1;
	}
};