var inquirer = require("inquirer");
const chalk = require("chalk");
const clear = require("clear");

const { load, changeStatus } = require("../action/todo");

const addCommand = require("./add");
const createRemoveAction = require("./remove");
const createViewAction = require("./view");

const createChangeAction = () => {
  //   inquirer.prompt(title).then(({ title }) => {
  const rest = [
    {
      type: "list",
      name: "todo",
      message: `Which One You want to Change ?`,
      choices: load().map(l => l.title)
    }
  ];
  inquirer
    .prompt(rest)
    .then(({ todo }) => {
      inquirer
        .prompt([
          {
            type: "list",
            name: "status",
            message: `${chalk.green(todo)} Status ?}`,
            choices: ["InComplete", "Complete"]
          }
        ])
        .then(({ status }) => {
          changeStatus(todo, status);

          // console.log(
          //   chalk.bgCyan(
          //     `\n---------------------------${chalk.black(
          //       "Main Menu"
          //     )}---------------------------------\n`
          //   )
          // );
          // const welcome = [
          //   {
          //     type: "list",
          //     name: "action",
          //     message: "Whats Your Action ?",
          //     choices: ["View", "Add", "Remove", "Change Status"]
          //   }
          // ];

          // inquirer.prompt(welcome).then(ans => {
          //   if (ans.action === "View") {
          //     createViewAction();
          //   } else if (ans.action === "Add") {
          //     console.log(chalk.blue(`${chalk.yellow("-->")} Adding`));
          //     addCommand.createAddAction();
          //   } else if (ans.action === "Remove") {
          //     console.log(chalk.blue(`${chalk.yellow("-->")} Removing`));
          //     createRemoveAction();
          //   } else if (ans.action === "Change Status") {
          //     createChangeAction();
          //     console.log(chalk.blue(`${chalk.yellow("-->")} Changing Status`));
          //   } else {
          //     console.log(chalk.red("\n\t --> Error No Value is Selected"));
          //   }
          // });
        });
    })
    .catch(err => console.log(err));
  //   });
};

module.exports = createChangeAction;
