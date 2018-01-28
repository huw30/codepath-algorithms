/**
Find largest distance
Given an arbitrary unweighted rooted tree which consists of N (2 <= N <= 40000) nodes. The goal of the problem is to find largest distance between two nodes in a tree. Distance between two nodes is a number of edges on a path between the nodes (there will be a unique path between any pair of nodes since it is a tree). The nodes will be numbered 0 through N - 1.

The tree is given as an array P, there is an edge between nodes P[i] and i (0 <= i < N). Exactly one of the i’s will have P[i] equal to -1, it will be root node.

Example:
If given P is [-1, 0, 0, 0, 3], then node 0 is the root and the whole tree looks like this: 
          0
       /  |  \
      1   2   3
               \
                4  
One of the longest path is 1 -> 0 -> 3 -> 4 and its length is 3, thus the answer is 3. Note that there are other paths with maximal distance.
*/
module.exports = { 
 //param A : array of integers
 //return an integer
	solve : function(A){
	    var tree = TreeNodes;
	    
	    // Init each node of the tree
	    for (var i=0; i<A.length; i++) {
	        var curr = new Node(i);
            tree.addNewNode(curr);
	    }

        // adding the relationship for each tree
	    for (var i=0; i<A.length; i++) {
	        var curr = tree.getNodeByVal(i);
	        if (A[i] === -1) {
	            tree.root = curr;
	        } else {
	            var parent = tree.getNodeByVal(A[i]);
	            parent.children.push(curr);
	        }
	    }

        var maxDistance = this.maxDistance(tree.root);

        tree.nodes = [];
        tree.root = null;

        return maxDistance;
	},
	maxDistance: function(root) {
	    if (root == null) {
	        return 0;
	    }

        var t = [];

        for (var i=0; i<root.children.length; i++) {
            t[i] = this.maxDepth(root.children[i]);
        }

        var dia = 0;
        if (t.length > 1) {
            var max = Math.max.apply(null, t); // get the max of the array
            t.splice(t.indexOf(max), 1); // remove max from the array
            var sec = Math.max.apply(null, t);
            dia = max + sec;
        } else if (t.length == 1){
            dia = t[0];
        }

        var p = [];        
        for (var i=0; i<root.children.length; i++) {
            p[i] = this.maxDistance(root.children[i]);
        }

        var max = 0;
        for (var i=0; i<p.length; i++) {
            max = Math.max(max, p[i]);
        }

        return Math.max(dia, max);
	},
	maxDepth: function(root) {
	    if (root == null) return 0;

        var t = [];

        for (var i=0; i<root.children.length; i++) {
            t[i] = this.maxDepth(root.children[i]);
        }

        var max = 0;

        for (var i=0; i<t.length; i++) {
            max = Math.max(t[i], max);
        }

        return max + 1;
	},
};

var TreeNodes = {
    nodes: [],
    root: null,
    getRoot: function() {
        return this.root;
    },
    getNodeByVal: function(val) {
        for(var i=0; i<this.nodes.length; i++) {
            if (this.nodes[i].val == val) {
                return this.nodes[i];
            }
        }
        return null;
    },
    addNewNode: function(node) {
        this.nodes.push(node);
    }
};
var Node = function(val) {
    this.val = val;
    this.children = [];
};
