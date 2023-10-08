// JavaScript에서는 함수는
//     리턴값, 변수, 매개변수 등.. 다양한 형태의 데이터로 사용될 수 있다.
// 이렇게 다양한 형태로 사용할 수 있는 데이터를 "first-class citizen"이라고 한다.
function cal(mode) {
    var funcs = {
        'plus' : function(left, right) {return left + right},
        'minus' : function(left, right) {return left - right}
    };
    return (funcs[mode]);
}

console.log(cal('plus')(1, 1));
console.log(cal('minus')(1, 1));
