"use strict";
const people = [1, 3, 5, 6];
const snipers = [1, 5];
const map = [
  [1, "Alen:13"],
  [3, "Artem:45"],
  [2, "Serg:11"],
  [4, "Vasili:6"],
  [5, "Tom:25"],
  [6, "Lika:18"]
];
const weapon = [[5, "Pistol"]];
const getNameById = (id, searchArray) => {
  for (let people of searchArray) {
    if (people.includes(id)) {
      return people[1].split(":")[0];
    }
  }
};
const selectedPeople = [];
for (let i = 0; i < people.length; i++) {
  selectedPeople.push(getNameById(people[i], map));
}
console.log(`Люди: ${selectedPeople.join(", ")}`);
const sniperPeople = [];
const getSniperById = (id, searchArray) => {
  for (let sniper of searchArray) {
    if (sniper.includes(id)) {
      return sniper;
    }
  }
};
const addWeaponToSniper = (sniper, weapon) => {
  // console.log(sniper);
  return sniper[1].split(":")[0] + getWeaponById(sniper[0], weapon); //<=====Продолжить getWeaponById
};
for (let i = 0; i < snipers.length; i++) {
  const currentSniper = getSniperById(snipers[i], map);
  const currentSniperWithWeapon = addWeaponToSniper(currentSniper, weapon);
  sniperPeople.push(currentSniperWithWeapon);
}
console.log(`Снайпера: ${sniperPeople.join(", ")}`);
//Вывести:
//  Люди: Alen, Artem, Tom, Lika
//  Снайпера: Alen (FREE), Tom (Pistol)
//  Совершеннолетние: Artem, Tom, Lika
// Твой**** кролик писал...


