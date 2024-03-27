//Inline Cahching
function findUser(user) {
  return `found ${user.firstName} ${user.lastName}`
};

const userData = {
  firstName: 'Cansu',
  lastName: 'Tuzmen
};

findUser(userData);

// If we call findUser over and over, the compiler would replace `found ${user.firstName} ${user.lastName}` with 'found Cansu Tuzmen' instead of looking up the object every time to optimize the code. Thus, the values will be cached inline.
