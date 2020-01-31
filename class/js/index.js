"use strict";
import country from "./country.js";
// console.table(country);

function getCountryByLang(find, allArray) {
  return allArray
    .map(countr => {
      return {
        lang: countr.languages.map(countr => countr.name),
        name: countr.name
      };
    })
    .filter(key => key.lang.includes(find))
    .map(countr => countr.name);
}

function getAverageOfPopulation(allArray){
  return Math.round(allArray.reduce((acc,allArr)=>acc+=allArr.population,0)/allArray.length);
}

function getPartOfSortCountries(allArray, value){
const firstTens = (allArray.sort((a,b)=>a.population-b.population)).splice(0,value); 
for(const firstTen of firstTens){
  console.table(`country: ${firstTen.name},  population: ${firstTen.population}`);
}
};

//  console.log(getCountryByLang("Russian", country));
// console.log(getAverageOfPopulation(country));
console.table(getPartOfSortCountries(country, 10));