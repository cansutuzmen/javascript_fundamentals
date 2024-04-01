let human = {
  isLive: true,
};

let doctor = Object.create(human);
doctor.age = 45;
console.log(doctor.age);
console.log(human.isPrototypeOf(doctor));

// Output
// 45
// true
