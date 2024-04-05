// Callback queue
setTimeout(() => {
  console.log('1', 'is the loneliest number');
}, 0);
setTimeout(() => {
  console.log('2', 'can be as bad as one');
}, 10);

//2
// Job queue
Promise.resolve('hi').then((data) => console.log('2', data));

//3
// Call stack
console.log('3', 'is a crowd');

// job queue is gonna be check fist before callback queue

// Output
// 3 is a crowd
// 2 hi
// 1 is the loneliest number
// 2 can be as bad as one
