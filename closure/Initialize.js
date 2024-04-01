let value;

function initialize() {
  let called = 0;
  return function () {
    if (called > 0) {
      return;
    } else {
      value = 100;
      console.log('value is set!');
      called++;
    }
  };
}

const start = initialize();
// it is initialized once

start();
start();
start();
start();
start();
start();

console.log(value);

// Output
// value is set!
// 100
