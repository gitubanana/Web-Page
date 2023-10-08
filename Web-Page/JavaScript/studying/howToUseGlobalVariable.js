// 전역변수를 불가피하게 사용해야 하는 경우
//   1. 하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리하는 방법
//   2. 익명함수를 만들어 사용하는 방법
var MYBODY = {};
MYBODY.hand = {
    'left' : null,
    'right' : null
};
MYBODY.eye = {
    'left' : null,
    'right' : null
};

MYBODY.hand.right = 'On mouse';
MYBODY.eye.left = 'Opened';
console.log('right hand status :', MYBODY.hand.right);
console.log('left eye status :', MYBODY.eye.left);
