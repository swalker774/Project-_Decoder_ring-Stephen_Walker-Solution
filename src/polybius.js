// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const polybiusSquare = {
      A: "11",
      B: "21",
      C: "31",
      D: "41",
      E: "51",
      F: "12",
      G: "22",
      H: "32",
      I: "42",
      J: "42",
      K: "52",
      L: "13",
      M: "23",
      N: "33",
      O: "43",
      P: "53",
      Q: "14",
      R: "24",
      S: "34",
      T: "44",
      U: "54",
      V: "15",
      W: "25",
      X: "35",
      Y: "45",
      Z: "55",
    };
    let output = "";

    if (encode) {
      input = input.toUpperCase();
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          output += " ";
        } else {
          output += polybiusSquare[input[i]];
        }
      }
    } else {
      if (input.replace(/ /g, "").length % 2 !== 0) {
        return false;
      }
      const polybiusSquareDecoder = {};
      for (let key in polybiusSquare) {
        polybiusSquareDecoder[polybiusSquare[key]] = key;
      }
      for (let i = 0; i < input.length; i += 2) {
        if (input[i] === " ") {
          output += " ";
          i--;
        } else {
          let foundLetter =
            polybiusSquareDecoder[input[i] + input[i + 1]].toLowerCase();
          if (foundLetter === "i" || foundLetter === "j") {
            output += "(i/j)";
          } else {
            output +=
              polybiusSquareDecoder[input[i] + input[i + 1]].toLowerCase();
          }
        }
      }
    }
    return output;
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
