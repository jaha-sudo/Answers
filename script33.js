//code.mu.off/ru/javascript/book/prime/basis/prompt.html

// task1
let urAge = prompt("How old are you?");
alert(`Your age is ${urAge}`);

// task2
let num1 = prompt("Введите первое число");
let num2 = prompt("Введите второе число");

alert(Number(num1) + Number(num2));

// task3
let squaresSideLength = prompt("Введите сторону квадрата");
alert(`Площадь квадрата равна ${(+squaresSideLength) ** 2}`);

// task4
let aSide = prompt("Введите a сторону прямоугольника");
let BSide = prompt("Введите b сторону прямоугольника");

alert(`Периметр прямоугольника равен ${(Number(aSide) + Number(BSide)) * 2}`);
