/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let uniqueNumbers = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      uniqueNumbers++;
    } else {
      nums[i] = null;
    }
  }

  nums.sort();

  return uniqueNumbers;
};

console.log(removeElement([0, 0, 1, 1, 1, 2, 2, 3, 3, 1], 1));
