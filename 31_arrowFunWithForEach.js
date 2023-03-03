console.log(`1. Logging string using Arrow Function`);
let arrowFun= (()=>{
console.log("Good Morning, Today is Monday");
})
arrowFun()
console.log(``);
console.log(`2. To perform Multiplication`);
let arrowMulti= ((num1, num2, num3=1)=>{
let multiResult= num1*num2*num3
console.log(`Multiplication of ${num1}, ${num2} & ${num3}= ${multiResult} `);
});
arrowMulti(5,5,2);
arrowMulti(10,4);
console.log(``);
console.log(`3. To perform Addition`);
let arrowAdd= ((n1, n2, n3, n4, n5)=>{
let addResult= n1+n2+n3+n4+n5;
console.log(`The addition of given values= ${addResult}`);
});
arrowAdd(100,100,200,349,756);
arrowAdd("I am ","learning ","ES6 ","features ","in depth");