function primeNo(num) {
    let primeNum = true;
    for (let index = 2; index < num; index++) {
      if (num % index == 0) {
        primeNum = false;
      }
    }
    if (primeNum == true) {
      console.log(`Given number= ${num} ==> Prime Number`);
    } else {
      console.log(`Given number= ${num} ==> Not a Prime Number`);
    }
  }
  primeNo(2);
  primeNo(5);
  primeNo(1015824);
  