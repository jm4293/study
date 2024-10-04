# 1주차
## 1. 브라우저에 URL을 입력하면
#### 1. 브라우저 주소창에 www.google.com 입력
#### 2. 브라우저가 www.google.com 의 IP 주소를 DNS 기록을 확인
- DNS(Domain Name System)
    1. 인터넷에서 도메인 이름을 IP 주소로 변환하는 서비스
    2. DNS는 사용자가 URL을 입력할 때마다 해당 URL을 IP 주소로 변환하여 사용자가 원하는 웹 페이지로 연결
- DNS 기록을 찾기 위해서, 브라우저는 4개의 캐시를 확인
    1. 브라우저 캐시
    2. OS 캐시
    3. 라우터 캐시
    4. ISP 캐시
#### 3. 웹 브라우저가 도메인의 IP주소를 조회
#### 4. 웹 브라우저가 찾은 IP주소를 기반으로 서버와의 TCP 연결을 시작
#### 5. 웹 브라우저가 HTTP(S) 요청을 서버로 전송
#### 6. 웹 서버가 요청을 처리하고 응답을 다시 웹 브라우저로 전송
#### 7. 웹 브라우저가 전송 받은 컨텐츠(HTML, CSS, JavaScript)를 렌더링

<!--
![도메인 아키텍처](https://velog.velcdn.com/images/jm4293/post/0547e5ec-92d0-44f2-9803-fcab31770e4a/image.png)
-->

<br/>

## 2. HTML, CSS, JavaScript
### 1. HTML
- HTML(Hyper Text Markup Language)
- HTML의 마크업 정보를 표현
- [HTML5 태그 종류](https://www.w3schools.com/tags/ref_html_dtd.asp)
### 2. CSS
- CSS(Cascading Style Sheets)
### 3. JavaScript
### 4. DOM
![](https://velog.velcdn.com/images/jm4293/post/d1980428-80a9-45d0-9cdf-1696692900d5/image.png)
- DOM(Document Object Model)
- 브라우저는 HTML 문서를 읽을 때 각 태그 요소들을 추출해 트리형태로 재조립한다. 이렇게 만들어진 Tree를 DOM Tree라고 부른다.
- JavaScript가 DOM 구조에 접근하여 문서 구조, 스타일, 내용을 변경할 수 있다.
- HTML이나 XML 같은 마크업 언어로 작성된 문서를 자바스크립트와 같은 프로그래밍 언어가 조작할 수 있도록 하는 인터페이스를 의미합니다. DOM은 계층적 구조를 가진 노드 트리로 구성됩니다.
  ![](https://velog.velcdn.com/images/jm4293/post/25a946cb-d9d5-4a83-9861-5a0f93f788e0/image.png)

<br/>

## 3. 브라우저 렌더링 과정
#### 1. HTML 파싱
- HTML이 파싱을 거치면 -> DOM tree
#### 2. CSS 파싱
- CSS가 파싱을 거치면 -> CSSOM tree
#### 3. JavaScript 파싱
- JavaScript가 파싱을 거치면 -> AST(Abstract Syntax Tree)
- AST(Abstract Syntax Tree)
    - AST는 소스 코드를 읽어낸 뒤 각 코드에서 구문 정보를 정리하여 나타낸 트리 형태의 자료 구조입니다.
#### 3. 렌더 트리 구축
- DOM tree와 CSSOM tree를 결합하여 -> Render tree
- Render tree는 렌더링을 위한 정보를 담고 있다.
- Render tree는 레이아웃을 구성하는 데 필요한 정보만을 포함한다.
- 브라우저에 렌더링 되지 않는 노드(예: meta 태그, script 태그, display: none 등)는 Render tree에 포함되지 않는다.
1. 레이아웃
    - 렌더 트리를 기반으로 각 노드의 크기와 위치를 계산
1. 페인팅
    - 레이아웃을 기반으로 요소의 색상 등 시각적 요소를 업데이트하는 과정
    - 텍스트, 이미지들이 실제 픽셀로 그려진다.
      ![](https://velog.velcdn.com/images/5_wintaek/post/e55b651f-d505-4836-9fb6-19f2749a588d/image.png)

<br/>

## 4. 컴파일 언어, 스크립트 언어
### 1. 컴파일 언어
- 컴파일 언어는 소스 코드를 기계어로 번역하는 과정을 거친다.
- 컴파일 언어는 소스 코드를 실행하기 전에 컴파일러를 통해 기계어로 번역한다.
- 컴파일 언어는 실행 속도가 빠르다.
- 컴파일 언어는 실행 파일을 만들어야 하기 때문에, 실행 파일을 만드는 시간이 필요하다.

### 2. 스크립트 언어
- 스크립트 언어는 소스 코드를 실행하는 과정을 거친다.
- 스크립트 언어는 소스 코드를 실행하기 전에 인터프리터를 통해 기계어로 번역한다.
- 스크립트 언어는 실행 속도가 느리다.
- 스크립트 언어는 실행 파일을 만들지 않기 때문에, 실행 파일을 만드는 시간이 필요하지 않다.

<br/>

## 5. Node.JS
#### 1. V8
- 자바스크립트엔진으로 빌드된 자바스크립트 런타임 환경
#### 2. Single Thread
#### 3. Non-blocking I/O

<br/>

## 6. ECMAScript
#### 1. JavaScript는 ECMAScript 사양을 준수하는 범용 스크립팅 언어
#### 2. JavaScript는 1996년에 만들어졌고, 그 다음에 JavaScript의 표준화를 위해 1997년에 ECMAScript가 만들어졌다.
#### 3. ECMAScript는 JavaScript를 기반으로 하는 동시에, JavaScript 역시 ECMAScript를 기반으로 한다.

<br/>

## 7. JavaScript
#### 1. 데이터 타입
1. 원시 타입
    1. 숫자
    2. 문자열
    3. boolen
        1. Truthy
        1. Falsy
            - false / undefined / null / 0, -0 / NaN / ''(빈 문자열)
    4. undefined
        - 자바스크립트 엔진이 변수를 초기화하는 데 사용
    5. null
        - 개발자가 의도적으로 변수에 값이 없다는 것을 명시하고 싶을 때 사용
    6. symbol
    7. bigint
1. 객체 타입
    - 원시 타입 이외 모든 것(함수, 배열 등)

#### 2. 변수
- 변수 종류
    1. var
        - 중복 선언 허용
        - 재할당 가능
    2. let, const
        - 중복 선언 금지
        1. let
            - 재할당 가능
        2. const
            - 재할당 불가능
- 변수 생성 단계
    1. 선언(Declaration)
        - 스코프와 변수가 생성
    2. 초기화(Initialization)
        - var는 undefined 할당
        - let, const는 (Temporal Dead Zone)때문에 할당 불가능
    3. 할당(Assignment)
        - 변수에 값을 할당
        - ![](https://velog.velcdn.com/images/jm4293/post/496d27c9-62f2-4cf1-8f2f-fa4a65171fa3/image.png)

#### 3. 함수
1. 함수 선언문
   ```js
   function add(x, y) {
     return x + y;
   }
   ```
2. 함수 표현식
   ```js
   var add = function(x, y) {
       return x + y;
   }
   ```
3. new Function()
   ```js
   var add = new Function('x', 'y', 'return x+y');
   ```
4. 화살표 함수
   ```js
   var add = (x, y) => x + y;
   ```
5. 콜백 함수
    - 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수
    - 비동기 작업이 완료되었을 때 Main Thread에서 실행할 함수

#### 4. 스코프
- 식별자(변수)나 함수에 접근 가능한 유효 범위를 의미한다.
- 특정 변수나 함수를 어느 위치에서 참소할 수 있는 지를 나타내며 만약 스코프에서 벗어난 위치에서 참조할 경우 Reference Error가 발생한다.
1. 스코프의 종류
    1. 전역 스코프
    2. 지역 스코프
        - 함수 레벨 스코프
            - 함수 코드 블록 내에서만 참조(접근) 가능한 범위를 말한다.
            - var
        - 블록 레벨 스코프
            - 코드 블록 ({}) 내에서만 참조(접근)가능한 범위를 말한다.
            - let, const, if, for, while, try/catch ...
2. 스코프 방식
    1. 동적 스코프(Dynamic scope)
        - 함수를 어디서 호출했는지에 따라 함수의 상위 스코프를 결정한다.
    2. 정적 스코프(Static scope), 렉시컬 스코프(Lexical scope)
        - 함수를 어디서 정의했는지에 따라 함수의 상위 스코프를 결정한다.
        - 코드가 작성된 위치에 따라 변수의 유효 범위가 결정된다.
        - **JavaScript는 렉시컬 스코프를 따른다.**
3. 스코프 체이닝
    - ```scope.js```
      ![](https://velog.velcdn.com/images/jm4293/post/27303754-b503-4a21-ad86-abc4a7d63ed6/image.png)

#### 5. 호이스팅
1. 자바스크립트 엔진은 소스코드를 한 줄씩 순차적으로 실행하기에 앞서 먼저 소스코드의 평가 과정을 거치면서 소스코드를 실행하기 위한 준비를 한다.
2. 소스코드 실행을 위한 준비 단계인 소스코드의 평가 과정에서 자바스크립트 엔진은 변수 선언을 포함한 모든 선언문(변수 선언문, 함수 선언문 등)을 소스코드에서 찾아내 먼저 실행한다.
3. 소스코드의 평가 과정이 끝나면 비로소 변수 선언을 포함한 모든 선언문을 제외하고 소스코드 한 줄씩 실행한다
- 모든 식별자(변수, 함수, 클래스 등)는 호이스팅된다.
- 변수 호이스팅
    1. var
        - 함수 단위 스코프(function-level scope)
        - 호이스팅 발생
        - 선언 단계와 초기화 단계가 한번에 진행
    2. let, const
        - 블록 단위 스코프(block-level scope)
        - 호이스팅 발생 그러나 변수 선언 이전에 발수 참조 불가능, TDZ(Temporal Dead Zone)
        - 선언 단계와 초기화 단계가 분리되어 진행, 초기화 단계는 코드 런타임일 때 초기화 진행
    - ```hoisting.js```
- 함수 호이스팅
    - 함수 선언문은 함수 객체로 할당하여 호출 가능
    - 함수 표현식은 변수 호이스팅으로 발생
- 클래스 호이스팅
    - 호이스팅 발생 그러나 변수의 let, const와 같이 TDZ가 존재하여 런타임 이전에 실행 불가능

#### 6. 프로토타입(prototype)
- 자바스크립트는 객체지향 프로그래밍
- 자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불피요한 중복을 제거한다.

1. 동일한 메서드가 중복으로 생성되는 현상
    ```js
    function Circle(radius) {
    this.radius = radius;
    this.getArea = function () {
      return Math.PI * this.radius ** 2;
    }
    }
    
    const circle1 = new Circle(1);
    const circle2 = new Circle(2);
    
    console.log(circle1.getArea === circle2.getArea); //false
    ```
   ![](https://velog.velcdn.com/images/jm4293/post/afc73d48-aced-465d-99ef-cc138091a6c3/image.jpg)

2. 프로토타입으로 동일한 메서드 중복 방지
    ```js
    function Circle(radius) {
    this.radius = radius;
    }
    
    Circle.prototype.getArea = function() {
    return Math.PI * this.radius ** 2;
    };
    
    const circle1 = new Circle(1);
    const circle2 = new Circle(2);
    
    console.log(circle1.getArea === circle2.getArea); //true
    ```
   ![](https://velog.velcdn.com/images/jm4293/post/cf82dc57-2f56-49cf-acff-630773882aa4/image.jpg)

#### 7. 프로토타입 체이닝
```js
// 빈 배열을 생성합니다.
const emptyArray = new Array();
console.log(emptyArray); // []

// 초기값을 지정하여 배열을 생성합니다.
const myArray = new Array(1, 2, 3);
console.log(myArray); // [1, 2, 3]

// 배열의 메서드를 사용해봅시다.
myArray.push(4); // 배열에 요소 추가
console.log(myArray); // [1, 2, 3, 4]
```

![](https://velog.velcdn.com/images/jm4293/post/f92c3564-8417-4c78-9cc1-f875813c6c3e/image.svg)


#### 8. 생성자 함수
- ES6 이전에는 자바스크립트에 클래스 문법이 없었고 객체 지향 프로그래밍을 구현하려면 생성자 함수와 프로토타입을 사용해야 했다.
- 자바스크립트에서 전통적으로 객체를 생성하는 방법.
- 클래스가 나오기 전에 만들어진 라이브러리나 프레임워크는 여전히 생성자 함수로 객체를 생성하고 상속을 구현하기 때문에, 이러한 코드와 호환성을 유지하기 위해 생성자 함수가 여전히 필요할 수 있습니다.
- 생성자 함수는 프로토타입을 직접 사용해 메서드를 정의하기 때문에, 클래스처럼 extends나 super 같은 키워드를 사용할 수는 없으나 객체 생성 시 메모리를 효율적으로 관리할 수 있습니다.

#### 9. 클래스
- ES6(ECMAScript 2015)에서 클래스 문법이 도입되었지만, 사실 이 클래스 문법도 생성자 함수와 프로토타입 기반 상속을 단순화한 문법적 설탕(syntactic sugar)일 뿐, 자바스크립트의 근본적인 동작 방식은 여전히 프로토타입 기반이다.
- constructor 메서드를 사용해 객체를 초기화하고, extends로 상속을 구현.
- 사실상 생성자 함수 위에 얹어진 문법적 설탕으로, 클래스도 내부적으로는 생성자 함수처럼 동작함.

1. 프로퍼티, 메소드
2. constructor, super, extent
3. public, private, protect, static

#### 10. 생성자 함수와 클래스 차이
- 클래스 문법을 도입하기 전에는 객체를 생성하고 상속을 구현하기 위해 생성자 함수와 프로토타입을 사용해야 했다.
- 클래스는 이러한 생성자 함수의 복잡성을 숨기고, 개발자에게 좀 더 직관적이고 익숙한 방식으로 객체를 생성하는 방법을 제공한다.

#### 11. this
- 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수이다.
  ![](https://velog.velcdn.com/images/jm4293/post/7145319e-e2be-45a1-94fe-e11dfdeb81f7/image.JPG)

1. 일반 함수 호출
    - 기본적으로 this에는 전역 객체가 바인딩
    - 일반 함수로 호출된 모든 함수(중첩 함수, 콜백 함수) 내부의 this에는 전역 객체에 바인딩
    - ```this_1.js```
2. 메서드 호출
    - 매서드 내부의 this는 메서드를 호출한 객체에 바인딩
    - ```this_2.js```
3. 생성자 함수 호출
    - 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스 바인딩
    - ```this_3.js```
4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
