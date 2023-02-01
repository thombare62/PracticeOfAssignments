const arrayNumbers= [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given array is as below.`);
console.log(arrayNumbers);
console.log(`----------------------------------------------------`);
console.log(`1] Total elements available in the array= ${arrayNumbers.length}`);
console.log(`----------------------------------------------------`);
console.log(`2] The first element of an array= "${arrayNumbers[0]}" & The last element of an array= "${arrayNumbers[arrayNumbers.length-1]}" `);
console.log(`----------------------------------------------------`);
console.log(`3] The third last element of an array= "${arrayNumbers[arrayNumbers.length-3]}" `);
console.log(`----------------------------------------------------`);
console.log(`4] All EVEN elements from an array are as follows`);
for (const element of arrayNumbers) {
    if (element%2==0) {
        console.log(element);
    }
}
console.log(`----------------------------------------------------`);
console.log(`5] All ODD elements from an array are as follows`);
for (const element of arrayNumbers) {
    if (element%2==1) {
        console.log(element);
    }
}
console.log(`----------------------------------------------------`);
console.log(`6] All EVEN Positioned elements from an array are as follows`);
for (let i = 0; i < arrayNumbers.length; i++) {
    let evenPosition= arrayNumbers[i]
    //console.log(man);
    if (i%2==0) {
      console.log(evenPosition);
    }
    
}
console.log(`----------------------------------------------------`);
console.log(`7] All ODD Positioned elements from an array are as follows`);
for (let i = 0; i < arrayNumbers.length; i++) {
    let oddPosition= arrayNumbers[i]
    //console.log(man);
    if (i%2==1) {
      console.log(oddPosition);
    }
    
}
console.log(`----------------------------------------------------`);
console.log(`8] Finding Sum of all elements from an array.`);
let counter=0
for (const element of arrayNumbers) {
    counter=counter+element
}
console.log(`The sum of all elements from an array= ${counter}`);
console.log(`----------------------------------------------------`);
console.log(`9] Numbers which are multiple of 5 from an array are as follows.`);
for (const element of arrayNumbers) {
    if (element%5==0) {
        console.log(element);
    }
}
console.log(`----------------------------------------------------`);
console.log(`10] Checking if no is available or not in given array.`);
console.log(`Is number 115 is available in arrayNumbers?  ==> ${arrayNumbers.includes(115)}`);
console.log(`----------------------------------------------------`);
console.log(`11] Checking if no is available or not in given array.`);
console.log(`Is number 23 is available in arrayNumbers?  ==> ${arrayNumbers.includes(23)}`);
console.log(`----------------------------------------------------`);
console.log(`12] Inserting 55,66 before index 3 in given array.`);
console.log(`Given array is as below.`);
console.log(arrayNumbers);
arrayNumbers.splice(3,0,55,66)
console.log(`Array after adding 55,66 before index 3.`);
console.log(arrayNumbers);
console.log(`----------------------------------------------------`);
console.log(`13] Deleting 3 elements from index 4 in given array.`);
console.log(`Given array is as below.`);
console.log(arrayNumbers);
arrayNumbers.splice(4,3)
console.log(`Array after Deleting 3 elements from index 4.`);
console.log(arrayNumbers);
