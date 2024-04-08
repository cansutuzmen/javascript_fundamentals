const sum = (a, b) => a + b;
const sum2 = (a) => (b) => a + b;

console.log(sum2(2)(3)); // 5
console.log(sum(2, 3)); // 5
