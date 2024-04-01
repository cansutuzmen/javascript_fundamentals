// Functions are first class citizens in JS
// 1
// we can assign them to a variable or object property to make them methods
var value = function () {};
// 2
// we can pass functions
function a(fn) {
  fn();
}

a(function () {
  console.log('hi!');
});
// 3
// we can return functions as a values from other functions
function b() {
  return function c() {
    console.log('hi');
  };
}

b()();
// or
var d = b();
d();
