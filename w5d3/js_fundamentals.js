function madLib(verb, adjective, noun) {
  console.log(`We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase}.`)
}


function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

function fizzBuzz(array) {
  const output = [];

  array.forEach( el => {
    if ((el % 3 === 0) ^ (el % 5 === 0)) {
      output.push(el);
    }
  });

  return output;
}

function isPrime(n) {
  if (n<2) { return false; }

  for (let i=2; i<n; i++) {
    if (n % i === 0) { return false; }
  }

  return true;

}

function sumOfNPrimes(n) {

  let sum = 0;
  let count = 0;
  let i = 2;

  while (count < n) {
    if (isPrime(i) {
      sum += i;
      count++;
    }
    i++;
    })
  }
  return sum;
}



function titleize(names, callback) {
  let titleized = names.map(name => `Mx. ${name} Jinglerheimer Schmidt`);
  callback(titleized);
}


function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function () {
  this.height = this.height + 12;
};

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function () {
  trickIndex = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} is ${this.tricks[trickIndex]}!`);
};

// Phase III - Function Invocation

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
};



// Phase IV - Closures

function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
};


































