console.log(`1. Checking voting eligibility.`);
var voteEligibility = function (age) {
  if (age <= 0 || age > 120) {
    console.log(`    Given age= ${age} is invalid, please provide valid data.`);
  }
  if (age >= 18 && age < 120) {
    console.log(`    He/She with given age= ${age} is eligible for vote`);
  }
  if (age < 18 && age > 0) {
    console.log(`    He/She with given age= ${age} is not eligible for vote`);
  }
};
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
console.log(`**************************************************************`);
console.log(`2. Design of a grade system.`);
function gradeCalculation(marks) {
  if (marks >= 90 && marks <= 100) {
    console.log(`Fantastic marks: "${marks}", your grade is A+.`);
  }
  if (marks >= 75 && marks < 90) {
    console.log(`Excellent marks: "${marks}", your grade is A.`);
  }
  if (marks >= 50 && marks < 75) {
    console.log(`Good marks: "${marks}", your grade is B.`);
  }
  if (marks >= 35 && marks < 50) {
    console.log(`Your marks: "${marks}", your grade is C, need improvement.`);
  }
  if (marks <= 0 || marks > 100) {
    console.log(`Marks: "${marks}", Please provide the valid marks.`);
  }
  if (marks < 35 && marks > 0) {
    console.log(`Your marks: "${marks}", unfortunately you are Failed.`);
  }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
