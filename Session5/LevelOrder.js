/**

Example :
Given binary tree

    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:

[
  [3],
  [9,20],
  [15,7]
]
Also think about a version of the question 
where you are asked to do a level order traversal of 
the tree when depth of the tree is much greater than 
number of nodes on a level.
*/

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
 //param A : root node of tree
 //return a array of array of integers
	levelOrder : function(A){
        var res = [];
        var queue = [];

        if (A !== null) {
            A.level = 0;
            queue.push(A);
        }

        while (queue.length > 0) {
            var curr = queue.shift();
            var currLevel = curr.level;

            if (!res[currLevel]) {
                res[currLevel] = [];
            }

            res[currLevel].push(curr.data);

            if (curr.left !== null) {
                curr.left.level = currLevel+1;
                queue.push(curr.left);
            }

            if (curr.right !== null) {
                curr.right.level = currLevel+1;
                queue.push(curr.right);
            }
        }

        return res;
	}
};
