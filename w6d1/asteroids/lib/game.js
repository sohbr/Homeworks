const Asteroid = require("./asteroid");
const Util = require("./util");

const Game = function () {
  this.asteroids = [];

  this.addAsteroids();
};

Game.COLOR = '00008B';
Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 25;

Game.prototype.addAsteroids = function () {
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid({ pos: this.randomPosition})); // ??
  }
};

Game.prototype.randomPosition = function () {
  return [
    Game.DIM_X * Math.random(),
    Game.DIM_Y * Math.random()
  ];
};
