console.log(`TO FIND FACTORIAL OF ANY NUMBER USING FOR LOOP \n`);
function factorialOfAny(num){
for (let index = num; index>1; index=index-1) {
  var fact= num* (index-1)
  num=fact
}
console.log(`Factorial of a given number==> ${num}`);
}
factorialOfAny(5);
