for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function () {
    console.log(i);
  });
  document.body.appendChild(btn);
}

// It will log 5 because of var in loop

// Solution 1
for (let i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function () {
    console.log(i);
  });
  document.body.appendChild(btn);
}

// Solution 2
[1, 2, 3, 4, 5].forEach((i) => {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function () {
    console.log(i);
  });
  document.body.appendChild(btn);
});

// Solution 3
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  (function () {
    btn.addEventListener('click', function () {
      console.log(i);
    });
  })();
  document.body.appendChild(btn);
}
