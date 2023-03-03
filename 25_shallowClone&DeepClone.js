let arrayNums= [20,3,4,56,90,400,49]
console.log(`Given Array==> ${arrayNums}`);
console.log(`=================================================================================================`);
let clonnedArrayNums= arrayNums;
clonnedArrayNums.push(55,66)
console.log(`Original Array==> ${arrayNums}`);
console.log(`Array after shallow clonning and using push(55, 66) method. ==> ${clonnedArrayNums}`);
console.log(`=================================================================================================`);
let deepClonnedArray= [...arrayNums]
deepClonnedArray.push(10,25)
console.log(`Original Array==> ${arrayNums}`);
console.log(`Array after shallow clonning and using push(10, 25) method. ==> ${deepClonnedArray}`);
console.log(`=================================================================================================`);
console.log(`Given arrayNums==> ${arrayNums}`);
let arrayEven= [2,30,14,8]
console.log(`Given arrayEven==> ${arrayEven}`);
let concatedArray= [...arrayNums,...arrayEven]
console.log(`Array after merge uisng spread operator==> ${concatedArray}`);
console.log(`=================================================================================================`);
const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
      july_month: "40000INR",
      aug_month: "40000INR",
      jun_month: "40000INR",
    },
    address: {
      locality: {
        colony: "OM NARAYAN SOCIETY",
        street: "Kanch Pokali, 431202",
      },
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
    },
    mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91 9096 5678 77"],
  };

console.log(`Address: ${employee_info.address.locality.colony}, ${employee_info.address.locality.street}, ${employee_info.address.city}, ${employee_info.address.state}, ${employee_info.address.country}`);
console.log(`=================================================================================================`);
console.log(`Mobile numbers: ${employee_info.mobiles}`);
console.log(`=================================================================================================`);
let objectAfterDeepClone= JSON.parse(JSON.stringify(employee_info))
console.log(`July Month salary before updation==> ${objectAfterDeepClone.salary.july_month}`);
objectAfterDeepClone.salary.july_month='80K'
console.log(`July Month salary after updation==> ${objectAfterDeepClone.salary.july_month}`);
console.log(`=================================================================================================`);
console.log(`country before updation==> ${employee_info.address.country}`);
employee_info.address.country='United Kingdom'
console.log(`country after updation==> ${employee_info.address.country}`);
console.log(`=================================================================================================`);