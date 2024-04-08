// Fix stack overflow

var next = function () {
  var item = list.pop();

  if (item) {
    // process the list item...
    next();
  }
};

// Solution
var next = function () {
  var item = list.pop();

  if (item) {
    // process the list item...
    setTimeout(next, 0);
  }
};
