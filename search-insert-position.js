/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (var i = 0; i <= nums.length; i++) {
    if (nums[i] == target) {
      return i;
    }

    if ((target < nums[i] && target <= nums[i + 1]) || i == nums.length) {
      return i;
    }
  }
};

console.log(searchInsert([1], 0));
