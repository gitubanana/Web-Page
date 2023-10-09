// 함수에는 arguments 라는 변수에 담긴 숨겨진 객체가 있다.
// 이 객체에는 함수를 호출할 때, 입력한 인자가 담겨있다.

function arguments_sum() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; ++i) {
        console.log(i + '(i) : ' + arguments[i] + '(arguments[i])');
        sum += arguments[i];
    }
    return sum;
}

console.log('result : ' + arguments_sum(1, 2, 3, 4));
