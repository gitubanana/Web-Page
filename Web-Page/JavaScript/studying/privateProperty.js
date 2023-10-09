// 클로저는 객체의 메소드에서도 사용할 수 있다.
// 아래 예시를 보면,
//   외부함수의 지역변수 title은 내부함수인 객체의 메소드에서만 접근할 수 있기 때문에
//   -> private한 속성을 사용할 수 있게 된다.(외부에서 접근할 title을 접근할 수 없다.)
// JavaScript는 기본적으로 Private한 속성을 지원하지 않는데, 클로저를 이용해 private한 속성을 만들 수 있다.

function factory_movie(title) {
    return {
        get_title : function() {
            return title;
        },
        set_title : function(_title) {
            if (typeof _title === 'string')
                title = _title;
            else
                console.log('제목은 문자열이어야 합니다.');
        }
    };
}

ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
console.log(ghost.get_title());
console.log(matrix.get_title());

ghost.set_title('공각기동대');
matrix.set_title(1);

console.log(ghost.get_title());
console.log(matrix.get_title());
