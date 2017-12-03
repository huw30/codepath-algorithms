module.exports = { 
	//param A : string
	//param B : string
	//return a strings
	addBinary : function(A, B){
        var i = A.length - 1;
        var j = B.length - 1;
        var k = 0;
        var carry = 0;
        var res = [];
        while (i >= 0 || j >= 0 || carry == 1) {
            var aByte = (i >= 0) ? parseInt(A[i--]) : 0;
            var bByte = (j >= 0) ? parseInt(B[j--]) : 0;
            var sum = aByte ^ bByte ^ carry;
            carry = (aByte + bByte + carry) >= 2 ? 1 : 0
            res[k++] = sum;
        }
        
        return res.reverse().join('');
	}
};