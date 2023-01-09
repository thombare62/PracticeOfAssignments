function squareOfWordLength(arg1, arg2, arg3) {
  console.log(`1.1] Created function with name squreOfWordLength`);
  var wordLength = arg1.length;
  var squareOfLength = wordLength * wordLength;
  console.log(
    `1.2 A) Length of the given word "${arg1}"= ${wordLength} & Square of the length= ${squareOfLength}`
  );
  var wordLength2 = arg2.length;
  var squareOfLength2 = wordLength2 * wordLength2;
  console.log(
    `1.2 B) Length of the given word "${arg2}"= ${wordLength2} & Square of the length= ${squareOfLength2}`
  );
  var wordLength3 = arg3.length;
  var squareOfLength3 = wordLength3 * wordLength3;
  console.log(
    `1.2 B) Length of the given word "${arg3}"= ${wordLength3} & Square of the length= ${squareOfLength3}`
  );
  console.log(`1.3] Given words are as follows`);
  console.log(arg1);
  console.log(arg2);
  console.log(arg3);
}
squareOfWordLength("JavaScript", "Google Chrome", "Developer Smart");

var angularFun = function () {
  var str = "I am Angular Developer";
  console.log(`Given string= ${str}`);
  var stringLength = str.length;
  var splitRes = str.split(" ");
  var lenAfterSplit = splitRes.length;
  var divideResult = stringLength / lenAfterSplit;
  console.log(
    `2.1] Length of the given string= ${stringLength} and length divide by total no of words available in string= ${divideResult}`
  );
  var multiplyResult = stringLength * lenAfterSplit;
  console.log(
    `2.2] Length of the given string= ${stringLength} and length multiply by total no of words available in string= ${multiplyResult}`
  );
};
angularFun();
