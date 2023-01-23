let leapYear = function (year) {
  if (year == undefined || typeof year == "string" || year == null) {
    console.log(`Given year= ${year}==>>INVALID DATA`);
  } else if (year % 4 == 0) {
    console.log(`Given year= ${year} is a leap year.`);
  } else {
    console.log(`Given year= ${year} is not a leap year.`);
  }
};

leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);

//console.log(`Given year= ${year} is a leap year.`);
