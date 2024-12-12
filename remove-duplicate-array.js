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

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
