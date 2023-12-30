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

function fibsRec(n, arr = []) {
  if (n === 1) {
    arr.push(0);
  } else if (n === 2) {
    arr.push(0, 1);
  } else {
    fibsRec(n - 1, arr);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
}

console.log(fibsRec(8));