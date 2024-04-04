// ES6 Class

class Person {
  constructor(name, profession) {
    this.name = name;
    this.profession = profession;
  }
  message() {
    return 'Hello ' + this.name + '!';
  }
}

const cansu = new Person('Cansu', 'Software Engineer');
console.log(cansu.name);
console.log(cansu instanceof Person);
console.log(cansu.message());

// Output
// Cansu
// true
// Hello Cansu!

// memory efficent
// 1 funfc, 1 memory location
