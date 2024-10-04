function foo() {
  console.log("foo:", this);

  function bar() {
    console.log("bar:", this);
  }
  bar();
}
foo();

// var value = 1;
//
// const obj = {
//   value: 100,
//   foo() {
//     console.log("foo:", this);
//     console.log("foo:", this.value);
//
//     function bar() {
//       console.log("bar:", this);
//       console.log("bar:", this.value);
//     }
//     bar();
//   },
// };
// obj.foo();
