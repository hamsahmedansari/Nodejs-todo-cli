const clear = require("clear");
const chalk = require("chalk");
const figlet = require("figlet");
const inquirer = require("inquirer");
const yargs = require("yargs");

const addCommand = require("./commands/add");

clear();
// Create Title
console.log(
  chalk.greenBright(figlet.textSync("Todo App", { horizontalLayout: "full" }))
);
console.log(chalk.yellow("\n\tAn Simple CLI for Todo App Using NodeJS"));
console.log(
  chalk.yellow(
    `\tFor Commands Run ${chalk.blue("-help")} or ${chalk.blue("-h")}`
  )
);

var welcome = [
  {
    type: "list",
    name: "action",
    message: "Whats Your Action ?",
    choices: ["View", "Add", "Remove", "Change Status"]
  }
];

inquirer.prompt(welcome).then(ans => {
  if (ans.action === "View") {
    console.log(chalk.blue(`${chalk.yellow("-->")} Viewing`));
  } else if (ans.action === "Add") {
    console.log(chalk.blue(`${chalk.yellow("-->")} Adding`));
    addCommand.createAddAction();
  } else if (ans.action === "Remove") {
    console.log(chalk.blue(`${chalk.yellow("-->")} Removing`));
  } else if (ans.action === "Change Status") {
    console.log(chalk.blue(`${chalk.yellow("-->")} Changing Status`));
  } else {
    console.log(chalk.red("\n\t --> Error No Value is Selected"));
  }
});

yargs.command({
  command: "add",
  describe: "add a note",
  handler: d => {
    console.log("from Add");
  }
});

yargs.parse();
