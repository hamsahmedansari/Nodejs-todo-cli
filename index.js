const clear = require("clear");
const chalk = require("chalk");
const figlet = require("figlet");
const inquirer = require("inquirer");
const yargs = require("yargs");

const welcomeCommand = require("./commands/welcome");

clear();
// Create Title
console.log(
  chalk.greenBright(figlet.textSync("Todo App", { horizontalLayout: "full" }))
);
console.log(chalk.yellow("\n\tAn Simple CLI for Todo App Using NodeJS"));
console.log(
  chalk.yellow(
    `\tFor Commands Run ${chalk.blue("Just Follow On Screen Instruction")} `
  )
);

// welcome
welcomeCommand();
