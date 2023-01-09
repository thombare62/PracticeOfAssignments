console.log("Hello World Programm");

var myName; //Variable declaration.
myName = "Shekhar"; //Variable initialization.
console.log(``);
console.log(myName); //Console logging.
var myName = "Shekhar Chaurasiya";
console.log(``);
console.log(`His name  was "${myName}"`);
abcd = typeof myName;
console.log(abcd);
var isMarried = true;
var result = typeof isMarried;
console.log(result);
var gpTU;
console.log(gpTU);

var caste = `Hindu Dhangar`;
var typeOfCaste = typeof caste;
console.log(typeOfCaste);

function show() {
  console.log(`My college name is "CSMIT College Panvel."`);
}
show();

function rajuBhaiya(paisa, bag, mobile) {
  console.log(paisa);
  console.log(bag);
  console.log(mobile);
}
rajuBhaiya(100, "LV Bag", "Samsung Cell");

function swapValue(val1, val2) {
  console.log(`Vlaues before Swapping`);
  console.log(val1, val2);
  console.log(`Values after Swapping`);
  temp1 = val1;
  val1 = val2;
  val2 = temp1;
  console.log(val1, val2);
  return `End of the values`;
}
swapValue(11, 24);
swapValue("miIthe", "tuTithe");
swapValue("hyaGad", "tyalaGad");
