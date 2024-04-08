(function () {
  var a = (b = 3);
})();

console.log('a defined? ' + (typeof a !== 'undefined'));
console.log('b defined? ' + (typeof b !== 'undefined'));

// b = 3 --> creates global variable
// var a = b

// Output
// a defined? false
// b defined? true

// if we use 'use strict', it doesn't allow this initialization
