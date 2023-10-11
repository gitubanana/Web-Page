// 일반적인 객체지향 언어에서 생성자는 클래스의 소속이다.
// 하지만, JavaScript에서 객체를 만드는 주체는 함수다.
// 함수에 new를 붙이는 것을 통해서 객체를 만들 수 있다

function Person(name) {
    this.name = name;
    this.introduce = function() {
        console.log('My name is ' + this.name);
    };
}

var me = new Person('taeypark');
me.introduce();

var you = new Person('you');
you.introduce();
