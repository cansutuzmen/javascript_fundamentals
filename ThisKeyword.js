function  message() {
    return "Hello " + this.name + "!";
}

const name = 'Ahmet';
const obj1 = {
  name: 'Cansu',
  message: message
}

const obj2 = {
  name: 'Ali',
  message: message
}

message();
obj1.message();

// Output
// Hello Ahmet!
// Hello Cansu!

// this Keyword
// it gives methods access to their object
// execute the same code for multiple objects
