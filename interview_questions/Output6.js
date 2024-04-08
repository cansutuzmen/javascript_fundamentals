var hero = {
  name: 'Cansu',
  message: function () {
    return 'Hello ' + this.name;
  },
};

const sayHello = hero.message;

console.log(sayHello());
console.log(hero.message());

// Output
// Hello undefined --> there is no name in global scope
// Hello Cansu

// fix
const sayHello2 = hero.message.bind(hero);
console.log(sayHello2());

// Output
// Hello Cansu
