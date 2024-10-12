// 생성자 함수
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// 클래스
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// 두 방식 모두 같은 방식으로 동작함
const person1 = new Person("Alice", 30);
const person2 = new PersonClass("Bob", 25);

person1.sayHello(); // "Hello, my name is Alice"
person2.sayHello(); // "Hello, my name is Bob"
