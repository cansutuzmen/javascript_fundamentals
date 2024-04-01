// Example 1
const giveAccessTo = (name) => {
  'Access granted to ' + name;
};

function authenticate(verify) {
  let array = [];
  for (let i = 0; i < verify; i++) {
    array.push(i);
  }
  return true;
}

function letPersonIn(person, fn) {
  if (person.level === 'admin') {
    fn(50000000);
  } else if (person.level === 'user') {
    fn(10000000);
  }

  return giveAccessTo(person.name);
}

letPersonIn({ level: 'user', name: 'Cansu' }, authenticate);

// Example 2
const multiplyBy = (num1) => (num2) => num1 * num2;

console.log(multiplyBy(4)(6));

const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5);

console.log(multiplyByFive(2));
console.log(multiplyByTwo(4));

// Output
// 24
// 10
// 8
