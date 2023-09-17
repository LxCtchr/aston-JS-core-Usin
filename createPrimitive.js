// STRING //
const str1 = "This is new string";
const str2 = new String("...from constructor");
console.log(str1, str2);

// NUMBER //
const num1 = 123;
const num2 = new Number(123);
console.log(num1, num2)

// BOOLEAN //
const boo1 = false;
const boo2 = new Boolean(true);
console.log(boo1, boo2)

// NULL //
const empty1 = null;
const empty2 = Object.create(null);
console.log(empty1, empty2);

// UNDEFINED //
let noValue1;
const noValue2 = void 0; // Оператор void вычисляет переданное выражение и возвращает undefined.
console.log(noValue1, noValue2);

// SYMBOL //
const sym1 = Symbol("id");
const sym2 = Symbol.for("key"); 
console.log(sym1, sym2);

// BigInt //
const big1 = BigInt(123123123);
const big2 = BigInt(Number.MAX_SAFE_INTEGER + 1);
console.log(big1, big2)