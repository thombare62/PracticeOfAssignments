console.log(`1) To get square of the number using Function Expression. `);
var noSquare = function (num) {
  var square = num * num;
  console.log(`The square of the given number: ${num} = ${square}`);
};
noSquare(5);
noSquare(6);
noSquare(25);
noSquare(100);
console.log(``);
console.log(`2) To check type of variable in first task.`);
console.log(`The type of variable noSquare is: ${typeof noSquare} `);
console.log(``);

console.log(`3A) To get area of Triangle.`);
var areaOfTriangle = function (base, height) {
  area = 0.5 * base * height;
  console.log(`Area of Triangle= ${area}`);
};
areaOfTriangle(45, 34);

console.log(`3B) To get area of Rectangle.`);
var areaOfRectangle = function (length, width) {
  area = length * width;
  console.log(`Area of Rectangle= ${area}`);
};
areaOfRectangle(499, 917);
console.log(``);

console.log(`4) Swapping given values.`);
var swapValue = function (val1, val2) {
  console.log(`Vlaues before Swapping`);
  console.log(val1, val2);
  console.log(`Values after Swapping`);
  temp1 = val1;
  val1 = val2;
  val2 = temp1;
  console.log(val1, val2);
};
swapValue("Virat", "Anushka");
swapValue("1000", "2000");
console.log(``);

console.log(`5) Performing various properties & methods on given String.`);
var forString = function () {
  var givenString = "JS the most popular language";
  console.log(`The given String is: ${givenString}`);
  console.log(
    `A. Total characters available in the string= ${givenString.length}`
  );
  console.log(`B. Character at index 6= ${givenString.charAt(6)}`);
  console.log(`C. Character at index 11= ${givenString.charAt(11)}`);
  console.log(
    `D. Character at last= ${givenString.charAt(givenString.length - 1)}`
  );
  console.log(`E. Character at first index= ${givenString.charAt(0)}`);
  console.log(
    `F. Total length of the string= ${
      givenString.length
    } & Square of the length= ${givenString.length * givenString.length} `
  );
};
forString();
