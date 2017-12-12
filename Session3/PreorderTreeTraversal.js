/**
Given a binary tree, return the preorder traversal of its nodes’ values.

Example :
Given binary tree

   1
    \
     2
    /
   3
return [1,2,3].
*/
// Definition for a  binary tree node
//			function TreeNode(data){
//				this.data = data
//				this.left = null
//				this.right = null
//			}

module.exports = { 
	//param A : root node of tree
	//return a array of integers
	preorderTraversal : function(A){
	    var res = [];

	    if (A === null) {
	        return res;
	    }

        var stack = [];
        
        stack.push(A);
        
        while (stack.length != 0) {
            var curr = stack.pop();
            res.push(curr.data);
            if (curr.right) {
                stack.push(curr.right);
            }
            if (curr.left) {
                stack.push(curr.left);
            }
        }
        return res;
	}
};
