console.log(`Creating empty object professor`);
const professor = {};
console.log(professor);

professor.name = "Shekhar Thombare";
professor.age = 32;
professor.DOB = "10/08/1997";
professor.bloodGroup = "B+";
professor.clgName = "VJTI, Matunga Mumbai";
professor.degrees = {
  engineering: "CSC, ",
  masters: "Data Science, ",
  mba: "Business Management, ",
  PHD: "Adv Computing",
  addDegrees: function () {
    let sumOfDegrees = this.engineering + this.masters + this.mba + this.PHD;
    return sumOfDegrees;
  },
};
professor.certificates = {
  cert1: "Hacker Rank Participation",
  cert2: "Certificate in IFE course",
  cert3: "Certificate in Adv Programming",
};
console.log(``);
console.log(`1. Added various properties in object.`);
console.log(professor);
let SumOfDegrees = professor.degrees.addDegrees();
console.log(``);
console.log(`4. The professor has total degrees as: ${SumOfDegrees}`);
professor.favouriteSubject = "Angular developer";
console.log(``);
console.log(
  `5. Added new property= favourite subject and logging object on console`
);
console.log(professor.favouriteSubject);
console.log(``);
console.log(`6. Modifying age=35 and logging whole object`);
professor.age = 35;
console.log(professor);
console.log(``);
console.log(`7. Deleting one certificate from certificates`);
console.log(`Certificates before deleting`);
console.log(professor.certificates);
delete professor.certificates.cert1;
console.log(`Certificates after deleting cert1`);
console.log(professor.certificates);
console.log(``);
console.log(
  `9. Adding new certificate to nested object and logging on console`
);
professor.certificates.cert4 = "Program Master by Tech Gun";
console.log(professor.certificates);
