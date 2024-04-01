console.log('1');
setTimeout(() => {console.log('2'), 1000});
console.log('3');

// output
// 1
// 3
// undefined
// 2

// the process
// console.log('1'); added to call stack
// print 1
// console.log('1'); removed from call stack
// setTimeout(() => {console.log('2'), 1000}); added to call stack. JS Engine skips setTimeout and leaves it to Web API
// setTimeout(() => {console.log('2'), 1000}); removed from call stack and sent to Web API. When the timeout is done, it is going to push the callback queue
// console.log('3'); added to call stack
// print 3
// console.log('3'); removed from call stack
// event loop check if the call stack is empty
// console.log('2'); added to call stack because the stack is empty
// print 2
// console.log('2'); removed from call stack

//Even if setTimeout value is 0, the output would be the same
