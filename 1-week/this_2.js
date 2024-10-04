function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  return this.name;
};

const me = new Person("Lee");

console.log(me.sayHello()); // "Lee"

Person.prototype.name = "Kim";

console.log(Person.prototype.sayHello()); // "Kim"
