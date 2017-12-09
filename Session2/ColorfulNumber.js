/**
For Given Number N find if its COLORFUL number or not

Return 0/1

Example:

N = 23
2 3 23
2 -> 2
3 -> 3
23 -> 6
this number is a COLORFUL number since product of every digit of a sub-sequence are different. 

Output : 1
**/
module.exports = { 
	//param A : integer
	//return an integer
	colorful : function(A){
        var digits = [];
        while (A > 0) {
            var rem = A % 10;
            digits.push(rem);
            A = parseInt(A/10);
        } // [3,2,4,5]

        var i = 0;
        var bucket = {};

        while (i < digits.length) {
            var res = digits[i];
            if (bucket[res] != undefined) {
                return 0;
            }

            bucket[res] = true;

            var j = i + 1;
            while (j < digits.length) {
                res = res * digits[j];
                if (bucket[res] != undefined) {
                    return 0;
                }
                bucket[res] = true;
                j++;
            }
            i++;
        }
        return 1;
	}
};
