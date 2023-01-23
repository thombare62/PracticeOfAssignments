console.log(`1] Printing numbers from 5 to 15 by incrementing 1.`);
function forLoop1() {
  for (let index = 5; index <= 15; index++) {
    console.log(index);
  }
}
forLoop1();
console.log(`=======================================================`);
console.log(`2] Printing numbers from 50 to 40 by decrementing 1.`);
function forLoop2() {
  for (let index = 50; index >= 40; index--) {
    console.log(index);
  }
}
forLoop2();
console.log(`=======================================================`);
console.log(`3] Printing first 15 odd numbers.`);
function forLoop3() {
  for (let index = 1; index < 31; index=index+2) {
    console.log(index);
    
}
}
forLoop3();
console.log(`=======================================================`);
console.log(`4] Printing first 10 even numbers.`);
function forLoop4() {
  for (let index = 2; index <= 20; index = index + 2) {
    //   if (index % 2== 0) {
    //     console.log(index);
    //   }
    console.log(index);
  }
}
forLoop4();
console.log(`=======================================================`);
console.log(`5] Printing table of 5.`);
function forLoop5() {
  for (let index = 5; index <= 50; index = index + 5) {
    console.log(index);
  }
}
forLoop5();
console.log(`=======================================================`);
console.log(`6] Printing table of 10.`);
function forLoop6() {
  for (let index = 10; index <= 100; index = index + 10) {
    console.log(index);
  }
}
forLoop6();
console.log(`=======================================================`);
console.log(`7] Printing table of 10 in reverse order.`);
function forLoop7() {
  for (let index = 100; index >= 10; index = index - 10) {
    console.log(index);
  }
}
forLoop7();
