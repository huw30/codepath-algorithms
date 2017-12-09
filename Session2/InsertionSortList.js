/**
Sort a linked list using insertion sort.

Example :

Input : 1 -> 3 -> 2

Return 1 -> 2 -> 3
**/

// Definition for singly-linked list.
//			function Node(data){
//				this.data = data
//				this.next = null
//			}

module.exports = { 
	//param A : head node of linked list
	//return the head node in the linked list
	insertionSortList : function(A){
        var result = null;
        var left = A;
        
        while (left) {
            if (!result) {
                result = new Node(left.data);
            } else {
                var right = result;
                while (right) {
                    if (left.data < right.data) {
                        var tmp = new Node(right.data);
                        tmp.next = right.next;
    
                        right.data = left.data;
                        right.next = tmp;
                        break;
                    } else if (!right.next) {
                        right.next = new Node(left.data);
                        break;
                    }
                    
                    right = right.next;
                }
            }

            left = left.next;
        }
        
        return result;
	}
};
