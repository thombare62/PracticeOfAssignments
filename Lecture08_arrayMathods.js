console.log(`=============== .push() method ===============`);
//This method adds single or multiple element in the array at last position/end.
var arrayOfNumbers= [4,5,6,8,9];

console.log(`Given Array ==>`);
console.log(arrayOfNumbers);
arrayOfNumbers.push(200)
console.log(`Array after .push() method ==>`);
console.log(arrayOfNumbers);
console.log(``);
console.log(`=============== .unshift() method ===============`);
//This method adds single or multiple element in the array at start position/beginning.
console.log(`Given Array ==>`);
console.log(arrayOfNumbers);
arrayOfNumbers.unshift(10,56);
console.log(`Array after .unshift() method ==>`);
console.log(arrayOfNumbers);
console.log(``);
console.log(`=============== .pop() method ===============`);
//This method removes last element.
console.log(`Given Array ==>`);
console.log(arrayOfNumbers);
arrayOfNumbers.pop();
console.log(`Array after .pop() method ==>`);
console.log(arrayOfNumbers);
console.log(`=============== .shift() method ===============`);
//This method removes first element.
console.log(`Given Array ==>`);
console.log(arrayOfNumbers);
arrayOfNumbers.shift();
console.log(`Array after .pop() method ==>`);
console.log(arrayOfNumbers);
console.log(`=============== .slice() method ===============`);
//This method returns array elements from provided index element till last element when provided with only one index value .
console.log(`Given Array ==>`);
console.log(arrayOfNumbers);
let sliceRes= arrayOfNumbers.slice(2);
console.log(`Array of elements after .slice() method when provided single index value i.e. slice(2)  ==>`);
console.log(sliceRes);
//This method returns array element of provided start index and then element before the provided end index.
var arrayOfNumbers= [4,5,6,8,9];
console.log(`Given Array ==>`);
console.log(arrayOfNumbers);
let sliceWithTwoValues= arrayOfNumbers.slice(1, 2);
console.log(`Array of elements after .slice() method when provided two index values i.e start index and end index slice(1, 2)  ==>`);
console.log(sliceWithTwoValues);
console.log(`=============== .splice() method ===============`);
//this method deletes the array elements from given index and no of elements need to be deleted i.e splice(1-->index, 4--> No of elements to be deleted.)
let array= [1,5,6,7,4,9];
console.log(`Given array ==>`)
console.log(array)
let splice1= array.splice(2,2)
console.log(`Result of splice method i.e. splice(2,2) ==>`)
console.log(splice1)
console.log(`Array after splice(2,2) method`)
console.log(array)
let array1= [1,5,6,7,4,9];
console.log(`Given array ==>`)
console.log(array1)
let splice2= array1.splice(3)
console.log(`Result of splice method i.e. splice(3) ==>`)
console.log(splice2)
console.log(`Array after splice(3) method`)
console.log(array)
console.log(`splice() method for "INSERTING AN ELEMENT INTO EXISTING ARRAY"`)
let array2= [10,5,1,11,8];
console.log(`Given Array ==>`)
console.log(array2)
let spliceInsert= array2.splice(1, 0, 15, 200)
console.log(`Array after using splice(1, 0, 15, 20) `)
console.log(array2)
console.log(`splice() method for "REPLACING AN EXISTIING ELEMENT"`)
let array3= [10,5,1,11,8];
console.log(`Given Array ==>`)
console.log(array3)
let spliceReplace= array3.splice(2, 2, 0,0)
console.log(`Array after using (2, 2, 0,0) `)
console.log(array3)