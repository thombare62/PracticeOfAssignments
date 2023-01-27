console.log(`TO FIND FIBONACCI SERIES TILL GIVEN NUMBER`);
function fibonacciSeries(num) {
  let x = 0;
  let y = 1;
  let fn = x + y;

  console.log(x);
  while (fn < num) {
    console.log(fn);
    fn = x + y;
    x = y;
    y = fn;
  }
}
fibonacciSeries(200);
