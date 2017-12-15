/**
Write a program that takes 
as its input an instance of 
TreeNode representing the root 
of a tree and returns a int 
value representing the number 
of nodes in the tree with no children.
*/

function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function countLeaf(node) {
    return helper(node, 0);
}
function helper(node, count) {
    if (node == null) return count;
    if (node.left == null && node.right == null) return count = count + 1;
    count += helper(node.left, count) + helper(node.right, count);
    return count;
}


var node6 = new TreeNode(6);
var node4 = new TreeNode(4);
var node3 = new TreeNode(3);
var node9 = new TreeNode(9);
var node5 = new TreeNode(5);

node6.left = node4;
node6.right = node5;
node4.left = node3;
node4.right = node9;

console.log(countLeaf(node6)); //3
