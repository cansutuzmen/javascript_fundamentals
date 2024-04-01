// Example 1

let obj1 = { name: 'Cansu', surname: 'Tuzmen' };
let obj2 = obj1;

obj2.name = 'Ceren';

console.log(obj1);
console.log(obj2);

// Output
// { name: 'Ceren', surname: 'Tuzmen' }
// { name: 'Ceren', surname: 'Tuzmen' }

// to make sure it is not changed

let obj3 = { name: 'Cansu', surname: 'Tuzmen' };
let obj4 = Object.assign({}, obj3);
let obj5 = { ...obj3 };

obj4.name = 'Ceren';
obj5.name = 'Ali';

console.log(obj3);
console.log(obj4);
console.log(obj5);

// Output
// { name: 'Cansu', surname: 'Tuzmen' }
// { name: 'Ceren', surname: 'Tuzmen' }
// { name: 'Ali', surname: 'Tuzmen' }

// Example 2
// shallow clone - we can only clone the first layer

let obj6 = {
  a: 4,
  b: 5,
  c: {
    value: 45,
  },
};

let clone1 = Object.assign({}, obj6);
let clone2 = { ...obj6 };

obj6.c.value = 75;

console.log(obj);
console.log(clone1);
console.log(clone2);

// Output
// { a: 4, b: 5, c: { value: 75 } }
// { a: 4, b: 5, c: { value: 75 } }
// { a: 4, b: 5, c: { value: 75 } }

// to make sure it is not changed -- deep clone
// it will affect the performance

let obj7 = {
  a: 4,
  b: 5,
  c: {
    value: 45,
  },
};

let clone = JSON.parse(JSON.stringify(obj7));
obj7.c.value = 75;

console.log(obj7);
console.log(clone);

// Output
// { a: 4, b: 5, c: { value: 75 } }
// { a: 4, b: 5, c: { value: 45 } }

// Example 3
// typeof array is also object

var a = [1, 2, 3, 4, 5];
var b = a;

b.push(2343534);

console.log(a);
console.log(b);

// Output
// [ 1, 2, 3, 4, 5, 2343534 ]
// [ 1, 2, 3, 4, 5, 2343534 ]

// to make sure it is not changed

var a = [1, 2, 3, 4, 5];
var b = [].concat(a);

b.push(2343534);

console.log(a);
console.log(b);

// Output
// [ 1, 2, 3, 4, 5 ]
// [ 1, 2, 3, 4, 5, 2343534 ]
