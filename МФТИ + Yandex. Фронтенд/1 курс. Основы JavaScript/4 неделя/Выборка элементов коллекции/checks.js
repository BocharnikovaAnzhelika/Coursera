// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var lib = require('./index.js');

// Коллекция данных
var friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Брэд',
        gender: 'Мужской',
        email: 'newtonwilliams@example.com',
        favoriteFruit: 'Банан'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Апельсин'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
];

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends,
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель', 'jskdjk']),
    lib.filterIn('favoriteFruit4', ['Яблоко', 'Картофель', 'jskdjk']),
    lib.select('name', 'gender', 'email'),
    lib.filterIn('gender', ['Женский'])

);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result, [
    { name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com' },
    { name: 'Эмили', gender: 'Женский', email: 'example@example.com' },
    { name: 'Мэт', gender: 'Мужской', email: 'danamcgee@example.com' },
    { name: 'Шерри', gender: 'Женский', email: 'danamcgee@example.com' },
    { name: 'Стелла', gender: 'Женский', email: 'waltersguzman@example.com' }
]);

assert.deepEqual(lib.query([{name1: '1'}, {name1: '2'}], lib.filterIn('name1', ['1']), lib.filterIn('name1', ['1']), lib.select('name1')), [{name1: '1'}]);
assert.deepEqual(lib.query([{name1: '1'}, {name1: '2'}], lib.filterIn('name1', ['1']), lib.filterIn('name1', ['2']), lib.select('name1')), []);
assert.deepEqual(lib.query([{name1: '1'}, {name1: '2'}], lib.filterIn('name1', ['2']), lib.filterIn('name1', ['2']), lib.select('name1')), [{name1: '2'}]);

assert.deepEqual(lib.query([{name1: '1_1', name2: '1_2'}, {name1: '2_1', name2: '2_2'}], lib.filterIn('name1', ['1_1']), lib.filterIn('name2', ['1_2']), lib.select('name1')), [{name1: '1_1'}]);
assert.deepEqual(lib.query([{name1: '1_1', name2: '1_2'}, {name1: '2_1', name2: '2_2'}], lib.filterIn('name1', ['2_1']), lib.filterIn('name2', ['1_2']), lib.select('name1')), []);
assert.deepEqual(lib.query([{name1: '1_1', name2: '1_2'}, {name1: '2_1', name2: '2_2'}], lib.filterIn('name1', ['1_1']), lib.filterIn('name2', ['2_2']), lib.select('name1')), []);
assert.deepEqual(lib.query([{name1: '1_1', name2: '1_2'}, {name1: '2_1', name2: '2_2'}], lib.filterIn('name1', ['2_1']), lib.filterIn('name2', ['2_2']), lib.select('name1')), [{name1: '2_1'}]);

assert.deepEqual(lib.query([{name1: 'a'}, {name1: 'b'}, {name1: 'c'}], lib.filterIn('name1', ['a', 'b']), lib.filterIn('name1', ['b', 'c']), lib.select('name1')), [{name1: 'b'}]);

console.info('OK!');
