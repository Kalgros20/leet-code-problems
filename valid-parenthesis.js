var isValid = function (s) {
  const validStrings = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  var chars = s.split("");

  if (chars.length % 2 !== 0) {
    return false;
  }

  var isValid = true;
  var listSize = chars.length;

  for (let i = 0; i < listSize; i++) {
    var char = chars[i];
    var nextChar = chars[i + 1];
    var dictValue = validStrings[char];

    var charFromReverse = chars[s.length - (i + 1)];

    if (nextChar == dictValue) {
      i++;
      continue;
    }

    if (dictValue == charFromReverse) {
      listSize--;
      continue;
    }

    if (!(nextChar == dictValue)) {
      isValid = false;
    }
  }
  return isValid;
};

// Ou o match é o próximo caracter  ou é o mesmo indice de trás pra frente do array.
// senão tiver match,

// "()"
// "(){}()"
// "({[()]})"
// "([])"
// "(([]){})"

console.log(isValid("()"));
