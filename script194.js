// javascript/book/prime/functions/callbacks/

// task1
function each(arr, callback) {
  let result = [];
  for (let elem of arr) {
    result.push(callback(elem));
  }
  return result;
}

let task1 = each([2, 3, 4, 5, 6], function (num) {
  return num * 2;
});
console.log(task1);

//task2
let task2 = each(["ashgabat", "kiev", "london"], function (elem) {
  return elem.split("").reverse().join("");
});
console.log(task2);

//task3

let task3 = each(["ashgabat", "kiev", "london"], function (elem) {
  return elem.split("").reverse().join("");
});
console.log(task3);
