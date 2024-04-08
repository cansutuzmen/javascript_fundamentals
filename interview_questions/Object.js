// Check if a variable is object
// ? typeof boo === "object"

const boo1 = {};
console.log(typeof boo1 === 'object'); // true

const boo2 = null;
console.log(typeof boo2 === 'object'); // true

const boo3 = [];
console.log(typeof boo3 === 'object'); // true

const boo4 = function () {};
console.log(typeof boo4 === 'object'); // false. It is "function"

const boo5 = [1, 2, 3, 4, 5];
console.log(typeof boo5 === 'object'); // true

// to check
const typeCheck = (value) => {
  const prototype = Object.prototype.toString.call(value);
  return prototype
    .substring(prototype.indexOf(' ') + 1, prototype.indexOf(']'))
    .toLowerCase();
};

const boo6 = {};
console.log(typeCheck(boo6) === 'object'); // true
