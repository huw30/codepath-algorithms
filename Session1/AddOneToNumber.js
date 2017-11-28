module.exports = { 
	//param A : array of integers
	//return a array of integers
	plusOne : function(A){
        var carry = 1;
        var j = 0;
        while (j < A.length && A[j] == 0) {
            A.shift();
        }

        var i = A.length - 1;
        while(i >= 0) {
            var sum = carry + A[i];
            carry = sum >= 10 ? 1 : 0
            sum = sum % 10;
            A[i] = sum;
            i--;
        }

        if (carry == 1) {
            A.unshift(1);
        }

        return A;
	}
};
