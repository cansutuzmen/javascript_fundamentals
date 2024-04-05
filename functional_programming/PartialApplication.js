const multiply = (a, b, c) => a * b * c;
const curriedMultiply = (a) => (b) => (c) => a * b * c; // It accepts one param at a time
const partiallyApplied = multiply.bind(null, 5); // on the second call it expects all params at once

partiallyApplied(4,10) // 4 * 10 * 5