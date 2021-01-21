import chalk from 'chalk';

export default class Person {
    constructor(firstName, favoriteColor) {
        this.firstName = firstName;
        this.favoriteColor = favoriteColor;
    }

    speak() {
        console.log(chalk.hex(this.favoriteColor)(this.firstName));
    }
}