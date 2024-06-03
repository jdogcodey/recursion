function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  else {
    const middle = Math.floor(arr.length / 2);
    let leftSide = mergeSort(arr.slice(0, middle));
    let rightSide = mergeSort(arr.slice(middle));
    return merge(leftSide, rightSide);
  }
}

function merge(left, right) {
  const newArray = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      newArray.push(left[0]);
      left.shift();
    } else {
      newArray.push(right[0]);
      right.shift();
    }
  }
  while (right.length > 0) {
    newArray.push(right[0]);
    right.shift();
  }
  while (left.length > 0) {
    newArray.push(left[0]);
    left.shift();
  }
  return newArray;
}

console.log(mergeSort([105, 79, 100, 110]));
