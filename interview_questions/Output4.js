var a = {},
  b = { key: 'b' },
  c = { key: 'c' };

a[b] = 321;
a[c] = 654;

console.log(a[b]);

// Output
// 654 --> { '[object Object]': 654 }
