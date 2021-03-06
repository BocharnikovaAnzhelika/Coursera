// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var addTime = require('./index.js');

assert.equal(addTime(12, 30, 30), '13:00', 'При добавлении 30 мин. к 12:30 получится 13:00, а не ' + addTime(12, 30, 30));
assert.equal(addTime(23, 59, 31), '00:30', 'При добавлении 31 мин. к 23:59 получится 00:30, а не ' + addTime(23, 59, 31));
assert.equal(addTime(11, 50, 71), '13:01', 'При добавлении 61 мин. к 11:50 получится 13:01, а не ' + addTime(11, 50, 71));
assert.equal(addTime(23, 59, 725), '00:04', 'При добавлении 80 мин. к 23:01 получится 00:21, а не ' + addTime(23, 59, 725));

assert.equal(addTime(15, 00, 720), '03:00', 'При добавлении 720 мин. к 15:00 получится 03:00, а не ' + addTime(15, 00, 720));

console.info('OK!');
