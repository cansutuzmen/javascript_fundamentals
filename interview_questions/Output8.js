(function () {
  try {
    throw new Error();
  } catch (x) {
    var x = 3,
      y = 4;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();

// Output
// 3
// undefined
// 4

// x, y hoisted
