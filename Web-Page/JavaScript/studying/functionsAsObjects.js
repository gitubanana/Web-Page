// 사실 함수도 객체다.
// sum2는 new를 이용해 만들어진 객체지만, 함수처럼 사용할 수 있는 것을 볼 수 있다.
// 참고로,
//   생성자 Function의 마지막 인자는 실행할 코드
//   그 앞에 있는 것들은 매개변수다.

function sum(x, y) {return x + y;}
var sum2 = new Function('x', 'y', 'return x + y;');

console.log(sum(1,2));
console.log(sum2(1,2));