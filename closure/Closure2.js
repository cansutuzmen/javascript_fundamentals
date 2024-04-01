function sayHi() {
  setTimeout(() => {
    console.log(hello);
  }, 4000);
  const hello = 'Hello!';
}

sayHi();

// Output
// Hello!

// it doesn't matter where we define the variable. There is no hoisting here. 

// Closure
// call sayHi() function
// sayHi() is pushed to the stack
// setTimeout sent to web API to start a timer for 4 s
// when time is done, function is sent to callback queue and callback queue is going to wait until call stack is empty
// hello is popped off from the stack
// event loop pushes the function into stack and run it
// print console.log
// remove it fromm the stack


