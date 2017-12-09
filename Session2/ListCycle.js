/**
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Try solving it using constant additional space.
**/
// Definition for singly-linked list.
//			function Node(data){
//				this.data = data
//				this.next = null
//			}

module.exports = { 
	//param A : head node of linked list
	//return the head node in the linked list
	detectCycle : function(A){
        var fast = A;
        var slow = A;
        var hasCycle = false;

        while(fast && slow && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
            if (slow == fast) {
                hasCycle = true;
                break;
            }
        }
        
        if (!hasCycle) { 
            return null
        }
        fast = A;
        while (fast != slow) {
            fast = fast.next;
            slow = slow.next;
        }

        return fast;
	}
};
