Function.prototype.bind = function (sayHello) {
  const self = this;
  return function () {
    return self.apply(sayHello, arguments);
  };
};
