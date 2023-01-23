function stringTemplateAssign() {
  console.log(`1] Logging sentence using back tick.`);
  console.log(`My dream company is "TCS"`);
  console.log(``);
  console.log(`2] Logging sentence using back tick.`);
  var myHobbie1 = "1) Playing Cricket";
  var myHobbie2 = "2) Playing Kho-Kho";
  var myHobbie3 = "3) Watching Sci-Fi, action & thriller movies";
  var result = myHobbie1.concat(myHobbie2, myHobbie3);
  console.log(
    `2.1) Hobbies on a single line using substitution are as: ${
      myHobbie1 + myHobbie2 + myHobbie3
    }`
  );
  console.log(`2.2) Concat hobbies are as: ${result}`);
}
stringTemplateAssign();
