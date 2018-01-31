/**
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Example :

Input : [1 2]
Return :  1
*/

module.exports = { 
 //param A : array of integers
 //return an integer
	maxProfit : function(A){
        var max = 0;
        var min = A[0];
        for (var i=1; i<A.length; i++) {
            min = Math.min(min, A[i]);
            max = Math.max(max, A[i] - min);
        }
        return max;
	}
};
