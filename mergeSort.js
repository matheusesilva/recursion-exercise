const test = [3, 2, 1, 13, 8, 5, 0, 1];

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let index = array.length / 2;
  let right = array.slice(0, index);
  let left = array.slice(index);
  let r = mergeSort(right);
  let l = mergeSort(left);
  return merge(r, l);
}

function merge(a, b) {
  const merged = [];
  while (a.length > 0 && b.length > 0) {
    if (a[0] <= b[0]) {
      merged.push(a.shift());
    } else {
      merged.push(b.shift());
    }
  }
  if (a.length > b.length) {
    return [...merged, ...a];
  } else {
    return [...merged, ...b];
  }
}

console.log(mergeSort(test)); // [0, 1, 1, 2, 3, 5, 8, 13]
