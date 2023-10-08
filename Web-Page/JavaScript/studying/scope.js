// JavaScript는 변수의 유효 범위가 함수다.
var scope = 'global'; // 전역 변수
function change_variable() {
    var scope = 'local'; // 지역 변수
    scope = 'local';
}

change_variable();
console.log(scope);
