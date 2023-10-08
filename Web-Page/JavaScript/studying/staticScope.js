// b라는 함수가 정의될 때, 변수가 정해진다.
//   -> 그래서, 출력이 global이 된다.
// 이렇게 b라는 함수가 호출될 때(즉, 런타임) i라는 변수가 정해지는 것이 아니라
//   b라는 함수가 정의될 때(즉, 컴파일 타임) i라는 변수가 정해지는 걸 "정적 유효범위"라고 한다.
var i = 'global';

function a() {
    var i = 'local';
    b();
}

function b() {
    console.log(i);
}

a();
