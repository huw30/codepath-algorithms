/**
Given a sorted array of integers, find the starting and ending position of a given target value.

Your algorithm’s runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example:

Given [5, 7, 7, 8, 8, 10]

and target value 8,

return [3, 4].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 0, 5
    var result = [-1, -1];
    if (nums.length === 0) {
        return result
    }

    var left = 0, 
        right = nums.length - 1, 
        mid,
        temp = 0;
    
    while (left <= right) {
        mid = parseInt(left + (right - left) / 2);
        if (nums[mid] === target) {
            temp = mid;
            break;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else { //nums[mid] > target
            right = mid - 1;
        }
    }

    if (nums[temp] === target) {
        var temp2 = temp;
        while (nums[temp] === target) {
            result[0] = temp;
            temp--;
        }
        
        while (nums[temp2] === target) {
            result[1] = temp2;
            temp2++;
        }
    }
    
    return result;
};