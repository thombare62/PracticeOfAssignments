console.log(`1. Finding EVEN or ODD number.`);

function oddEven(num) {
  if (num % 2 == 0) {
    console.log(`The given number= "${num}" is an EVEN number`);
  }
  if (num % 2 !== 0) {
    console.log(`The given number= "${num}" is an ODD number`);
  }
}
oddEven(45);
oddEven(70);
oddEven(67);
oddEven(98);
console.log(`**********************************************`);
console.log(`2. Checking voting eligibility.`);
function vote(age) {
  if (age >= 18) {
    console.log(`The person with age= ${age} is eligible for vote`);
  }
  if (age < 18) {
    console.log(`The person with age= ${age} is not eligible for vote`);
  }
}
vote(18);
vote(20);
vote(17);
vote(40);
console.log(`**********************************************`);
console.log(`3. Checking string characters.`);
var string1 = "JavaScript-ES6";
var lengthOfString1 = string1.length;
if (string1.length > 10) {
  console.log(
    `Yes! the given string= "${string1}" contains more than 10 characters`
  );
}
if (string1.length < 10) {
  console.log(
    `No! the given string= "${string1}" does not contains more than 10 characters`
  );
}
console.log(`**********************************************`);
console.log(`4. Checking string starts with "Java".`);
var string2 = "JavaScript Language";
if (string2.startsWith("Java")) {
  console.log(`Yes! the given string= "${string2}" starts with java.`);
}
console.log(`**********************************************`);
