function marriageEligibility(gender, age) {
  if (gender == "Male" && age >= 21) {
    console.log(`Given gender= ${gender}       Given age= ${age}==>> ELIGIBLE`);
  } else if (gender == "Female" && age >= 18) {
    console.log(`Given gender= ${gender}       Given age= ${age}==>> ELIGIBLE`);
  } else {
    console.log(
      `Given gender= ${gender}       Given age= ${age}==>> NOT ELIGIBLE`
    );
  }
}
marriageEligibility("Male", 17);
marriageEligibility("Male", 25);
marriageEligibility("Female", 28);
marriageEligibility("Female", 16);
marriageEligibility("Other", 35);
marriageEligibility("Other", 41);
