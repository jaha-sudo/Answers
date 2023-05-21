// code.mu.off/ru/javascript/book/prime/basis/digits-strings.html

// task1

let str = "12345";
console.log(
  Number(str[0]) +
    Number(str[1]) +
    Number(str[2]) +
    Number(str[3]) +
    Number(str[4])
);

// task2

let num = 12345;
num = String(num);
console.log(
  Number(num[0]) +
    Number(num[1]) +
    Number(num[2]) +
    Number(num[3]) +
    Number(num[4])
);

// task3
console.log(
  Number(num[0]) *
    Number(num[1]) *
    Number(num[2]) *
    Number(num[3]) *
    Number(num[4])
);

//   task4
console.log(Number(num[4] + num[3] + num[2] + num[1] + num[0]));
