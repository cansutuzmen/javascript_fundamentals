// Example 1
function a(){
  console.log('hi');
}

a.apply();

// Output
// hi

// Example 2
const prod1 = {
  name:'Apple',
  price: 50,
  price(num1, num2) {
    return this.price += num1 + num2;
  }
}

const prod2 = {
  name: 'Orange',
  price: 80
}

console.log('1', prod2);
prod1.price.apply(prod2, [20, 30]);
console.log('2', prod2);

// Output
// { name: 'Orange', price: 80 }
// { name: 'Orange', price: 130 }

// Example 3
// get Max
const array = [1, 2, 3];

function getMaxNumber(arr) {
  return Math.max.apply(null, arr);
}

console.log(getMaxNumber(array));

// Output
// 3

