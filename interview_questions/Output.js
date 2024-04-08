var a = {
  name: 'Cansu',
  func: function () {
    var self = this;
    console.log('outer func:  this.name = ' + this.name);
    console.log('outer func:  self.name = ' + self.name);
    (function () {
      console.log('inner func:  this.name = ' + this.name);
      console.log('inner func:  self.name = ' + self.name);
    })();
  },
};

a.func();

// Output
// outer func:  this.name = Cansu
// outer func:  self.name = Cansu
// inner func:  this.name = undefined
// inner func:  self.name = Cansu
