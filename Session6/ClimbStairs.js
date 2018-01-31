//https://i.imgur.com/CtakAmQ.gif
/**
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example :

Input : 3
Return : 3

Steps : [1 1 1], [1 2], [2 1]
*/

module.exports = { 
 //param A : integer
 //return an integer
    dp: [],
	climbStairs : function(A){
        if (A == 0) return 0;
        if (A == 1) return 1;
        if (A == 2) return 2;
        if (this.dp[A]) return this.dp[A];
        this.dp[A] = this.climbStairs(A - 1) + this.climbStairs(A - 2);
        return this.dp[A];
	}
};
