(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

// Output
// 1 --> closure
