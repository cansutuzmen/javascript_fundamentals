// pure functions - no side effects

// side effect example
const array = [1, 2, 3];

function mutateArray(arr) {
  arr.pop();
}

function mutateArray2(arr) {
  arr.forEach((element) => {
    arr.push(1);
  });
}

mutateArray(array);
mutateArray2(array);
console.log(array);

// Output
// [ 1, 2, 1, 1 ]

// we have an array in global scope
// Although there is no return in functions, both functions effects the data of array
// order matters for data

// no side effect example
const array2 = [1, 2, 3];

function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop();
  return newArray;
}

function multiplyByTwo(arr) {
  return arr.map((item) => item * 2);
}

removeLastItem(array2);
multiplyByTwo(array2);
console.log(array2);

// Output
// [ 1, 2, 3 ]

// console.log example
function hi() {
  console.log('hi');
}

hi();

// Output
// hi

// it affects window log, that's why it is not a pure function. It has side effect
