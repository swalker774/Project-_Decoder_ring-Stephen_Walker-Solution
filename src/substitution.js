// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!isValidAlphabet(alphabet)) {
      return false;
    }
    const lowercaseInput = input.toLowerCase()
    let result = ""

    for (let char of lowercaseInput) {
      if (char === " ") {
        result += " "
      } else {
        const index = encode ? standardAlphabet.indexOf(char) : alphabet.indexOf(char);
        result += encode ? alphabet[index] : standardAlphabet[index];
      }
    }
    return result;
  }
  function isValidAlphabet(alphabet) {
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    const charSet = new Set(alphabet);
    return charSet.size === 26;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
