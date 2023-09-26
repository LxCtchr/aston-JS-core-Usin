// 1)
let promiseTwo = new Promise((resolve, reject) => {
   resolve("a");
});

promiseTwo
  .then((res) => {
    return res + "b"; //"ab"
  })
  .then((res) => {
    return res + "с"; //"abc"
  })
  .finally((res) => {
    return res + "!!!!!!!"; //nothing - Потому что не принимает промис и не возвращает промис
  })
  .catch((res) => {
    return res + "d"; //nothing - Потому что промис resolve, а не reject и ошибок не было
  })
  .then((res) => {
    console.log(res); //"abc"
  });

// 2)
function doSmth() {
  return Promise.resolve("123");
}

doSmth()
  .then(function (a) {
    console.log("1", a); // 1 123
    return a;
  })
  .then(function (b) {
    console.log("2", b); // 2 123
    return Promise.reject("321");
  })
  .catch(function (err) {
    console.log("3", err); // 3 321
    //return err; - не было перевыброса промиса, поэтому далее в .then() пойдет resolve(undefined)
  })
  .then(function (c) {
    console.log("4", c); // 4 undefined
    return c;
  });

// 3) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.

const arr = [10, 12, 15, 21];
let i = 0;
let current;
const interval = setInterval(() => {
  if (i < arr.length) {
    current = i;
    console.log(current);
    ++i;
  } else clearInterval(interval);
}, 3000);