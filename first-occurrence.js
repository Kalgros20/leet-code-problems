/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const needleLegnth = needle.length;

  for (var i = 0; i < haystack.length; i++) {
    let termToCompare = "";
    for (var j = 0; j < needleLegnth; j++) {
      termToCompare += haystack[i + j];
    }

    if (termToCompare == needle) {
      return i;
    }
  }

  return -1;
};

console.log(strStr("butsadasas", "sad"));
