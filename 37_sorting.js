const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`Given Array as below: `);
console.log(array_roll_numbers);
console.log(`===========================================================`);
console.log(`1. Reversing given array.`);
let revArray = array_roll_numbers.reverse();
console.log(revArray);
console.log(`===========================================================`);
console.log(`2. Using sort method as it is.`);
array_roll_numbers.sort();
console.log(array_roll_numbers);
console.log(`===========================================================`);
console.log(`3. Sorting array in ascending order using custom logic.`);
array_roll_numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(array_roll_numbers);
console.log(`===========================================================`);
console.log(`4. Finding greatest number from the array.`);
console.log(
  `The greatest no= ${array_roll_numbers[array_roll_numbers.length - 1]}`
);
console.log(`===========================================================`);
console.log(`5. Finding smallest number from the array.`);
console.log(`The smallest no= ${array_roll_numbers[0]}`);
console.log(`===========================================================`);
console.log(`6. Removing duplicates from an array.`);
let array = [...new Set(array_roll_numbers)];
console.log(`Original Array is as below:`);
console.log(array_roll_numbers);
console.log(`Array after removing duplicates is below:`);
console.log(array);
