// Example 1

console.log(value);
var value = 5;

// Output
// undefined

// Example 2

console.log(getValue());
function getValue() {
  return 5;
}

// Output
// 5

// Example 3

console.log(getValue());
(function getValue() {
  return 5;
})

// Output
// Reference error: getValue is not defined

// Example 4

console.log(value);
console.log(value());
var value = function() {
  return 5;
}

// Output
// undefined
// Reference error: value is not defined

// Example 5

console.log(value);
const value = 5;

// Output
// Reference error: value is not defined

// Example 6

var value = 1;
var value = 2;

console.log(value);

// Output
// 2

// Example 7

console.log(a());

function a() {
  console.log('1');
}

function a() {
  console.log('2');
}

// Output
// 2



