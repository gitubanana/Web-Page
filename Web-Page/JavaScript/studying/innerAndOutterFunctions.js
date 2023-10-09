// JavaScript에서는 함수 안에서 또 다른 함수를 선언할 수 있다.
// 이때 안에서 선언된 함수는 "내부함수"
// 내부함수를 감싸고 있는 함수를 "외부함수"라고 한다.
// 내부함수에서는 외부함수의 지역변수에 접근할 수 있다.

function outter() {
    var title = 'coding everybody';
    function inner() {
        console.log(title);
    }
    inner();
}

outter();
