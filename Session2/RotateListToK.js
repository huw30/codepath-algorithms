/**
Given a list, rotate the list to the right by k places, where k is non-negative.

For example:

Given 1->2->3->4->5->NULL and k = 2,
return 4->5->1->2->3->NULL.

**/


// Definition for singly-linked list.
//			function Node(data){
//				this.data = data
//				this.next = null
//			}

module.exports = { 
	//param A : head node of linked list
	//param B : integer
	//return the head node in the linked list
	rotateRight : function(A, B){
	    if (A == null || A.next == null) {
	        return A;
	    }
	    var dummy = new Node(0);
	    dummy.next = A;
	    var pointer = dummy;
	    var preNewHead = dummy;

        for (var i=0; pointer.next != null; i++) {
            pointer = pointer.next;
        }
        
        for (var j=i-B%i; j>0; j--) {
            preNewHead = preNewHead.next;
        }

        pointer.next = dummy.next;
        dummy.next = preNewHead.next;
        preNewHead.next = null;

        return dummy.next;
	}
	
};
