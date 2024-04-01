//hidden classes

function Person(x,y) {
  this.x = x;
  this.y = y;
}   

const obj1 = new Person(1,2);
const obj2 = new Person(3,4)

obj1.a = 30;
obj1.b = 100;
obj2.b = 30;
obj2.a = 100;

// The compiler thinks that obj1 and obj2 have the same hidden class if you start introducing values in order. However, if you change the order it gets confused and slower because it will think that they don't have a shared hidden class. 
