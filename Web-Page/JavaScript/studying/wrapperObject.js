// 객체가 아닌 데이터 타입은 원시 데이터 타입(primitive type)이라고 한다. 그 중에 string이 있다.
// 문자열은 분명히 프로퍼티와 메소드가 있다. 그러면 객체다.
// 그런데 왜 문자열이 객체가 아니라고 할까?
// → 그것은 내부적으로 문자열이 원시 데이터 타입이고 문자열과 관련된 어떤 작업을 하려고 할 때 JavaScript는 임시로 문자열 객체를 만들고 사용이 끝나면 제거하기 때문이다.
// 이렇게 원시 데이터 형을 객체처럼 다룰 수 있도록 하기 위한 객체를 Wrapper Object라고 한다.
// Wrapper Object로는 String, Number, Boolean이 있다.

var str = 'coding';
str.prop = 'everybody';

console.log(str.length);    // 6
console.log(str.charAt(0)); // "C"
console.log(str.prop); // undefined
