/**
Say you have an array for which the ith element is 
the price of a given stock on day i.

Design an algorithm to find the maximum profit. 
You may complete as many transactions as you like 
(ie, buy one and sell one share of the stock multiple times). 
However, you may not engage in multiple transactions at the same time 
(ie, you must sell the stock before you buy again).

Example :

Input : [1 2 3]
Return : 2
*/
module.exports = { 
 //param A : array of integers
 //return an integer
	maxProfit : function(A){
        var max = 0;
    
        for (var i=0; i+1<A.length; i++) {
            
            if (A[i+1] - A[i] > 0) {
                max += A[i+1] - A[i];
            }
        }
        
        return max;
	}
};
