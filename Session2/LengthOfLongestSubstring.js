/**
Given a string, 
find the length of the longest substring without repeating characters.

Example:

The longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3.

For "bbbbb" the longest substring is "b", with the length of 1.
**/
module.exports = { 
	//param A : string
	//return an integer
	lengthOfLongestSubstring : function(A){
        var map = {};
        var maxLen = 0;
        var len = 0;
        for (var i=0; i<A.length; i++) {
            if (map[A[i]] == undefined) {
                len++;
            } else {
                len = Math.min(i - map[A[i]], len+1);
            }
            map[A[i]] = i;
            maxLen = Math.max(len, maxLen);
        }
        return maxLen;
	}
};
