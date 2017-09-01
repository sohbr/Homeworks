function l(arg) {
  console.log(arg);
}

function range(start, end) {

  if (start === end) {
    return [start];
  }

  let numbers = [start];

  return numbers.concat(range(start+1, end));

}

function exponent(base, exp) {

  if (exp === 0) {
    return 1;
  } else if(exp === 1) {
    return base;
  } else if (exp % 2 === 1) {
    return base * (exponent(base, (exp - 1) / 2)**2);
  } else {
    return exp(base, exp / 2) ** 2;
  }
}

l(exponent(2, 3))
