/**
In the classic Towers of Hanoi problem, there are three rods, A, B, and C, 
and there are n number of discs of different unique sizes which can slide onto any rod. 
The puzzle starts with all the discs in a neat stack in ascending order of size on the rod A, 
the smallest at the top, thus making a conical shape.

The objective of the puzzle is to move the entire stack to rod C, obeying the following simple rules:

Only one disc can be moved at a time
Only the uppermost disc can be moved
No disc may be placed on top of a smaller disc
*/
var towerOfHanoi = function(n) {
	var moves = [];
	if (n == 0) {
		return moves;
	}
	helper(n, moves, 'A', 'C', 'B');

	return moves;
};
 
var helper = function(n,moves, src, des, temp) {
	if (n == 1) {
		moves.push(src + des);
	} else {
		helper(n-1, moves, src, temp, des);
		moves.push(src + des);
		helper(n-1, moves, temp, des, src);
	}
};

console.log(towerOfHanoi(3));
 
//moves = ['AC', 'AB', 'CB', 'AC', 'BA', 'BC', 'AC'];

// Time complexity
// O(n) = 2*O(n-1) + n
// O(1) = 2*0 + 1
// O(2) = 2* (2*0 + 1) + 2
// O(3) = 2* (2* (2*0 + 1) + 2) + 3

// O(2^n)
 
