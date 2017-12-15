// Definition for a  binary tree node
//			function TreeNode(data){
//				this.data = data
//				this.left = null
//				this.right = null
//			}

module.exports = { 
	//param A : root node of tree
	//param B : integer
	//param C : integer
	//return an integer
	lca : function(A, B, C){
	    if (!this.exists(A, B) || !this.exists(A, C)) {
	        return -1;
	    }
        var ancestor = this.findLowest(A, B, C);
        if (ancestor == null) {
            return -1;
        }
        return ancestor.data;
	},
	findLowest: function(A, B, C) {
	    if (A == null) return null;
	    if (A.data === B || A.data === C) return A;
	    var left = this.findLowest(A.left, B, C);
	    var right = this.findLowest(A.right, B, C);
	    if (left !== null && right !== null) {
	        return A;
	    }
	    return left !== null ? left : right;
	},
	exists: function(A, val) {
	    if (A == null) return false;
        if (A.data == val) return true;
        return this.exists(A.left, val) || this.exists(A.right, val);
	},
};