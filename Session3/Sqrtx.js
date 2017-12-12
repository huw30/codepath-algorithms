/**
Implement int sqrt(int x).

Compute and return the square root of x.

If x is not a perfect square, return floor(sqrt(x))

Example :

Input : 11
Output : 3
DO NOT USE SQRT FUNCTION FROM STANDARD LIBRARY
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0 || x === 1 ) return x;

    var left = 1, right = parseInt(x/2) + 1;
    
    while (left <= right) {
        var mid = parseInt((left + right)/ 2);
        if(mid * mid == x) {
            return Math.floor(mid);
        }

        if(mid * mid < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

    }
    return right;
};