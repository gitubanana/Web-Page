// Object객체는 객체의 가장 기본적인 형태를 가지고 있는 객체다.
// 다시 말해서 아무것도 상속받지 않는 순수한 객체다.
// JavaScript에서는 값을 저장하는 기본적인 단위로 Object를 사용한다.
// Object.prototype에 정의된 메소드는 모든 객체들이 사용할 수 있다.

// Object.keys()
var arr = ["a", "b", "c"];
console.log('Object.keys(arr)', Object.keys(arr));

// Object.prototype.toString()
var o = new Object();
console.log('o.toString()', o.toString());

var a = new Array(1, 2, 3);
console.log('a.toString()', a.toString());
