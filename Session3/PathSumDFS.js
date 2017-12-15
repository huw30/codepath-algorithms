/**
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Example :

Given the below binary tree and sum = 22,

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

Return 0 / 1 ( 0 for false, 1 for true ) for this problem
*/

// Definition for a  binary tree node
//			function TreeNode(data){
//				this.data = data
//				this.left = null
//				this.right = null
//			}

module.exports = { 
	//param A : root node of tree
	//param B : integer
	//return an integer
	hasPathSum : function(A, B){
        if (A == null) return 0;
        if (A.left == null && A.right == null) {
            return B - A.data == 0 ? 1 : 0;
        }
        if (A.left == null) {
            return this.hasPathSum(A.right, B - A.data);
        } else if (A.right == null) {
            return this.hasPathSum(A.left, B - A.data);
        }
        
        return this.hasPathSum(A.left, B - A.data) || this.hasPathSum(A.right, B - A.data);
	}
};
