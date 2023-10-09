// 원래는 외부함수 outter가 끝나면, title이라는 지역변수가 사라지는 게 당연하지만 
// 외부함수가 끝나도, 내부함수 inner에서 title을 접근할 수 있다.
// 이렇게,
//   내부함수가 외부함수의 지역변수에 접근할 수 있고 && 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는 특성을
//   -> "클로저(closure)"라고 한다.

function outter() {
    var title = 'coding everybody';
    return function() {
        console.log(title);
    }
}

var inner = outter();
inner(); // coding everybody 출력
