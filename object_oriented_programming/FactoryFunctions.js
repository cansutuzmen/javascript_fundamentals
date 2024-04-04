function addPerson(name, profession) {
  return {
    name: name,
    profession: profession,
    message() {
      return 'Hello ' + name + '!';
    },
  };
}

const cansu = addPerson('Cansu', 'Software Engineer');
cansu.message();

// Output
// Hello Cansu!

// Factory functions
// cons
// even method is generic, it will be copied onto memory in different places for each person

// to fix this issue - prototypal inheritance
// create prototype chain with Object.create()

const sendMessage = {
  message() {
    return 'Hello ' + this.name + '!';
  },
};

function addPerson2(name, profession) {
  const newPerson = Object.create(sendMessage);
  newPerson.name = name;
  newPerson.profession = profession;
  return newPerson;
}


const cansu2 = addPerson2('Cansu', 'Software Engineer');
cansu2.message();

// Output
// Hello Cansu!