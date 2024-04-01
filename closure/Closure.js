function a() {
  let first = 'first';
  return function b() {
    let second = 'second';
    let random = 'random';
    return function c() {
      let third = 'third';
      return `${first} > ${second} > ${third}`;
    };
  };
}

a()()();

// Output
// first > second > third

// Closure
// Closure is created when the function is inside of a function
// it is also called as lexical scoping. The JS engine knows which function has access to which variables before we run the code
// Lexical environment == [[scope]]

// run function a()
// a() is pushed to the stack
// it creates its variable environment which has first variable
// a() is removed from the stack but the first variable stays. The garbage collector cannot remove it from the closure because it is referenced by another function
// b() is pushed to the stack
// it creates its variable environment which has second and random variable
// b() is removed from the stack but the second variable stays. The garbage collector cannot remove it from the closure because it is referenced by another function. The garbage collector will remove random because it is not referenced by another functions
// c() is pushed to the stack
// it creates its variable environment which has third variable
// it will check it variable environment for first and second
// Instead of looking global scope or global variable, it will check the closure
// c() is removed from the stack. The garbage collector will remove first, second and third from the closure(heap)
