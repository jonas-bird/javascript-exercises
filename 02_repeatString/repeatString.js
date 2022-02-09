const repeatString = function(word, number) {
  /*function that takes a string and a number and returns the string repeated the number of times
   * */
  let accumulator = "";
  if (number < 0){
    return ("ERROR")
  }
  for (let i = 0; i < number; i++) {
    accumulator += word;
  }
  return accumulator;
};

// Do not edit below this line
module.exports = repeatString;
