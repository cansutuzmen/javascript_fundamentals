// new binding this
function Person(name, profession) {
  this.name = name;
  this.profession = profession;
}

const cansu = new Person('Cansu', 'Software Engineer');

// implicit binding
// Create an object and inside of that object, the this keyword will refer to person that's implicit binding.
const person = {
  name: 'Cansu',
  profession: 'Software Engineer',
  message() {
    return 'Hello ' + this.name + '!';
  },
};

// explicit binding
// explicit binding is using bind call

const person2 = {
  name: 'Cansu',
  profession: 'Software Engineer',
  message: function () {
    console.log('Hello ' + this.setTimeout);
  }.bind(window),
};

person2.message();

// arrow function
// for higher functions binding, lexical scoping
// if we don't use arrow func, it will bind window instead --> Hello undefined!

const person3 = {
  name: 'Cansu',
  profession: 'Software Engineer',
  message: function () {
    var inner = () => {
      console.log('Hello ' + this.name + '!');
    };
    return inner();
  },
};

person3.message();
