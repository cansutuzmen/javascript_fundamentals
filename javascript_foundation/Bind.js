// to store this

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
const newPrice = prod1.price.bind(prod2, 20, 30);
newPrice();
console.log('2', prod2);

// Output
// { name: 'Orange', price: 80 }
// { name: 'Orange', price: 130 }
