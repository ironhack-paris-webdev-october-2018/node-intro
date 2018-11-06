const chalk = require("chalk");
const kirbyDance = require("kirby-dance");

function hello(name) {
  console.log(chalk.bgYellow(`Hello, ${name}!`));
}

console.log(chalk.bgMagenta(kirbyDance(5)));

hello("world");
console.log(chalk.red("RED EXAMPLE"));
hello("Abi");
hello("Paul");
