/**
You are given two linked lists representing two non-negative numbers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

    342 + 465 = 807
Make sure there are no trailing zeros in the output list
So, 7 -> 0 -> 8 -> 0 is not a valid response even though the value is still 807.
**/

// Definition for singly-linked list.
//			function Node(data){
//				this.data = data
//				this.next = null
//			}

module.exports = { 
	//param A : head node of linked list
	//param B : head node of linked list
	//return the head node in the linked list
	addTwoNumbers : function(A, B){
        var carry = 0;
        var sum = 0;
        var pointer = new Node(0);
        var head = pointer;

        while (A !== null || B !== null || carry !== 0) {
            var Adata = A === null ? 0 : A.data;
            var Bdata = B === null ? 0 : B.data;

            sum = Adata + Bdata + carry;
            carry = sum >= 10 ? 1 : 0;
            sum = sum % 10;

            var curr = new Node(sum);
            pointer.next = curr;
            pointer = curr;

            A = A ? A.next : null;
            B = B ? B.next : null;
        }
        
        return head.next;
	}
};
