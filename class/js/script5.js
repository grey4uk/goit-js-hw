 'use strict'
////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////this, get, set///////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const title = {
//     start:20,
//     saySummaSuper:function(a,b){
//       return this.start + Math.abs(a) + Math.abs(b);
//     },
//     _arrowSkill:10,
//     _lazySkill:5,
//     set arrowSkill(val){
//       if (val === this._arrowSkill){
//         return;
//       }
//       this._arrowSkill = val;
//       this.summaOfSkills =  this._arrowSkill + this._lazySkill;
//     },
//     get arrowSkill(){
//       this._arrowSkill;
//     },
//     set lazySkill(val){
//       if (val === this._lazySkill){
//         return;
//       }
//       this._lazySkill = val;
//       this.summaOfSkills =  this._arrowSkill + this._lazySkill;
//     },
//     get lazySkill(){
//       this._lazySkill;
//     },  
//     summaOfSkills:12312
//   }
//   ​
//   console.log(title.saySummaSuper(5,6));//31
//   title.arrowSkill = 10;
//    console.log(title.summaOfSkills); //37
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////task Weapon People///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
const weapon = {
  1: { isReal: true, name: "Machine Gun", damage: 120 },
  2: { isReal: false, name: "Bubble Gun", damage: 5 },
  3: { isReal: false, name: "Catomet", damage: 15 },
  4: { isReal: true, name: "Bow", damage: 60 },
  5: { isReal: true, name: "Railgun", damage: 70 }
};
const people = {
  1: { name: "Ann", age: 12, weapon: 1 },
  2: { name: "Serg", age: 22, weapon: 2 },
  3: { name: "Lola", age: 62, weapon: 3 },
  4: { name: "Rikt", age: 52, weapon: 4 },
  5: { name: "Mila", age: 2, weapon: 5 },
  6: { name: "Tor", age: 11, weapon: 4 },
  7: { name: "Selen", age: 8, weapon: 3 }
};
class Human {
  constructor(name, age, weapon) {
    this.name = name;
    this.age = age;
    this.weaponName = weapon.name;
    this.isWeaponLegal = age >= 18 || !weapon.isReal;
    this.weaponDamage = weapon.damage;
  }
  static printInfo(human) {
    return `${human.name} is ${human.age} years old, is ${
      human.age < 18 ? "not" : ""
    } adult, ${human.name} has ${human.weaponName} with damage ${
      human.weaponDamage
    }. ${human.isWeaponLegal ? "LEGAL" : "ILLEGAL"}`;
  }
}
const preparedPeople = [];
for (const person in people) {
  // console.log(people[person].weapon)
  // console.log(weapon[people[person].weapon])
  const newHuman = new Human(
    people[person].name,
    people[person].age,
    weapon[people[person].weapon]
  );
  preparedPeople.push(newHuman);
}
let notReady = false;
do{
  notReady = false;
for (let i = 0; i < preparedPeople.length - 1; i++) {
  let person1 = preparedPeople[i];
  let person2 = preparedPeople[i+1];
  let dam1 = Number(person1.weaponDamage) * (person1.isWeaponLegal?1:10000);
  let dam2 = Number(person2.weaponDamage) * (person2.isWeaponLegal?1:10000);
  if (dam1 < dam2){
    notReady = true;
    const tmp = preparedPeople[i];
    preparedPeople[i] = preparedPeople[i+1];
    preparedPeople[i+1] = tmp;
  }
}
}while(notReady);
for (let i = 0; i < preparedPeople.length; i++) {
 console.log('>',Human.printInfo(preparedPeople[i]));
}
// Sort list (first by ILLEGAL, second by weapon damage.)
// Ann is 12 years old, is not adult she has Machine Gun with damage 120. ILLEGAL
//