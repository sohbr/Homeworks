function Chupacabra(owner, name) {
  this.owner = owner;
  this.name = name;
}

Chupacabra.prototype.kill = function() {

  return `${this.name} kills ${tempName}`;
}

const chupy = new Chupacabra('Kush', 'Chupy');
const chupo = new Chupacabra('Jeff', 'Chupo');

chupy.kill();
chupo.kill();

Chupacabra.prototype.roar = function() {
  return `${this.name} roars!`;
}

Chupacabra.prototype.eat = function() {
  return `${this.name} eats ${this.owner}!!`;
}
