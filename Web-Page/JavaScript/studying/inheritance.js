function Person(name) {
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function() {
    return 'My name is ' + this.name;
};

function Programmer(name) {
    this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function() {
    return "Hello World";
};


function Designer(name) {
    this.name = name;
}
Designer.prototype = new Person();
Designer.prototype.design = function() {
    return "beautiful!";
};

var p1 = new Programmer('taeypark');
console.log(p1.introduce());
console.log(p1.coding());

var p2 = new Designer('euiclee');
console.log(p2.introduce());
console.log(p2.design());
