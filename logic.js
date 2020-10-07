'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('./jsons/settlement-options.json');
let template = JSON.parse(rawdata);

let size = template.size;
let government = template.government;
let alignment = template.alignment;
let leadership = template.leadership;
let guards = template.guards;
let defenses = template.defenses;
let buildings = template.buildings;



// var result = {
//     size: size[Math.floor(Math.random() * size.length)],
//     government: government[Math.floor(Math.random() * government.length)],
//     alignment: alignment[Math.floor(Math.random() * alignment.length)],
//     leadership: leadership[Math.floor(Math.random() * leadership.length)],
//     guards: guards[Math.floor(Math.random() * guards.length)],
//     defense: defenses[Math.floor(Math.random() * defenses.length)],
//     buildings: buildings[Math.floor(Math.random() * buildings.length)]
// }

// console.log(result);

console.log(template.punishments.length);



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
