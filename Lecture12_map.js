let mapOfNum= new Map()
mapOfNum.set(1, "Shekhar")
mapOfNum.set(2, "Asmita")
mapOfNum.set(3, "Damini")
mapOfNum.set(4, "Pratiksha")
mapOfNum.set(5, "Aditi")
console.log(mapOfNum);
console.log(mapOfNum.values())
console.log(mapOfNum.keys());
let val= mapOfNum.get(2)
console.log(val);
console.log(mapOfNum.size);
mapOfNum.delete(2);
console.log(mapOfNum);