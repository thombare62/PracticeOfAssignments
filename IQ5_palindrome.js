function palindrome(value) {
    const revVal= ()=>{
  let myRevVal= value.toString().split("").reverse().join("");
  let newString= value.toString();
  if (myRevVal==newString) {
    console.log(`Given Value= ${value} ==> ITS A PALINDROME`);
  } else {
    console.log(`Given Value= ${value} ==> NOT A PALINDROME`);
  }
    }
    revVal()
  }
  palindrome(1211);
  palindrome("RITAATIR");