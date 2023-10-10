// JavaScript에서는 모든 함수는 Function 객체의 인스턴스다.
// Function의 메소드로는 apply가 있어 모든 함수는 이 메소드를 가지고 있다.
// 함수명.apply(객체)로 사용할 수 있다.
// 여기서 넘긴 객체는 함수의 this변수가 된다.
// -> 함수가 객체의 메소드인 효과를 낼 수 있다.

o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10, v2:50, v3:100, v4:25}
function sum(){
    var _sum = 0;
    for(var name in this){
        _sum += this[name];
    }
    return _sum;
}
console.log(sum.apply(o1)) // 6
console.log(sum.apply(o2)) // 185
