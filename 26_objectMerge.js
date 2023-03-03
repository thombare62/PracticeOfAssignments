const car= {
    carName: "Creta SX",
    company: "Hyundai",
    launchYear: 2017
}
const carEngine= {
    enginePower: "1499CC",
    maxPower: "113 BHP"
}

console.log(`Merge operation using Object.assign() method`);
let mergedObjct= Object.assign(car, carEngine)
console.log(`Car details are as follows: `);
console.log(mergedObjct);
console.log(`==========================================================================================================`);
console.log(`Merge operation using ...spread operator method`);
let objectComb= {...car,...carEngine}
console.log(`Car details are as follows: `);
console.log(objectComb);