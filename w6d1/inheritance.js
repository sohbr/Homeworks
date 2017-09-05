Function.prototype.inherits = function (Parent) {

  function Surrogate () {}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;

};

Function.prototype.inherits2 = function (Parent) {
  this.prototype = Object.create(Parent.prototype);
  this.prototype.constructor = this;
};


function MovingObject (name) {
  this.name = name;
}

MovingObject.prototype.move = function () {
  console.log(`${this.name} moved!`);
};

function Ship (name) {
  MovingObject.call(this, name);
}
Ship.inherits(MovingObject);

function Asteroid (name) {
  MovingObject.call(this, name);
}
Asteroid.inherits(MovingObject);

const boat = new Ship("Boaty");
const rock = new Asteroid("Rocky");

boat.move();
rock.move();





















//
