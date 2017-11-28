module.exports = { 
	//param A : array of integers
	//return an integer
	maxSubArray : function(A){
        var n = A.length;
    
        var dp = [];

        dp[0] = A[0];

        var max = dp[0];
    
        for(var i = 1; i<n; i++) {
            dp[i] = A[i] + (dp[i-1] > 0 ? dp[i-1] : 0);
            
            max = Math.max(max, dp[i]);
        }
    
        return max;
	}
};
