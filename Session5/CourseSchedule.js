/**
 There are a total of N courses you have to take, labeled from 1 to N. Some courses may have prerequisites, for example to take course 2 you have to first take course 1, which is expressed as a pair: [1,2]. 
Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses. return 1/0 if it is possible/not possible.
The list of prerequisite pair are given in two integer arrays B and C where B[i] is a prerequisite for C[i].

 Example: If N = 3 and the prerequisite pairs are [1,2] and [2,3], then you can finish courses in the following order: 1, 2 and 3. But if N = 2 and the prerequisite pairs are [1,2] and [2,1], then it is not possible for you to finish all the courses. 
 */
module.exports = { 
 //param A : integer
 //param B : array of integers
 //param C : array of integers
 //return an integer
	solve : function(A, B, C){
        if (A <= 0) {
            return 1;
        }
        
        var degree = {};
        var courseList = {};
        var queue = [];
        var result = [];
        
        //initialize degree and courseList
        for (var i = 1; i <= A; i++) {
            degree[i] = 0;
            courseList[i] = [];
        }
        
        //populate the degree list and courseList
        for (var j = 0; j < B.length; j++) {
            degree[C[j]]++;
            courseList[B[j]].push(C[j]);
        }
        
        //find the root
        for (var k = 1; k <= A; k++) {
            if (degree[k] === 0) {
                queue.push(k);
            }
        }

        while (queue.length > 0) {
            var curr = queue.shift();
            result.push(curr);
            for (var l=0; l<courseList[curr].length; l++) {
                var after = courseList[curr][l];

                if (result.indexOf(after) !== -1) {
                    return 0;
                }
    
                degree[after]--;
                if (degree[after] === 0) {
                    queue.push(after);
                }
            }
        }

        // not all courses are finished
        for (var l = 0; l < A; l++) {
            if (degree[l] > 0) {
                return 0;
            }
        }
        
        return 1;
	}
};
