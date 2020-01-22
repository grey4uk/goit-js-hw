"use strict";

// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function(string) {
  // твой код
  const wordsArray = string.split(" ");
  let longElement = wordsArray[0];
  for (let i = 1; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longElement.length) {
      longElement = wordsArray[i];
    }
  }
  return longElement;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'

console.log(findLongestWord("Undistructable"));
