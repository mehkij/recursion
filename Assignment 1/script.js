function fibs(n) {
  let arr = [];
  let a = 0; // First value
  let b = 1; // Second value

  for (let i = 1; i <= n; i++) {
    let c = a + b;
    arr.push(a);
    a = b;
    b = c;
  }

  return arr;
};

console.log(fibs(8));