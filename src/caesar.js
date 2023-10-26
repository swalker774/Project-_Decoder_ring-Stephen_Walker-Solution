// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letterWrap = (number) => {
    if (number > 122) {
      return number - 26;
    }
    else if (number < 97) { 
      return number + 26;
    }
    return number;
  };
  function caesar(input, shift = 3, encode = true) {
    let newStr = "";
    // your solution code here
    if (!shift || shift < -25 || shift > 25 || shift === 0) {
      return false;
    }
    input = input.toLowerCase();
    if (encode) {
      for (let x = 0; x < input.length; x++) {
        if (alphabet.indexOf(input[x]) != -1) {
          let temp = input[x].charCodeAt();
          let newVal = letterWrap(temp + shift);
          newStr += String.fromCharCode(newVal);
        } else {
          newStr += input[x];
        } 
      }
    }
    else {
      for (let x = 0; x < input.length; x++) {
        if (alphabet.indexOf(input[x]) != -1) {
          let temp = input[x].charCodeAt();
          let newVal = letterWrap(temp + shift* -1);
          newStr += String.fromCharCode(newVal);
        } else {
          newStr += input[x];
        }
      }
    }
    return newStr;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
