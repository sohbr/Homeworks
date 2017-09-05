const Util = require("./util");
const MovingObject = require("./moving_object");

const Asteroid = function (options) {
  options.color = '#D3D3D3';
  options.radius = 20;
  options.pos = options.pos;
  options.vel = Util.randomVec(5);

  MovingObject.call(this, options);
};

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
