/**
How many minimum numbers from fibonacci series are required such that sum of numbers should be equal to a given Number N?
Note : repetition of number is allowed.

Example:

N = 4
Fibonacci numbers : 1 1 2 3 5 .... so on
here 2 + 2 = 4 
so minimum numbers will be 2 
**/

module.exports = { 
 //param A : integer
 //return an integer
	fibsum : function(A){
        var fibNums = [];
        var a = 1, b = 1;
        fibNums.push(1);
        fibNums.push(1);
        while (true) {
            var c = a + b;
            if (c <= A) {   
                fibNums.push(c);
            } else {
                break;
            }
            a = b;
            b = c;
        }

        var count = 0;
        for (var i=fibNums.length-1; i>=0; i--) {
            var num = fibNums[i];
            while(num <= A) {
                A = A-num;
                count++;
            }
            if (A == 0) {
                break;
            }
        }
        return count;
	}
};
