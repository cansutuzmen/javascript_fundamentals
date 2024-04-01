// Example

const array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log('I am at index ' + array[i]);
  }, 3000);
}

// Output
// I am at index 4
// I am at index 4
// I am at index 4
// I am at index 4

// Solution 1

for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log('I am at index ' + array[i]);
  }, 3000);
}

// Output
// I am at index 1
// I am at index 2
// I am at index 3
// I am at index 4

// let --> scope block

// Solution 2

for (var i = 0; i < array.length; i++) {
  (function (i) {
    setTimeout(function () {
      console.log('I am at index ' + array[i]);
    }, 3000);
  })(i);
}

// Output
// I am at index 1
// I am at index 2
// I am at index 3
// I am at index 4

// closure  --> kept i value in closure
