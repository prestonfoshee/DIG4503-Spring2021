import Fetch from './Fetch.js';

const squirtle = new Fetch("https://pokeapi.co/api/v2/pokemon/squirtle", "#449AF5");

const invalid = new Fetch("invalid.url.com", "#0000ff");

squirtle.fetch();

invalid.fetch();
