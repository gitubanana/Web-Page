// 표준 내장 객체의 prototype을 이용하면, 마치 표준 내장 객체의 내장된 메소드인 것처럼 사용할 수 있다.

Array.prototype.random = function() {
    var index = Math.floor(this.length * Math.random());
    return this[index];
};
var arr = new Array('taeypark', 'hyeoan', 'euiclee', 'jinheo', 'yim');
console.log(arr.random());
