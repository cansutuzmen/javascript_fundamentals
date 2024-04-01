// Example 1
function loop() {
  for(var i = 1; i < 3; i++){
    console.log(i);
  }
  console.log("i is " + i);
}

loop();

// Output
// 1
// 2
// i is 3

// Example 2
function loop() {
  for(let i = 1; i < 3; i++){
    console.log(i);
  }
  console.log("i is " + i);
}

loop();

// Output
// 1
// 2
// Reference error: i is not defined
