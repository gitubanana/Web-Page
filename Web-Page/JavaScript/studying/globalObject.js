// 전역 객체는 특수한 객체다.
// 모든 객체는 이 전역 객체의 프로퍼티다.
// 객체를 명시하지 않으면, 암시적으로 전역 객체의 프로퍼티로 간주된다.
// 전역 객체는
//   웹 브라우저에서는 window 이고
//   node.js에서는 global 이다.

global.func = function() {
	console.log('Hello?');
}

func();
global.func();
