console.log(`To find vowels in given string: \n`);
string = "I am very good IT Developer";
count = 0;
for (let index = 0; index < string.length; index++) {
  var eachChar = string.charAt(index);
  let eachCharInLow = eachChar.toLowerCase();
  // console.log(eachCharInLow);
  if (
    eachCharInLow == "a" ||
    eachCharInLow == "e" ||
    eachCharInLow == "i" ||
    eachCharInLow == "o" ||
    eachCharInLow == "u"
  ) {
    count = 1 + count;
  }
}
console.log(`Given string ==> ${string}`);
console.log(`The total number of vowels in the given string ==> ${count}`);
console.log(
  `==================================================================`
);
console.log(`To find sum of cubes from 1 to 5: \n`);
function sumOfCubes() {
  counter = 0;
  for (let index = 1; index <= 5; index++) {
    let multi = index * index * index;
    //console.log(multi);
    counter = counter + multi;
  }
  console.log(`The sum of cubes from 1 to 5 ==> ${counter}`);
}
sumOfCubes();
console.log(
  `==================================================================`
);
console.log(`To find odd positioned characters from a given string: \n`);

function oddPositionedChars(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && i % 2 !== 0) {
      result = result + str[i];
    }
  }
  console.log(result);
}

const string1 = "Hard work always pays back";
const string2 = "Soon I will be Angular IT Champ";

oddPositionedChars(string1);
oddPositionedChars(string2);

console.log(
  `==================================================================`
);
console.log(`TO LOG VOWELS FROM A GIVEN STRING`);
let str = "Hello world im back";
revStr = "";
for (let i = 0; i < str.length; i++) {
  newStr = str.charAt(i);
  if (
    newStr == "a" ||
    newStr == "e" ||
    newStr == "i" ||
    newStr == "o" ||
    newStr == "u"
  ) {
    revStr = revStr.concat(newStr);
  }
}
console.log(revStr);
