const inquirer = require("inquirer");
const chalk = require("chalk");

const addCommand = require("./add");
const createRemoveAction = require("./remove");
const createViewAction = require("./view");
const createChangeAction = require("./change");
const createWelcome = () => {
  const welcome = [
    {
      type: "list",
      name: "action",
      message: "Whats Your Action ?",
      choices: ["View", "Add", "Remove", "Change Status"]
    }
  ];

  inquirer.prompt(welcome).then(ans => {
    if (ans.action === "View") {
      createViewAction();
    } else if (ans.action === "Add") {
      console.log(chalk.blue(`${chalk.yellow("-->")} Adding`));
      addCommand.createAddAction();
    } else if (ans.action === "Remove") {
      console.log(chalk.blue(`${chalk.yellow("-->")} Removing`));
      createRemoveAction();
    } else if (ans.action === "Change Status") {
      createChangeAction();
      console.log(chalk.blue(`${chalk.yellow("-->")} Changing Status`));
    } else {
      console.log(chalk.red("\n\t --> Error No Value is Selected"));
    }
  });
};

module.exports = createWelcome;
