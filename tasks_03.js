// 2) Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)
function logger() {
  console.log(`I output only external context: ${this.item}`)
}

const obj = {
  item: "some value"
}

logger.call(obj);
logger.apply(obj);
logger.bind(obj)();

// Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()
Function.prototype.newBind = function (obj, ...args) {
  const funcContext = this
  return function (...newArgs) {
    funcContext.apply(obj, [...args, ...newArgs]);
  }
}

function newLogger(anotherArgument, anotherArgumentInsideFunc) {
  console.log(`I output only external context: ${this.item} + ${anotherArgument} + ${anotherArgumentInsideFunc}`)
}

const newObj = {
  item: "some value"
}

newLogger.newBind(newObj, "another argument for a function")("another argument inside the returned function");