var isValid = function (s) {
  const validStrings = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  var chars = s.split("");
  var isValidString = true;

  if (chars.length % 2 !== 0) {
    return false;
  }

  var index = 0;

  while (isValidString) {
    var char = chars[index];
    var nextChar = chars[index + 1];
    var objValue = validStrings[char];

    if (!nextChar) {
      isValidString = false;
    }

    if (nextChar == objValue) {
      chars.splice(index, 2);
      index = 0;
      continue;
    }

    index++;
  }
  return chars.length == 0 ? true : false;
};

// Ou o match é o próximo caracter  ou é o mesmo indice de trás pra frente do array.
// senão tiver match,

// "()"
// "(){}()"
// "({[()]})"
// "([])"
// "(([]){})"

console.log(isValid("(([]){})"));
