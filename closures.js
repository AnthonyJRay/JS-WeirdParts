function buildFunctions() {

  var arr = [];

  for (var i = 0; i < 3; i++) {

    arr.push(
      function () {
        console.log(i)
      }
    )

  }

  return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

console.log('---------------------');

function buildFunctions() {

  var arr = [];

  for (var i = 0; i < 3; i++) {

    let j = i

    arr.push(
      function () {
        console.log(j)
      }
    )

  }

  return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();


console.log('------------------------')

function buildFunctions3() {

  var arr = [];

  for (var i = 0; i < 3; i++) {

    arr.push(
      (function (j) {
        return function () {
          console.log(j)
        }
      }(i))
    )

  }

  return arr;
}

var fs3 = buildFunctions3();

fs3[0]();
fs3[1]();
fs3[2]();