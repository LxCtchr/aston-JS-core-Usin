# Почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие?

Массив - это _"экзотический объект"_, который особым образом относится к ключам свойств индекса массива.

Cам массив обладает свойством _length_, значение которого всегда является неотрицательным целым числом.

В JavaScript мы можем хранить значения _разных типов_ в одном и том же массиве, и его длина может быть _динамической_ (она может увеличиваться или уменьшаться настолько, насколько это необходимо).

Во многих других языках программирования можно хранить значения только _одного типа_ в одном массиве, и длина массива должна быть _определена в момент его создания и не может быть изменена впоследствии_.

## Массив может совмещать в себе следующие структуры данных:

- _Список(List)_ - Списки похожи на массивы, но они обычно используются для хранения переменного числа элементов и обеспечивают большую гибкость с точки зрения вставки и удаления элементов. В JavaScript можно реализовать список, используя массив и некоторые дополнительные методы для манипулирования элементами.

- _Стек(Stack)_ - это структура данных, которая работает по принципу "последний вход-первый выход" (LIFO). В JavaScript можно реализовать стек, используя массив и некоторые дополнительные методы для перемещения элементов.

- _Очередь(Queue)_ - это структура данных, которая работает по принципу "первый вход-первый выход" (FIFO). В JavaScript можно реализовать очередь, используя массив и некоторые дополнительные методы для постановки элементов в очередь и удаления из очереди.

- _Хэш-таблица(Hash table)_ - это структура данных, которая сопоставляет ключи со значениями с помощью хэш-функции. Хэш-функция вычисляет индекс массива, в котором должно быть сохранено или извлечено заданное значение. Это позволяет эффективно вставлять и извлекать значения из таблицы. В JavaScript можно реализовать хэш-таблицу, используя массив и хэш-функцию.
