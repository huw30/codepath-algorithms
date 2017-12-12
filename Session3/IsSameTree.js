/**
Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

Return 0 / 1 ( 0 for false, 1 for true ) for this problem

Example :

Input : 

   1       1
  / \     / \
 2   3   2   3

Output : 
  1 or True

*/
// Definition for a  binary tree node
//			function TreeNode(data){
//				this.data = data
//				this.left = null
//				this.right = null
//			}

module.exports = { 
	//param A : root node of tree
	//param B : root node of tree
	//return an integer
	isSameTree : function(A, B){
	    if (A == null && B == null) return 1;
	    if (A == null || B == null) return 0;
	    if (A.data == B.data && 
	        this.isSameTree(A.left, B.left) && 
	        this.isSameTree(A.right, B.right)) {
	        return 1;
	    }
	    return 0;
	}
};
