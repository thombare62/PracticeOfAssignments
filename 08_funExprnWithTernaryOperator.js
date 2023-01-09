console.log(`1] To find greatest number among two numbers`);
var greatestNo= function(num1, num2){
var toFind= num1>num2 ? num1:num2
console.log(`The greatest number among ${num1} & ${num2}= ${toFind}`);
}
greatestNo(10, -10);
greatestNo(800, 899);
console.log(`---------------------------------------------`);
console.log(`2] To find ODD or EVEN Number.`);
var oddEvenNo= function(num){
    var oddEvenResult= num%2==0? "Even Number": "Odd Number"
    console.log(`The given number=${num} is ${oddEvenResult}`);
    
    }
    oddEvenNo(29); 
    oddEvenNo(44);
    oddEvenNo(0);
    oddEvenNo(101);
    console.log(`---------------------------------------------`);
    console.log(`3] To find ODD or EVEN length words.`);
    var oddEven= function(val){
        var len= val.length
        var lenOddEvenRes= len%2==0? "Even Length": "Odd Length"
        console.log(`The given word= "${val}" has ${lenOddEvenRes}`);
        
        }
        oddEven("JavaScript"); 
        oddEven("developer");
        oddEven("Google");
        console.log(`---------------------------------------------`);