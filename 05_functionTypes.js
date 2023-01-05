console.log(`1] Function with no argument and no return value`);
function myHobbies() {
  console.log(`My hobbies are:`);
  console.log(`1. Playing Cricket`);
  console.log(`2. Playing Kabaddi`);
  console.log(`3. Watching Sci-FI, thriller & action movies`);
}
myHobbies();

function trekkingPlaces() {
  console.log(`Most famous trek places in india are:`);
  console.log(`1. Mahabaleshwar`);
  console.log(`2. Lonavala`);
  console.log(`3. Mount Everes`);
}
trekkingPlaces();
console.log(`2] Function with argument and no return value`);

function personalDetails(firstName, lastName, collegeName) {
  console.log(`My name is ${firstName} ${lastName}. `);
  console.log(`My college name is ${collegeName}.`);
}
personalDetails("Chandrashekhar", "Thombare", "CSMIT, Shedung, Panvel");

function addThreeValues(val1, val2, val3) {
  var addition = val1 + val2 + val3;
  console.log(addition);
  return addition;
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");
