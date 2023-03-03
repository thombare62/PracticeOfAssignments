console.log(`Logging array elements and its index`);
const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`Given Array= ${array_numbers}`);
let arrow = array_numbers.forEach((val, i) => {
  console.log(`Array Element= ${val} and its index= ${i}`);
});
console.log(``);
console.log(`2. Finding out positive numbers from given array`);
let arrayOfPosNos = [];
let arrowPositive = array_numbers.forEach((val) => {
  if (val >= 0) {
    arrayOfPosNos.push(val);
  }
});
console.log(arrayOfPosNos);
console.log(``);
console.log(
  `3. Finding out negative numbers from given array and logging as an array`
);
let arrayOfNegNos = [];
let arrowNegative = array_numbers.forEach((val) => {
  if (val < 0) {
    arrayOfNegNos.push(val);
  }
});
console.log(arrayOfNegNos);
console.log(``);
console.log(`4. Finding out even numbers from given array`);
let arrayOfEvenNos = [];
let arrowEven = array_numbers.forEach((val) => {
  if (val % 2 == 0) {
    arrayOfEvenNos.push(val);
  }
});
console.log(arrayOfEvenNos);
console.log(``);

console.log(`5. Finding sum of all elements of given array`);
let sum = 0;
let arrowSum = array_numbers.forEach((val) => {
  sum = val + sum;
});
console.log(`The total sum of all array elements= ${sum}`);
console.log(``);
console.log(`6. Finding even positioned elements of given array`);
let arrayofEvenPos = [];
let arrowEvenPos = array_numbers.forEach((val, i) => {
  if (i % 2 == 0) {
    arrayofEvenPos.push(val);
  }
});
console.log(arrayofEvenPos);
