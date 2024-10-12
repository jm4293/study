var x = "global x";
var y = "global y";

function outer() {
  var z = "local z";

  function inner() {
    var x = "local x";
    console.log(x);
    console.log(y);
    console.log(z);
  }

  inner();
}

outer();
