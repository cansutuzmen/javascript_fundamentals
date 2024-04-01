// Example 1
var value = '1';

var result = function() {
  console.log("value is " + value);

  var value = '2';

  console.log("new value is " + value);
}

result();

// Output
// value is undefined
// new value is 2

// Example 2
var value = '1';

function result() {
  console.log("value is " + value);

  value = '2';

  console.log("new value is " + value);
}

result();

// Output
// value is 1
// new value is 2
