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
        var stack = [];
        var sumStack = [];
        stack.push(A);
        sumStack.push(A.data);
        while (stack.length != 0) {
            var curr = stack.pop();
            var sum = sumStack.pop();

            if (curr.left == null && curr.right == null && sum == B) {
                return 1;
            }

            if (curr.left != null) {
                stack.push(curr.left);
                sumStack.push(sum + curr.left.data);
            }

            if (curr.right != null) {
                stack.push(curr.right);
                sumStack.push(sum + curr.right.data)
            }
        }

        return 0;
	}
};
