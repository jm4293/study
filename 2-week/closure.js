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
