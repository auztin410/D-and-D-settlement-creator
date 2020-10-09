'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('./jsons/settlement-options.json');
let template = JSON.parse(rawdata);

let size= template.size;
let government= template.government;
let alignment= template.alignment;
let leadership= template.leadership;
let guards= template.guards;
let defenses= template.defenses;
let buildings= template.buildings;
let exoticShops= template.exoticShops;
let highQualityShops= template.highQualityShops;
let averageShops= template.averageShops;
let lowQualityShops= template.lowQualityShops;
let impoverishedShops= template.impoverishedShops;
let exoticServices= template.exoticServices;
let highQualityServices= template.highQualityServices;
let averageServices= template.averageServices;
let lowQualityServices= template.lowQualityServices;
let impoverishedServices= template.impoverishedServices;
let floorPlan= template.floorPlan;
let interior= template.interior;
let decor= template.decor;
let walls= template.walls;
let floors= template.floors;
let rooftop= template.rooftop;
let understoryWallsFloors= template.understoryWallsFloors;
let sublevels= template.sublevels;
let terrain= template.terrain;
let crops= template.crops;
let climate= template.climate;
let weather= template.weather;
let naturalDisasters= template.naturalDisasters;
let punishments= template.punishments;



var result = {
  size: size[Math.floor(Math.random() * size.length)],
  government: government[Math.floor(Math.random() * government.length)],
  alignment: alignment[Math.floor(Math.random() * alignment.length)],
  leadership: leadership[Math.floor(Math.random() * leadership.length)],
  guards: guards[Math.floor(Math.random() * guards.length)],
  defenses: defenses[Math.floor(Math.random() * defenses.length)],
  buildings: buildings[Math.floor(Math.random() * buildings.length)],
  exoticShops: exoticShops[Math.floor(Math.random() * exoticShops.length)],
  highQualityShops: highQualityShops[Math.floor(Math.random() * highQualityShops.length)],
  averageShops: averageShops[Math.floor(Math.random() * averageShops.length)],
  lowQualityShops: lowQualityShops[Math.floor(Math.random() * lowQualityShops.length)],
  impoverishedShops: impoverishedShops[Math.floor(Math.random() * impoverishedShops.length)],
  exoticServices: exoticServices[Math.floor(Math.random() * exoticServices.length)],
  highQualityServices: highQualityServices[Math.floor(Math.random() * highQualityServices.length)],
  averageServices: averageServices[Math.floor(Math.random() * averageServices.length)],
  lowQualityServices: lowQualityServices[Math.floor(Math.random() * lowQualityServices.length)],
  impoverishedServices: impoverishedServices[Math.floor(Math.random() * impoverishedServices.length)],
  floorPlan: floorPlan[Math.floor(Math.random() * floorPlan.length)],
  interior: interior[Math.floor(Math.random() * interior.length)],
  decor: decor[Math.floor(Math.random() * decor.length)],
  walls: walls[Math.floor(Math.random() * walls.length)],
  floors: floors[Math.floor(Math.random() * floors.length)],
  rooftop: rooftop[Math.floor(Math.random() * rooftop.length)],
  understoryWallsFloors: understoryWallsFloors[Math.floor(Math.random() * understoryWallsFloors.length)],
  sublevels: sublevels[Math.floor(Math.random() * sublevels.length)],
  terrain: terrain[Math.floor(Math.random() * terrain.length)],
  crops: crops[Math.floor(Math.random() * crops.length)],
  climate: climate[Math.floor(Math.random() * climate.length)],
  weather: weather[Math.floor(Math.random() * weather.length)],
  naturalDisasters: naturalDisasters[Math.floor(Math.random() * naturalDisasters.length)],
  punishments: punishments[Math.floor(Math.random() * punishments.length)]
}

console.log(result);

// console.log(template.punishments.length);

// var allDetails = Object.getOwnPropertyNames(template);

// allDetails.forEach(function(item){

//   console.log('let ' + item + '= template.' + item + ';');

// });

return;

// Unique Name Generator Code

const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
 
const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); // big_red_donkey
 
const shortName = uniqueNamesGenerator({
  dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
  length: 2
});

console.log(randomName);
console.log(shortName);


// random-name code

var random = require('random-name')
console.log(random())

//provides first, middle, and last names.

console.log(random.first())
console.log(random.middle())
console.log(random.last())

//also, random place name!
console.log(random.place())
