// this Keyword
// It gives methods access to their object
// execute the same code for multiple objects

// Example 1
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

// Example 2

const obj3 = {
    name: 'Cansu',
    message() {
        console.log('1', this);
        var anotherMessage = function(){
            console.log('2', this);
        }
        anotherMessage();
    }
}

obj3.message()

// Output
// 1 > { name: 'Cansu', message: f } -- this is called by object
// 2 > window object -- object does not call another function, window calls this function. It is not lexical scoped

// Example 3 - ES6
// Arrow functions are lexical bound

const obj4 = {
    name: 'Cansu',
    message() {
        console.log('1', this);
        var anotherMessage = () => {
            console.log('2', this);
        }
        anotherMessage();
    }
}

obj.message()

// Output
// 1 > { name: 'Cansu', message: f } -- this is called by object
// 2 > { name: 'Cansu', message: f } -- this is called by object

// Example 4

const obj = {
    name: 'Cansu',
    message() {
        console.log('1', this);
        var anotherMessage = function(){
            console.log('2', this);
        }
        return anotherMessage.bind(this);
    }
}

obj4.message()()

// Output
// 1 > { name: 'Cansu', message: f } -- this is called by object
// 2 > { name: 'Cansu', message: f } -- this is called by object

// Example 5

const obj5 = {
    name: 'Cansu',
    message() {
        console.log('1', this);
        var self = this;
        var anotherMessage = function(){
            console.log('2', self);
        }
        return anotherMessage();
    }
}

obj5.message()()

// Output
// 1 > { name: 'Cansu', message: f } -- this is called by object
// 2 > { name: 'Cansu', message: f } -- this is called by object
