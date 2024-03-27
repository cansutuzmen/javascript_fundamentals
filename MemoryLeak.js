// Memory Leak examples

// Global variable - too many global variables
var a = 1;
var b = 1;
var c = 1;

// Event Listeners - it needs to be removed at some point
var element = document.getElementById('button');
element.addEventListener('click', onClick);

// setInterval - it needs to be cleared or stopped at some point
setInterval(() => {
  // referencing objects...
})
