/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (head === null) return null;
    return toBST(head, null);
};

var toBST = function(head, tail) {
    var slow = head;
    var fast = head;

    if (head == tail) {
        return null;
    }

    while (fast !== tail && fast.next !== tail) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    var root = new TreeNode(slow.val);
    root.left = toBST(head, slow);
    root.right = toBST(slow.next, tail);

    return root;
}