// Задание 1. Создать объект counter всеми возможными способами
const counter1 = new Object({ count: function (x) { return ++x } });
const counter2 = {
  a: 123,
  b: 123,
}

const counter3 = Object.create({});
const counter4 = Object.create(null);
const counter5 = Object.create({}, { prop: { value: 123123 } });

const counter6 = Object.assign({}, { ab: 123123 });
const counter7 = Object.assign({});

console.log(counter1, counter2, counter3, counter4, counter5, counter6, counter7);

// Задание 2. Скопировать объект counter всеми возможными способами;
const copied1 = Object.assign({}, counter1);
const copied2 = { ...counter2 };
const copied3 = JSON.parse(JSON.stringify(counter6));

console.log(copied1, copied2, copied3);

// Задание 3. Создать функцию makeCounter всеми описанными и возможными способами;
function makeCounter1() {
  let count;
  
  return function () {
    return count++;
  }
};
const makeCounter2 = function () {
  let count;

  return function () {
    return count++;
  }
};
const makeCounter3 = function withName() { // NFE
  let count;

  return function withNameInside() {
    return count++;
  }
}; 
const makeCounter4 = () => {
  let count;

  return () => {
    return count++;
  };
};

function Counter(number) {
  this.number = number;

  this.count = function () {
    return ++this.number
  }
}
const makeCounter5 = new Counter(0); // Через конструктор

console.log(makeCounter5.count());

console.log(makeCounter1(), makeCounter2(), makeCounter3(), makeCounter4());

// Бонус. Задание 1. Написать функцию глубокого сравнения двух объектов:
const obj1 = {
  here: {
    is: "on",
    other: "3",
  },
  object: "Y",
};

const obj2 = {
  here: {
    is: "on",
    other: "2",
  },
  object: "Y",
};

const deepEqual = (obj1, obj2) => {
  for (const key of Object.keys(obj1)) {
    const isObj1 = obj1[key] !== null && typeof obj1[key] === 'object';
    const isObj2 = obj2[key] !== null && typeof obj2[key] === 'object';
    const areObj = isObj1 && isObj2;
    if (areObj && !deepEqual(obj1[key], obj2[key]) || !areObj && obj1[key] !== obj2[key]) return false
  }
  return true
}
console.log(deepEqual(obj1, obj2)); // false

// Бонус. Задание 2. Развернуть строку в обратном направлении при помощи методов массивов:
function reverseStr(str) {
  return str.split('').reverse().join("");
}

console.log(reverseStr("Строка")) // акортС