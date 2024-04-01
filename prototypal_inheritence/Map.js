// Modify .map() at the print 'Cansu' at the end of each tem

Array.prototype.map = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + 'Cansu');
  }

  return arr;
};

console.log([1, 2, 3].map());

// Output
// [ '1Cansu', '2Cansu', '3Cansu' ]
