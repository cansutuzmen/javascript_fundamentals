var b = 1;
function outer() {
  var b = 4;
  function inner() {
    b++;
    var b = 4;
    console.log(b);
  }
  inner();
}
outer();

// Output
// function inner () {
//     var b; // b is undefined
//     b++; // b is NaN
//     b = 4; // b is 4
//     console.log(b); // output "4"
// }
