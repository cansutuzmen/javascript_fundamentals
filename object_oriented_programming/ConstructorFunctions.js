function Person(name, profession) {
  this.name = name;
  this.profession = profession;
}

Person.prototype.message = function () {
  return 'Hello ' + this.name + '!';
};

const cansu = new Person('Cansu', 'Software Engineer');
console.log(cansu.name);
console.log(cansu.message());

// without new
const ali = Person('Ali', 'Software Engineer');
console.log(ali.name);

// Output
// Cansu
// Hello Cansu!
// cannot read property 'name' of undefined
