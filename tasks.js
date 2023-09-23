// 3) Создать объект Person несколькими способами, после создать объект Person2, чтобы в нём были доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам.
const Person1 = {
  showName: function () {
    console.log('1. Name: Person')
  }
}

const Person2 = Object.create(Person1);

Person2.showName();
//-------------------------------------
const Person3 = new Object()
Person3.showName = function () {
  console.log('2. Name: Person')
}

const Person4 = {};
Object.setPrototypeOf(Person4, Person3);

Person4.showName();
//-------------------------------------
Object.prototype.logInfo = function () {
  console.log('Showing some info')
}
Person1.logInfo();
Person2.logInfo();
Person3.logInfo();
Person4.logInfo();

//4) Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.
class PersonThree {
  #name;

  constructor(name) {
    this.#name = name
  }

  get name() {
    return this.#name
  }

  set name(value) {
    this.#name = value; 
  }
}

class newPerson extends PersonThree {
  //something
}

const newObj = new newPerson("Peter");
console.log(newObj.name)
newObj.name = "Not Peter, now Bob";
console.log(newObj.name)

//БОНУС: 1) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:
const firstSum1 = (arr, total) => {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[arr.length - 1]; j > 0; j--) {
      if (arr[i] + arr[j] === total) {
        pairs.push(arr[i], arr[j])
        return pairs;
      }
    }
  }
}

console.log(firstSum1([1, 2, 3, 4, 5, 6, 7, 8, 9], 13)); //Выведет: (4,9) // Сложность O(n^2)

const firstSum2 = (arr, total) => {
  const map = {};
  const pairs = [];

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      pairs.push(map[arr[i]], arr[i]);
      return pairs
    }
    map[total - arr[i]] = arr[i];
  }
}

console.log(firstSum2([1, 2, 3, 4, 5, 6, 7, 8, 9], 13)); //Выведет: (6,7) // Сложность O(n)