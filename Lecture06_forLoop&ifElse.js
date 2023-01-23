console.log(`To find vowels in the given string.`);
var sentence = "Yes Just do it man, i know you can.";
var totalVowelsCount = 0;
for (let index = 0; index < sentence.length; index++) {
  var vowelsIn = sentence.charAt(index);
  if (
    vowelsIn == "a" ||
    vowelsIn == "e" ||
    vowelsIn == "i" ||
    vowelsIn == "o" ||
    vowelsIn == "u"
  ) {
    console.log(vowelsIn);
    totalVowelsCount = 1 + totalVowelsCount;
  }
}
console.log(totalVowelsCount);
console.log(
  `====================================================================`
);

var sentence = "Yes Just do it man, i know you can";
var revconcat = "";
for (let index = sentence.length; index >= 0; index--) {
  // console.log(index);
  var reverse = sentence.charAt(index);
  revconcat = revconcat.concat(reverse);
}
console.log(revconcat);
