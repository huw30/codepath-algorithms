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
        return this.traversal(A, []);
	},
	traversal: function(node, res) {
	    if (node === null) return res;
	    res.push(node.data);
	    this.traversal(node.left, res);
	    this.traversal(node.right, res);
	    return res;
	},
};
