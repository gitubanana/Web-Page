// 0, 1, 2, 3, 4를 출력하고 싶다.
// 하지만, 주석에 있는 코드를 실행하면 lexical 때문에 i가 5일 때 출력하게 된다.
// 그래서, closure를 이용해
//   외부함수에 i를 넣어주게 되면 0, 1, 2, 3, 4가 id라는 외부함수의 지역변수에 복사되고
//   이 지역변수를 내부함수를 통해 가져올 수 있다.

var arr = [];
for (var i = 0; i < 5; ++i) {
    // arr[i] = function() {
    //     return i;
    // };
    arr[i] = function(id) {
        return function() {
            return id;
        };
    }(i);
}

for (var index in arr) {
    console.log(arr[index]());
}
