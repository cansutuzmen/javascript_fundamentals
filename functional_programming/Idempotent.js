// Idempotence:

function a(num) {
  console.log(num);
}

a(5);

// Output
// 5

// even if it is not pure because of console.log, it will always give the same result so it is predictable
