// https://code.mu/ru/javascript/book/prime/functions/function-returning-function/


//task1
function task1_1() {
  return function () {
    return 1;
  };
}
task1_1()();

function task1_2() {
  return function () {
    return 2;
  };
}
task1_2()();
console.log(task1_1()() + task1_2()());

//task2
function task2() {
  return function () {
    return function () {
      return function () {
        return function () {
          return "!";
        };
      };
    };
  };
}

let result = task2()()()()();
console.log(result);

//task3
function task3(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}
result = task3(2)(3)(4);
console.log(result);

//task4
function task4(num1) {
  let arr = [];
  arr.push(num1);
  return function (num2) {
    arr.push(num2);
    return function (num3) {
      arr.push(num3);
      return function (num4) {
        arr.push(num4);
        return function () {
          return arr;
        };
      };
    };
  };
}
result = task4(2)(3)(4)(5)();
console.log(result);
