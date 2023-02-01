const fruits_seasonal= ["Banana", "Orange", "Apple", "Mango", "Water Melon" ];
console.log(`Given Array is as below ==>`);
console.log(fruits_seasonal);
console.log(``);
console.log(`1] Logging first and last element.`);
console.log(`First Element of an array= ${fruits_seasonal[0]}, Last Element of an array= ${fruits_seasonal[fruits_seasonal.length-1]}`);
console.log(`--------------------------------------------------------------------`);
console.log(`2] Adding Papaya before Banana.`);
console.log(`Array before adding Papaya ==>`);
console.log(fruits_seasonal);
let addingPap= fruits_seasonal.unshift("Papaya")
console.log(`Array after adding Papaya ==>`);
console.log(fruits_seasonal);
console.log(`--------------------------------------------------------------------`);
console.log(`3] Removing mango`);
console.log(`Array before removing mango ==>`);
console.log(fruits_seasonal);
let removeMango= fruits_seasonal.splice(4,1)
console.log(`Array after removing Mango ==>`);
console.log(fruits_seasonal);
console.log(`--------------------------------------------------------------------`);
console.log(`4] Adding Pineapple at last.`);
console.log(`Array before adding pineapple at last index ==>`);
console.log(fruits_seasonal);
let addPine= fruits_seasonal.push("Pineapple")
console.log(`Array after adding pineapple at last index ==>`);
console.log(fruits_seasonal);
console.log(`--------------------------------------------------------------------`);
console.log(`5] Adding Dragon Fruit before Water Melon.`);
console.log(`Array before adding Dragon Fruit before Water Melon ==>`);
console.log(fruits_seasonal);
let addDragon= fruits_seasonal.splice((fruits_seasonal.length-2),0, "Dragon Fruit")
console.log(`Array after Dragon Fruit before Water Melon ==>`);
console.log(fruits_seasonal);
console.log(`--------------------------------------------------------------------`);
console.log(`6] Replacing Orange with Kiwi.`);
console.log(`Array before replacing Orange with Kiwi. ==>`);
console.log(fruits_seasonal);
let repOrange= fruits_seasonal.splice(2,1,"Kiwi")
console.log(`Array after replacing Orange with Kiwi. ==>`);
console.log(fruits_seasonal);
console.log(`--------------------------------------------------------------------`);
console.log(`7] Logging elements starting from 1 to 4.`);
console.log(`Given Array is as below ==>`);
console.log(fruits_seasonal);
let oneToFor= fruits_seasonal.slice(1,5)
console.log(`Array of an elements from index 1 to 4 is as below.`);
console.log(oneToFor);
console.log(`--------------------------------------------------------------------`);
console.log(`8] Logging only last 3 elements using length property.`);
console.log(`Given Array is as below ==>`);
console.log(fruits_seasonal);
let lastThree= fruits_seasonal.slice(fruits_seasonal.length-3)
console.log(`Array of last 3 elements.`);
console.log(`lastThree`);