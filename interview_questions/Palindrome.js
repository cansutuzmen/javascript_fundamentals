function isPalindrome(value) {
  const arr = value.toLowerCase().split('');
  const length = arr.length % 2 === 0 ? arr.length / 2 : (arr.length - 1) / 2;

  if (arr.length > 160) return;

  for (let i = 0; i < length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
  }

  return true;
}

console.log(isPalindrome('Cansuusnac')); // true
console.log(isPalindrome('Cansusnac')); // true

function isPalindrome2(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return str === str.split('').reverse().join('');
}
