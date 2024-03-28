function a() {
  function b() {
    return "it is 1!";
  }

  return b();

  function b() {
    return "it is 2!";
  }
}

console.log(a());

// Output
// it is 2!
