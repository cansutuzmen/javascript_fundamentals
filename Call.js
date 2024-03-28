// Example 1
function a(){
  console.log('hi');
}

a.call();

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
prod1.price.call(prod2, 20, 30);
console.log('2', prod2);

// Output
// { name: 'Orange', price: 80 }
// { name: 'Orange', price: 130 }
