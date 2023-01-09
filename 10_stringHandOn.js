function stringsHandsOn() {
  var str = "     Hey you are doing good, keep it up     ";

  console.log(`1) Given a string: ${str}`);
  console.log(`2) Length of the string= ${str.length}`);
  var afterTrim = str.trim();
  console.log(afterTrim);
  console.log(
    `3) String after removing trailing and leading extra spaces= ${afterTrim}`
  );
  console.log(
    `4) Total no of extra spaces removed in step 3= ${
      str.length - afterTrim.length
    }`
  );
  console.log(
    `5) The first character after trim= "${afterTrim.slice(
      0,
      1
    )}" & the last character after trim= "${afterTrim.slice(
      afterTrim.length - 1
    )}"`
  );
  var lenAfterTrim = afterTrim.split(" ");
  console.log(
    `6) Total no. of words available in the string after step 3= ${lenAfterTrim.length}`
  );
  console.log(
    `7) Index of word "good" from given string= ${str.indexOf("good")}`
  );
  console.log(
    `8) Substring starting from index 22 using subString= ${str.substring(
      22
    )} and using slice= ${str.slice(22)}`
  );
  console.log(
    `9) Checking string end with "up" or not after step 3= ${afterTrim.endsWith(
      "up"
    )}`
  );
  console.log(
    `10) Checking string start with "Hey" or not after step 3= ${afterTrim.startsWith(
      "Hey"
    )}`
  );
}
stringsHandsOn();
