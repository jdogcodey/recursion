// Iterative function

function fibs(n) {
  const array = [0, 1];
  if (n <= 0) return "Choose a valid number";
  if (n === 1) return [0];
  if (n === 2) return array;
  else {
    for (i = 2; i < n; i++) {
      array.push(array[i - 1] + array[i - 2]);
    }
    return array;
  }
}

function fibsRec(n, array = [0, 1]) {
  if (array.length >= n) {
    return array.slice(0, n);
  } else {
    array.push(array.at(-1) + array.at(-2));
    return fibsRec(n, array);
  }
}

console.log(fibsRec(10));
