// memoization

function addTo80(n) {
  // long time
  return n + 80;
}

let cache = {};

function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    // long time
    cache[n] = 5 + 80;
    return cache[n];
  }
}

// closure version -> to avoid global scope

function memoizedAddTo80(n) {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      // long time
      cache[n] = 5 + 80;
      return cache[n];
    }
  };
}
