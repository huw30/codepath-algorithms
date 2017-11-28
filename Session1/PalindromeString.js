module.exports = { 
	//param A : string
	//return an integer
	isPalindrome : function(A){
        if (A.length == 0) {
            return 1;
        }
        var allowedChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var i = 0;
        var j = A.length - 1;
        A = A.toLowerCase();

        while (i <= j) {
            if (allowedChars.indexOf(A.charAt(i)) === -1) {
                i++;
                continue;
            }
        
            if (allowedChars.indexOf(A.charAt(j)) === -1) {
                j--;
                continue;
            }

            if (A.charAt(i) !== A.charAt(j)) {
                return 0;
            }

            i++;
            j--;
        }
        return 1;
	}
};