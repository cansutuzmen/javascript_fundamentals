function a() {
  value = 50;
  return value;
}

a();

// Output
// 50

'use strict'
function a() {
  value = 50;
  return value;
}

a();

// Output
// ReferenceError: value is not defined

'use strict'
function a() {
  const value = 50;
  return value;
}

a();

// Output
// 50
