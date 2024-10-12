var x = 1;

function foo() {
  var x = 10;
  bar();
  console.log("x: ", x);
}

function bar() {
  console.log("x: ", x);
}

foo();
bar();
