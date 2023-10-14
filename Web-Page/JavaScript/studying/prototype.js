// Every object in JavaScript has a built-in property,
//   which is called its prototype.
// The prototype is itself an object,
//   so the prototype will have its own prototype,
//     making what's called a prototype chain.
// The chain ends when we reach a prototype that has null for its own prototype

function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();

function Sub() {}
Sub.prototype = new Super();

var o = new Sub();
console.log(o.ultraProp);
