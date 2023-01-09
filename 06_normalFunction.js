function bankDetails(bankName, accountNum, location, pinCode) {
  console.log(
    `Bank name: ${bankName} with Account No.: ${accountNum}, Location: ${location}, and pin code is: ${pinCode}`
  );
}
bankDetails("CITI Bank", 3456782345, "Pune", 431202);
bankDetails("Axis Bank", 7856782345, "Mumbai", 441202);
bankDetails("HDFC Bank", 8956782345, "Pune", 631202, "Open");


function add(num1, num2) {
  console.log(num1, num2);
  return num1+num2
}
add(5, 7);