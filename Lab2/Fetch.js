import axios from 'axios';
import chalk from 'chalk';

export default class Fetch {
    constructor(pokemon, color) {
        this.pokemon = pokemon;
        this.color = color;
    }

    fetch() {
        axios(this.pokemon)
            .then((response) => {
                const pokemon = response.data;
                console.log(chalk.hex(this.color)("Name: " + pokemon.name + ", " + "ID: " + pokemon.id));
            })
            .catch((error) => {
                console.log(chalk.red(error));
            });
    }
}


