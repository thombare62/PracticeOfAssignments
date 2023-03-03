function Employee(bankName, location, ifscCode, branchCode) {
  this.bankName = bankName;
  this.location = location;
  this.ifscCode = ifscCode;
  this.branchCode = branchCode;
}
let yesBank = new Employee("Yes Bank", "Masalwadi", "YES000145114", 8850);
let sbiBank = new Employee(
  "State Bank of India",
  "Morgaon",
  "SBI000145114",
  6584
);
let mahBank = new Employee(
  "Bank Of Maharashtra",
  "Masalwadi",
  "MAHB000145114",
  7584
);
let axisBank = new Employee("Axis Bank", "Surat", "AXIS000145114", 1455);

console.log(
  ` Bank Name= ${yesBank.bankName}\n Location= ${yesBank.location}\n IFSC= ${yesBank.ifscCode}\n Branch Code= ${yesBank.branchCode}`
);
console.log(`========================================`);
console.log(
  ` Bank Name= ${sbiBank.bankName}\n Location= ${sbiBank.location}\n IFSC= ${sbiBank.ifscCode}\n Branch Code= ${sbiBank.branchCode}`
);
console.log(`========================================`);
console.log(
  ` Bank Name= ${mahBank.bankName}\n Location= ${mahBank.location}\n IFSC= ${mahBank.ifscCode}\n Branch Code= ${mahBank.branchCode}`
);
console.log(`========================================`);
console.log(
  ` Bank Name= ${axisBank.bankName}\n Location= ${axisBank.location}\n IFSC= ${axisBank.ifscCode}\n Branch Code= ${axisBank.branchCode}`
);
console.log(
  `=========================================================================================`
);
Employee.prototype.openTime = "9 AM IST";
Employee.prototype.closeTime = "6 PM IST";
console.log(
  `For STATE BANK OF INDIA, the opening time is= ${sbiBank.openTime} and the closing time= ${sbiBank.closeTime}`
);
console.log(
  `=========================================================================================`
);
console.log(
  `For AXIS BANK, the opening time is= ${axisBank.openTime} and the closing time= ${axisBank.closeTime}`
);
console.log(
  `=========================================================================================`
);
console.log(
  `For YES BANK, the opening time is= ${yesBank.openTime} and the closing time= ${yesBank.closeTime}`
);
console.log(
  `=========================================================================================`
);
