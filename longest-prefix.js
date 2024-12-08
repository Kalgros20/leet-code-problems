/**
 * @param {string[]} strs
 * @return {string}
 */

//Brute force approach
// var longestCommonPrefix = function (strs) {
//   var hasPrefix = true;
//   var commonIndex = 0;
//   var commonPrefix = "";
//   var index = 0;

//   while (hasPrefix) {
//     hasPrefix = strs[index].startsWith(commonPrefix);

//     if (index === strs.length - 1) {
//       if (hasPrefix) {
//         commonPrefix = commonPrefix + (strs[0][commonIndex] || "");

//         if (commonPrefix == "") {
//           return "";
//         }

//         if (commonIndex === strs[0].length) {
//           return commonPrefix;
//         }

//         // Increment common index to check next character
//         commonIndex++;
//         // Reset index to initial point of list
//         index = 0;
//       }
//     } else {
//       index++;
//     }
//   }

//   return commonPrefix.slice(0, -1);
// };

//Efficient Solution
var longestCommonPrefix = function (strs) {
  strs.sort();
  var commoPrefix = "";

  for (var i = 0; i < strs[0].length; i++) {
    if (strs[0][i] != strs[strs.length - 1][i]) {
      break;
    }

    commoPrefix += strs[0][i];
  }

  return commoPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
