// aruments.length는 함수로 전달된 실제 인자의 수를 의미하고,
// 함수.length는 함수에 정의된 인자의 수를 의미한다.

function zero() {
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}

function one(arg1) {
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}

function two(arg1, arg2) {
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}

zero(); // zero.length 0 arguments 0
one('val1', 'val2'); // one.length 1 arguments 2
two('val1'); // two.length 2 arguments 1
