function randomInteger() {
var randomInteger = Math.floor(Math.random()*30);
return randomInteger
}
randomInteger();
console.log(randomInteger());

module.exports = randomInteger;