function fibs(n) {
  let fibonacci = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibonacci.push(0);
    } else if (i === 1) {
      fibonacci.push(1);
    } else {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
  }
  return fibonacci;
}

function fibsRec(n, fibonacci = [0, 1]) {
  if (n <= fibonacci.length) {
    return fibonacci.slice(0, n);
  }
  return fibsRec(n, [
    ...fibonacci,
    fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1],
  ]);
}

function fibsRec2(n, f = [0, 1]) {
  if (n <= f.length) {
    return f.slice(0, n);
  }
  f.push(f[f.length - 2] + f[f.length - 1]);
  return fibsRec2(n, f);
}

console.log(fibs(10)); //[ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34 ]
console.log(fibsRec(10)); //[ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34 ]
console.log(fibsRec2(10)); //[ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34 ]
