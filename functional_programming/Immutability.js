// Immutability
const person = { name: 'Cansu' };

function clone(obj) {
  return { ...obj };
}

function updateName(obj) {
  const newPerson = clone(obj);
  newPerson.name = 'Ali';
  return newPerson;
}

updateName(person);
const updatedPerson = updateName(person);
console.log(person);
console.log(updatedPerson);

// Output
// { name: 'Cansu' }
// { name: 'Ali' }
