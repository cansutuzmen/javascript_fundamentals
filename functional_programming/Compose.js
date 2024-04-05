// Compose
// fn1(fn2(f3(50)));
// compose order --> compose(fn1, fn2, fn3)(50);
// pipe order --> pipe(fn3, fn2, fn1)(50);

const compose = (f, g) => (data) => f(g(data));

const multiplyByThree = (num) => num * 3;
const takeAbsolute = (num) => Math.abs(num);

const multiplyByThreeAndAbsolute = compose(multiplyByThree, takeAbsolute);

console.log(multiplyByThreeAndAbsolute(-50));

// Output
// 150
