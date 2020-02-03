"use strict";
import users from "./users.js";
console.log("---------------------------task10-----------------------------");
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  // твой код
 return users
    // .map(user => user.skills)
    .reduce((acc, user) => acc.concat(user.skills), [])
    .sort()
    .filter(
      (allSkill, index, allSkills) => index === allSkills.indexOf(allSkill)
    );
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
