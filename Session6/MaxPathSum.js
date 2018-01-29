/**
Given a binary tree, find the maximum path sum.

The path may start and end at any node in the tree.

Example :

Given the below binary tree,

       1
      / \
     2   3
Return 6.
*/
// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
 //param A : root node of tree
 //return an integer
    max: Number.MIN_SAFE_INTEGER,
    dp: [],
	maxPathSum : function(A){
	    this.sumforNode(A);
        var res = this.max;
        this.max = Number.MIN_SAFE_INTEGER;
        this.dp = [];
        return res;
	},
	sumforNode: function(root) {
	    if (root == null) {
	        return 0;
	    }
        if (this.dp[root.data]) {
            return this.dp[root.data];
        }

	    var leftMost = Math.max(0, this.sumforNode(root.left));
	    var rightMost = Math.max(0, this.sumforNode(root.right));
	    this.max = Math.max(this.max, leftMost + rightMost + root.data);
	    this.dp[root.data] = Math.max(leftMost, rightMost) + root.data;
	    return this.dp[root.data];
	}
};
