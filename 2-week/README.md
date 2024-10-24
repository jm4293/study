# 2주차
## JavaScript
#### 1. this
- 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수이다.
- this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.
- **this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.**
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

#### 2. 프로토타입(prototype)
- 자바스크립트는 프로토타입 객체지향 프로그래밍
- 자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불피요한 중복을 제거한다.

1. 프로토타입이 아닌 인스턴스 생성일 때
    - 동일한 메서드가 중복으로 생성되는 현상

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

2. 프로토타입을 사용한 인스턴스 생성일 때
   - 프로토타입으로 동일한 메서드 중복 방지
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

#### 3. 프로토타입 체이닝
<!--
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
-->

![](https://velog.velcdn.com/images/jm4293/post/45245a5f-1a56-478d-8449-76323644fc23/image.png)

#### 4. 생성자 함수
- ES6 이전에는 자바스크립트에 클래스 문법이 없었고 객체 지향 프로그래밍을 구현하려면 생성자 함수와 프로토타입을 사용해야 했다.
- 생성자 함수는 프로토타입을 직접 사용해 메서드를 정의하기 때문에, 클래스처럼 extends나 super 같은 키워드를 사용할 수는 없으나 객체 생성 시 메모리를 효율적으로 관리할 수 있습니다.

1. 함수 정의: 일반 함수처럼 정의하나 관례적으로 첫 글자를 대문자로 작성한다.
2. this 키워드: 생성자 함수 내에서 this 키워드는 새로 생성될 객체를 참조한다.
3. 속성 및 메서드 추가: this를 사용하여 객체의 속성과 메서드를 정의한다.
4. new 키워드 사용: 생성자 함수를 호출할 때는 항상 new 키워드를 사용해야 합니다. 그렇지 않으면 this는 전역 객체를 가리킨다.

```js
// 생성자 함수 정의
function Person(name, age) {
    this.name = name; // 속성
    this.age = age;   // 속성

    // 메서드 추가
    this.sayHello = function() {
        console.log(`이름: ${this.name}, 나이: ${this.age}`);
    };
}

// 생성자 함수 사용
const person1 = new Person('가', 30);
const person2 = new Person('나', 40);

// 메서드 호출
person1.sayHello(); // 이름: 가, 나이: 30
person2.sayHello(); // 이름: 나, 나이: 40.
```

#### 5. 클래스
- ES6(ECMAScript 2015)에서 클래스 문법이 도입되었지만, 사실 이 클래스 문법도 생성자 함수와 프로토타입 기반 상속을 단순화한 문법적 설탕(syntactic sugar)일 뿐, 자바스크립트의 근본적인 동작 방식은 여전히 프로토타입 기반이다.
- constructor 메서드를 사용해 객체를 초기화하고, extends로 상속을 구현.
- 사실상 생성자 함수 위에 얹어진 문법적 설탕으로, 클래스도 내부적으로는 생성자 함수처럼 동작함.

1. 프로퍼티, 메소드
2. constructor, super, extent
3. public, private, protect, static

#### 6. 생성자 함수와 클래스 차이
- 클래스 문법을 도입하기 전에는 객체를 생성하고 상속을 구현하기 위해 생성자 함수와 프로토타입을 사용해야 했다.
- 클래스는 이러한 생성자 함수의 복잡성을 숨기고, 개발자에게 좀 더 직관적이고 익숙한 방식으로 객체를 생성하는 방법을 제공한다.

#### 7. 실행 컨텍스트
- 실행 컨텍스트는 소스코드를 실행하는 데 필요한 환경을 제공하고 코드의 실행 결과를 실제로 관리하는 영역이다.
- 실행 컨텍스트는 식별자(변수, 함수, 클래스 드으이 이름)를 등록하고 관리하는 스코프와 코드 실행 순서 관리를 구현한 내부 매커니즘으로, 모든 코드는 실행 컨텍스트를 통해 실행되고 관리된다.
- 식별자와 스코프는 실행 컨텍스트의 렉시컬 환경으로 관리하고 코드 실행 순서는 실행 컨텍스트 스택으로 관리한다.
- JavaScript는 함수가 실행될 때마다 메모리 상에 실행 컨텍스트를 생성합니다.


```js
var x= 1;
const y = 2;

function foo (a) {
  var x = 3;
  const y = 4;

  function bar(b) {
    const z = 5;
    console.log(a + b + x + y + z);
  }
  bar(10);
}

foo(20);
```

![](https://velog.velcdn.com/images/jm4293/post/b9ddd9d1-32ca-49e0-9ad5-80a60b86c099/image.jpg)



  <!--
  ![](https://velog.velcdn.com/images/jm4293/post/47042d6a-8df8-4f1e-9f42-d0574c71c9c3/image.png)
-->


#### 8. 클로저
- 외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 참조할 수 있다. 이러한 경우 중첩 함수를 클로저라고 한다.
- 외부 함수보다 더 오래 생존한 중첩 함수는 외부 함수의 생존 여부(실행 컨텍스트의 생존 여부)와 상관없이 자신이 정의된 위치에 의해 결정된 상위 스코르픞 기억한다.
- 중첩 함수 inner의 내부에서는 상위 스코프를 참조할 수 있으므로 상위 스코프의 식별자를 참조할 수 있고 식별자의 값을 변경할 수도 있다.

```js
const x = 10;

function outer() {
  const x = 20;

  const inner = function () {
    console.log(x);
  };

  return inner;
}

const innerFunc = outer();
innerFunc(); // 20
```

![](https://velog.velcdn.com/images/jm4293/post/9a9ca115-5a77-485b-a91b-1e7320aaa647/image.jpg)

- 클로저 활용
    1. 상태를 안전하게 변경하고 유지하기 위해 사용
        - 상태를 안전하게 은닉하고 특정 함수에게만 상태 변경을 허용하기 위해 사용


#### 9. 비동기 프로그래밍
- Ajax
- API
   - API(Application Programming Interface)
   - 애플리케이션이 어떤 프로그램이 제공하는 기능을 사용할 수 있게 만든 매개체
- REST API
   - REST(Representational State Transfer)
   - URI로 자원을 표현하는 데에 집중하고, 자원의 상태(행위)에 대한 정의는 HTTP METHOD로 하는 것이 REST한 API를 설계하는 중심 규칙이다.
   - URI로 자원(리소스)을 표현해야 한다.
   - 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE)로 표현된다.

#### 10. 프로미스
- callback hell
  ```js
  // callback hell
  getData (function (x) {
    getMoreData (x, function (y) {
      getMoreData (y, function (z) {
        getMoreData (z, function (z) {
        	...
      	});
      });
    });
  });
  ```
- Promise
    1. Pending(대기)
        - 처리가 완료되지 않은 상태
    2. Fulfilled(이행)
        - 성공적으로 처리가 완료된 상태
    3. Rejected(거부)
        - 처리가 실패로 끝난 상태
    4. Promise Handler
        1. then
            - Promise 상태가 Fulfilled로 변경되었을 때 실행할 콜백 함수
        2. catch
            - Promise 상태가 Rejected로 변경되었을 때 실행할 콜백 함수
        3. finally
            - Promise 상태 변경에 상관없이 무조건 실행할 콜백 함수
    5. Promise 체이닝

#### 11. async, await
1. Promise 체이닝에 따른 Promise hell에 따른 로직을 간결화

```js
// Promise hell
fetch('https://example.com/api')
  .then(response => response.json())
  .then(data => fetch(`https://example.com/api/${data.id}`))
  .then(response => response.json())
  .then(data => fetch(`https://example.com/api/${data.id}/details`))
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
