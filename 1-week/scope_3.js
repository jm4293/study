function foo() {
  console.log("global foo");
}

function bar() {
  foo();
  function foo() {
    console.log("local foo");
  }
  foo();
}

foo();
bar();
