// 생성자는 빈 객체를 만든다.
// 그리고, 이 객체 내에서 this 는 만들어진 객체를 가르킨다.
// 이는 중요하다.
// 생성자가 실행되기 전까지는 객체는 변수에도 할당될 수 없기 때문에
//   this가 아니면 객체에 대한 어떠한 작업을 할 수 없기 때문이다.

var funcThis = null;

function Func() {
    funcThis = this;
}

var o1 = Func();
if (funcThis === global) {
    console.log('global');
}

var o2 = new Func();
if (funcThis === o2) {
    console.log('o2');
}
