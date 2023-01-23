let voting = function (age) {
  if (typeof age == "number") {
    if (age <= 0 || age > 120) {
      console.log(`Entered age= ${age} ==> Its an INVALID data.`);
    } else {
      console.log(`Entered age= ${age} ==> Its a VALID data.`);
      if (age > 18) {
        console.log(`The person with age= ${age} is ELIGIBLE for vote`);
      } else {
        console.log(`The person with age= ${age} is NOT ELIGIBLE for vote`);
      }
    }
  } else {
    console.log(`Entered age= ${age} ==> Its an INVALID data.`);
  }
};

voting(45);
voting(17);
voting(8);
voting(20);
voting(-10);
voting(200);
voting(0);
voting("85");
voting("Thirty Five");
console.log(`===============================================================`);

function gradeCalculation(marks) {
  if (typeof marks == "number") {
    if (marks <= 0 || marks > 100) {
      console.log(`Entered marks= ${marks} ==> Provided marks are INVALID.`);
    } else {
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
        console.log(
          `Your marks: "${marks}", your grade is C, need improvement.`
        );
      }
      if (marks < 35 && marks > 0) {
        console.log(`Your marks: "${marks}", unfortunately you are Failed.`);
      }
    }
  } else {
    console.log(`Entered marks= ${marks} ==> Provided marks are INVALID.`);
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
gradeCalculation(91);
gradeCalculation("Eighty");
