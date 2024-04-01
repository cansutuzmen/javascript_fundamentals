const dragon = {
  name: 'Alex',
  fire: true,
  fight() {
    return 5;
  },
  message() {
    return `Hello! This is ${this.name}`;
  },
};

const lizard = {
  name: 'Ivan',
  fight() {
    return 3;
  },
};

// never manually assign prototype
lizard.__proto__ = dragon;
console.log(lizard.message());
console.log(lizard.fight());
console.log(dragon.fight());

console.log(dragon.isPrototypeOf(lizard));
console.log(lizard.isPrototypeOf(dragon));

// Output
// Hello! This is Ivan
// 3
// 5
// true
// false

for (let prop in lizard) {
  console.log(prop);
}

// Output
// name
// fight
// fire
// message

for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

// Output
// name
// fight
