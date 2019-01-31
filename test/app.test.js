import getNumber from '../src/js/app';

test('При вводе числа возвращается число', () => {
  expect(getNumber('3')).toBe(3);
});

test('При вводе строки возвращается 0', () => {
  expect(getNumber('четыре')).toBe(0);
});

test('Пустое значение возвращает 0', () => {
  expect(getNumber('')).toBe(0);
});

test('При вводе числа не в десятичной системе счисления возвращается 0', () => {
  expect(getNumber('fff')).toBe(0);
});
