module.exports = { 
	//param A : integer
	//return a array of array of integers
	prettyPrint : function(A) {
        var n = (A - 1) + A;
        var res = [];
        
        for (var i=0; i<n; i++) {
            res[i] = [];
            for (var j=0; j<n; j++) {
                // (A-1), (A-1) is the center
                res[i][j] = Math.max(Math.abs(i-(A-1)), Math.abs(j-(A-1)))+1
            }
        }
        return res;
	}
};