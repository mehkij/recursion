// Recursive method
function mergeSort(arr) {
  // Base case
  if (arr.length < 2) {
    return arr;
  };
  
  const middle = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

function merge(leftArray, rightArray) {
  let A = leftArray;
  let B = rightArray;
  let m = A.length;
  let n = B.length;

  let C = [];

  let aPointer = 0;
  let bPointer = 0;
  let cPointer = 0;
  
  // Merging algorithm
  while (aPointer < m && bPointer < n) {
    // If the element being pointed to in A is smaller than the element being pointed to in B, copy it to C; else, copy B element to C
    if (A[aPointer] < B[bPointer]) {
      C[cPointer] = A[aPointer];
      aPointer++;
      cPointer++;
    } else {
      C[cPointer] = B[bPointer];
      bPointer++
      cPointer++
    }
  };

  // If there are any elements remaining in list A, push them to C
  for (; aPointer < m; aPointer++) {
    C[cPointer] = A[aPointer];
    cPointer++;
  };

  // If there are any elements remaining in list B, push them to C
  for (; bPointer < n; bPointer++) {
    C[cPointer] = B[bPointer];
    cPointer++
  };

  return C;
};

const arrayOne = [3, 2, 1, 13, 8, 5, 0, 1];
const arrayTwo = [105, 79, 100, 110];

console.log(mergeSort(arrayOne));
console.log(mergeSort(arrayTwo));