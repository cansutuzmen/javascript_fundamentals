// extend the functionality(add lastYear()) of Date built in object

Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};

console.log(new Date('1990-10-10').lastYear());

// Output
// 1899
