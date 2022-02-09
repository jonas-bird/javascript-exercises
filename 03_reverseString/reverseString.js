const reverseString = function(aString) {
// Function takes a string and returns its reverse
  let revString = "";
  for(let i = aString.length - 1; i >= 0; i--) {
    revString += aString[i];
  }
  return revString
};

// Do not edit below this line
module.exports = reverseString;
