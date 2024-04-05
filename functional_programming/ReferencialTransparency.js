// no side effects
// input --> output

function a(num1, num2) {
  return num1 + num2;
}

function b(num) {
  return num * 2;
}

// b(a(3,4)) is the same with b(7), because it will always give the same output

