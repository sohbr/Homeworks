function l(arg) {
  console.log(arg);
}

Array.prototype.uniq = function() {

    let uniques = [];

    this.forEach( function(el) {
      if (!uniques.includes(el)) {
        uniques.push(el);
      }
    });
    return uniques;
};

Array.prototype.twoSum = function() {
  let pairs = [];
  this.forEach(function (el, i, array) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === -el) {
        pairs.push([i, j]);
      }
    }
  });
  return pairs;
};

Array.prototype.transpose = function() {
  let transposed = [];
  this.forEach( function(el, i, array) {
    for (let j = 0; j < array.length; j++) {
      if (i === 0) {
        transposed[j] = [];
      }
      transposed[j][i] = array[i][j];
    }
  });

  return transposed;
};

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

Array.prototype.myMap = function(callback) {

  let mapped = [];

  this.myEach( function(el) {
    mapped.push(callback(el));
  } );

  return mapped;
}

Array.prototype.myReduce = function(callback, initialValue) {

  let acc = undefined;
  let i = 0;


  if (initialValue === undefined) {
    acc = this[0];
    i++;
  } else {
    acc = initialValue;
  }

  for (i; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }

  return acc;
}

[1,2,3].myReduce(function(acc,el) {
  return acc + el;
}, 25);














/**/
