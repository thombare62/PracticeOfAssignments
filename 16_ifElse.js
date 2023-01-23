console.log(`ODD AND EVEN`);
function oddEven(num) {
  if (typeof num == "number") {
    if (num % 2 == 0) {
      console.log(`${num} ==> EVEN NUMBER`);
    } else {
      console.log(`${num} ==> ODD NUMBER`);
    }
  } else {
    console.log(`Given value= ${num} ==> Please provide Valid Data `);
  }
}
oddEven(2);
oddEven(45);
oddEven(13);
oddEven(0);
oddEven("70");
console.log(`==================================`);
console.log(`GREATEST NUMBER`);
function greatestNo(num1, num2, num3) {
  if (num1 > num2) {
    if (num1 > num3) {
      console.log(`The greatest number is= ${num1}`);
    } else {
      console.log(`The greatest number is= ${num3}`);
    }
  } else {
    if (num2 > num3) {
      console.log(`The greatest number is= ${num2}`);
    } else {
      console.log(`The greatest number is= ${num3}`);
    }
  }
}
greatestNo(56, 70, 80);
greatestNo(20, -90, 0);
