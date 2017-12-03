module.exports = { 
 //param A : string
 //return an integer
	solve : function(A){
        if (A.length === 0) {
            return 0
        }
        var index = 0;
        while(!this.isPalindromic(A)) {
            A = this.insert(A, index, A[A.length - 1 - index]);
            index++;
        }
        return index;
	},
	isPalindromic: function(A) {
	    if (A.length <= 1) {
	        return true;
	    }
        var i = 0;
        var j = A.length - 1;
        while (i <= j) {
            if (A[i] !== A[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
	},
	insert: function(str, index, value) {
        return str.substr(0, index) + value + str.substr(index);
    }
};