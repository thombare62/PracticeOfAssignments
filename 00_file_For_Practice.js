// countCharA(" My favourite movie is LAggAn");

function countCharA(string) {
    let counter = 0;
for (let index = 0; index < string.length; index++) {
  var char = string.charAt(index);
  if (char == "A" || char == "a") {
    // console.log(char);
    counter = counter + 1;
  }
}
console.log(counter);
}

countCharA("I AM Learning JavaScript, The language of internet");
countCharA("My favourite movie is LAggAn");
