console.log(`First way to make first letter capital.`);
let string = "how are you";
let string2 = string.slice(0, 1);
let string3 = string2.toUpperCase();
var string4 = string.replace(string.charAt(0), string3.charAt(0));
console.log(string4);
console.log(`==============================================`);
console.log(`Second way to make first letter capital.`);
let string5 = string.charAt(0).toUpperCase() + string.slice(1);
console.log(string5);
console.log(`==============================================`);
console.log(`Adding 3 keys values of an object`);
const response = {
  maran: {
    count: 1,
  },
  gas: {
    count: 2,
  },
  prelude: {
    count: 5,
  },
  keys: ["maran", "gas", "prelude"],
};
sum = 0;
//Initialization     Condition                     Update Expression
for (let index = 0; index < response.keys.length; index++) {
  let eachElement = response[response.keys[index]].count;
  sum = sum + eachElement;
}
console.log(`Sum of all the count values= ${sum}`);
