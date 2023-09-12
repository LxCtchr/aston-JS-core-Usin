//-----------------------------------------------------------------------------------------------------
const res = "B" + "a" + (1 - "hello");
// (1 - "hello") приведет к NaN, т.к с оператором -минус- единица не будет приведена к строке,
// соответственно, данное выражение будет расцениваться как выражение с числами,
// а в любой ситуации, когда математическая операция не срабатывает должным образом - возвращается NaN.

// Далее идут только операторы сложения со строками,
// данные операторы будут расцениваться как конкатенация строк,
// при конкотенации NaN будет приведено к строке и конкатенация произойдет успешно,
// и в константу res будет присвоена строка "BaNaN".
console.log(res === "BaNaN") //true
//-----------------------------------------------------------------------------------------------------
const res2 = (true && 3) + "d";
// (true && 3) вернет 3,
// так как оператор && является конъюнкцией и оба операнда в выражении будут истины,
// то в таком случае возращается последний операнд

// Далее идет оператор -плюс-,
// который в случае со строкой "d" будет являться конкатенацией строк,
// соответственно, число 3 будет приведено к строке,
// и в константу res2 будет присвоена строка "3d".
console.log(res2 === "3d") //true
//-----------------------------------------------------------------------------------------------------
const res3 = Boolean(true && 3) + "d";
// По аналогии со вторым примером (true && 3) вернет 3,
// однако, теперь данное выражение передано в функцию Boolean(),
// которая должна привести выржения к логическому типу,
// т.к число отличное от нуля при приведении к логическому типу вернет true,
// то Boolean(true && 3) вернет true

// Далее по аналогии со вторым примером
// произойдет конкатенация строк
// true будет приведено к строке
// и в константу res3 будет присвоена строка "trued".
console.log(res3 === "trued") //true
//-----------------------------------------------------------------------------------------------------