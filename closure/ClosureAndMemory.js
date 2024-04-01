// Memory efficient
// Avoid creating huge array every each of the time

function getItem(index) {
  const bigArray = new Array(100000).fill('hello!');
  console.log('Array created!');
  return bigArray[index];
}

getItem(567);
getItem(6768);
getItem(1234);

const item = getItem2();
item(789);

function getItem2() {
  const bigArray = new Array(100000).fill('hello!');
  console.log('Array 2 created!');
  return function (index) {
    return bigArray[index];
  };
}

// Output
// Array created!
// Array created!
// Array created!
// Array 2 created!
