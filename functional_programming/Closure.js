// Example 1
const a = function () {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
};

const inc = a();
a();
a();
a();

// Output
// 3

// Example 2
const b = function () {
  let count = 0;
  return function getCount() {
    return count;
  };
};

const private = b();
b();
b();
b();

// thanks to closure we have still access to count but it cannot be modified from outside. It creates private variable
