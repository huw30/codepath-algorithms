/**
Given a string s and a dictionary of words dict, 
determine if s can be segmented into a space-separated 
sequence of one or more dictionary words.

For example, given

s = "myinterviewtrainer",
dict = ["trainer", "my", "interview"].
Return true
because "myinterviewtrainer" can be segmented as "my interview trainer".

Return false / true for this problem
*/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if (s.length === 0) {
        return false;
    }
    
    let dp = {};
    
    dp[0] = true;
    dp[s.length] = false;
    
    for (let i=1; i<=s.length; i++) {
        for (let j=0; j<i; j++) {
            if (dp[j] && wordDict.includes(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    
    return dp[s.length];
};