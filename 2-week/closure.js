const global = "global";

function outer() {
  const outer = "outer";

  return function inner() {
    const inner = "inner";
    console.log(global, outer, inner);

    return "inner 종료";
  };
}

const closure = outer();

// console.log(closure);
console.log(closure());
