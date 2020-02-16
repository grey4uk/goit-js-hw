import countries from "./data.js";

const input = document.querySelector("#input");
input.addEventListener("input", onPreInput);

let timer;
function onPreInput(event) {
  clearTimeout(timer);
  timer = setTimeout(preparedData, 500, event);
}

// setTimeout(workProcess, 100);

function preparedData(event) {
  // const search = "Uzbek";
  const search = event.target.value.toLowerCase();

  functionData (countries
    .map(country => {
      return {
        languages: country.languages.map(language =>
language.name.toLowerCase()),
        flag: country.flag,
        name: country.name,
        location: country.latlng
      };
    })
    .filter(country => country.languages.includes(search)));
}

// console.log(preparedData());

const ulCounty = document.createElement("ul");
ulCounty.addEventListener('click', onClick);
function functionData(country) {
  ulCounty.innerHTML = '';
  country.forEach(countryItem => {
    ulCounty.insertAdjacentHTML(
      "beforeend",
      `<li class="li" data-name = ${countryItem.name} data-location =
"${countryItem.location}"> <h2>${countryItem.name}</h2> <img
src=${countryItem.flag} alt =${countryItem.name}></li>`
    );
  });
  document.body.appendChild(ulCounty);
}

function onClick (event){
  let clickUl = event.target;
  if(!clickUl.classList.contains('li')){
    clickUl = clickUl.closest('.li');
  }
  document.querySelector('.map').innerHTML = "";
  const pCountry = document.querySelector("p");
  pCountry.textContent = clickUl.dataset.location + "   " +
clickUl.dataset.name;
  const map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat(clickUl.dataset.location.split(",")),
      zoom: 4
    })
  });

   console.log(clickUl,clickUl.dataset.location);
}