var removeDuplicates = function (nums) {
  let uniqueNumbers = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      uniqueNumbers++;
      nums[uniqueNumbers] = nums[i + 1];
    }
  }

  return uniqueNumbers;
};
