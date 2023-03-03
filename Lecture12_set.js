let setNum= new Set();
setNum.add(0);
setNum.add(1);
setNum.add(2);
setNum.add(3);
setNum.add(3);
console.log(setNum);
console.log(setNum.has(1));
let array= [1,3,5,5,1,8,77,2,3,33]
let arrayofUnique= [...new Set(array)]
let arrayOfUn= new Set(array)
console.log(arrayofUnique);
console.log(arrayOfUn);