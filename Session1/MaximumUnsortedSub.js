module.exports = { 
 //param A : array of integers
 //return a array of integers
	subUnsort : function(A){
        var res = [-1];
        var start = 0;
        var end = A.length - 1;
        for(start=0; start<A.length-1; start++) {
            if ((A[start] > A[start+1])) {
                break;
            }
        }
        if (start === A.length -1) {
            return res; // sorted
        }
        for(end = A.length - 1; end>=0; end--) {
            if ((A[end] < A[end-1])) {
                break;
            }
        }
        
        var max = A[start]; var min = A[start];
        for(var i = start + 1; i <= end; i++) {
            if(A[i] > max)
                max = A[i];
            if(A[i] < min)
                min = A[i];
        }

        for(var i = 0; i < start; i++) {
            if(A[i] > min){  
                start = i;
                break;
            }      
        }
        for(var i = A.length -1; i >= end+1; i--) {
            if(A[i] < max) {
                end = i;
                break;
            } 
        } 

        if (start !== -1 && end != -1) {
            res = [start, end];
        }
        return res;
	}
};
