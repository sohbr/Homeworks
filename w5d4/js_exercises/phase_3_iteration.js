function l(arg) {
  console.log(arg);
}

Array.prototype.bubbleSort = function() {
  var unsorted = this.slice();

  for (let i = 0; i < unsorted.length - 1; i++) {
    for (let j = 0; j < unsorted.length - 1 - i; j++) {
      if (unsorted[j] > unsorted[j + 1]) {
        swap(unsorted, j, j + 1);
      }
    }
  }

  return unsorted;
}

function swap(array, pos1, pos2) {
  var temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
}

String.prototype.substrings = function() {
  let strings = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      strings.push(this.slice(i,j));
    }
  }
  return strings;
}
