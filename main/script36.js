//code.mu.off/ru/javascript/book/prime/basis/practicum/operations.html

// 1 - Найдите количество секунд в сутках.
let hoursInDay = 24;
let minutesInHour = 60;
let secondsInMinute = 60;
let secondsinDay = hoursInDay * minutesInHour * secondsInMinute;
console.log(`${secondsinDay} seconds in 24 hours`);

// 2 - Найдите количество секунд в 30 сутках.
let days = 30;
console.log(`${secondsinDay * days} seconds in 30 days`);

// 3 - Найдите количество секунд в году.
days = 365;
console.log(`${secondsinDay * days} seconds in 1 year days`);

// 4 - Найдите количество минут в сутках.
console.log(`${minutesInHour * hoursInDay} minutes in 24 hours`);

// 5 - Найдите количество минут в сутках.
console.log(`${minutesInHour * hoursInDay * days} minutes in 365 days`);

// 1gb = 1024mb
// 1mb = 1024kb
// 1kb = 1024byte

// 6 - Найдите количество байт в мегаб
let kb = 1024;
let byteInMb = kb ** 2;
console.log(`task6 - ${byteInMb} bytes in 1 mb`);

// 7 - Найдите количество байт в гигабайте.
let byteInGb = kb ** 3;
console.log(`task7 - ${byteInGb} bytes in 1 GB`);

// 8 - Найдите количество байт в 10 гигабайтах
let gb = 10;
console.log(`task8 - ${gb * byteInGb} bytes in ${gb} GB`);

// 9 - Найдите количество байт в терабайте.
let byteInTb = kb ** 4;
console.log(`task9 - ${byteInTb} bytes in 1 TB`);

// 10 - Найдите количество килобайт в терабайте.
let kbInTb = byteInTb / kb;
console.log(`task10 - ${kbInTb} MB in 1TB`);
