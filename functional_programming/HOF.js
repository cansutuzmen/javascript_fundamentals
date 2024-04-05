// Example 1
const a = () => () => 5;
a()();

// Output
// 5

// Example 2

const b = (fn) => fn(5);
b(function c() {
  return c;
});

// Output
// 5
