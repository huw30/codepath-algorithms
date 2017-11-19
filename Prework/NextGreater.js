module.exports = { 
	//param A : array of integers
	//return a array of integers
	nextGreater : function(A){
        for(var i=0; i<A.length; i++) {
            var curr = A[i];
            for(var j=i+1; j<A.length; j++) {
                if (A[j] > A[i]) { // possible next greater
                    A[i] = A[j];
                    break;
                }
            }
            if (curr === A[i]) {
            	A[i] = -1;
            }
        }
        return A;
	}
};