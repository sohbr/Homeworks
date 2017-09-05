/*
function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

console.log(sum(1,2,3,4));
console.log(sum(1,2,3,4,5));

function sum2(...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}

console.log(sum2(1,2,3,4));
console.log(sum2(1,2,3,4,5));

Function.prototype.myBind = function (context) {
  const that = this;
  const firstArgs = Array.from(arguments.slice(1));

  return function () {
    const secondArgs = Array.from(arguments);
    return that.apply(context, firstArgs.concat(secondArgs));
  };
};

Function.prototype.myBind2 = function (context, ...args) {
  return (...secondArgs) => {
      this.apply(context, args.concat(secondArgs));
  };
};


function curriedSum(numArgs) {

  let numbers = [];
  let currySum = 0;

  function _curriedSum(number) {
    numbers.push(number);
    console.log('numbers: ', numbers);
    if (numbers.length === numArgs) {
      numbers.forEach( function(el) {
        currySum += el;
      });
      return currySum;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

Function.prototype.curry = function (numArgs) {

  let numbers = [];
  let that = this;

  function _curried(arg) {
    numbers.push(arg);
    if (numbers.length === numArgs) {
      return that(...numbers);
    } else {
      return _curried;
    }
  }
  return _curried;
};
*/

Function.prototype.applyCurry = function (numArgs) {
  let args = [];
  let func = this;

  function _curriedFunc(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return func.apply(null, args);
    } else {
      return _curriedFunc;
    }

  }
  return _curriedFunc;
};

























//
