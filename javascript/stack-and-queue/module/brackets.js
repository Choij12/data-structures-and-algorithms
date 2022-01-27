'use strict';

let validateBrackets = (string) => {
  let resultsArr1 = [];
  let resultsArr2 = [];
  let balanced;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
      resultsArr1.push(string[i]);
    }
    if (string[i] === ')' || string[i] === ']' || string[i] === '}') {
      resultsArr2.push(string[i]);
    }
  }

  if (resultsArr1.length !== resultsArr2.length || resultsArr1.length === 0) {
    return (balanced= false);
  }
  for (let j = 0; j < resultsArr1.length; j++) {

    if (
      (resultsArr1[j] === '(' && string.includes(')')) ||
        (resultsArr1[j] === '{' && string.includes('}')) ||
        (resultsArr1[j] === '[' && string.includes(']'))
    ){
      balanced = true;
    } else {
      balanced = false;
    }
  }

  return balanced;

};

module.exports = validateBrackets;
