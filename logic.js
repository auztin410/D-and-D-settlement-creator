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