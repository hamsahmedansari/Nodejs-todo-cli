var inquirer = require("inquirer");
const chalk = require("chalk");
const clear = require("clear");

const welcomeCommand = require("./welcome");
const { load, remove } = require("../action/todo");

const addCommand = require("./add");
const createViewAction = require("./view");
const createChangeAction = require("./change");

const createRemoveAction = () => {
  //   inquirer.prompt(title).then(({ title }) => {
  const rest = [
    {
      type: "list",
      name: "todo",
      message: `Which One You want to Remove ?`,
      choices: load().map(l => l.title)
    }
  ];
  inquirer
    .prompt(rest)
    .then(({ todo }) => {
      inquirer
        .prompt([
          {
            type: "confirm",
            name: "del",
            message: `Are You Sure To Delete ${chalk.redBright(todo)} ?`,
            default: false
          }
        ])
        .then(({ del }) => {
          if (del) {
            remove(todo);
          } else {
            console.log(`${chalk.green("Nothing Change You Cancel")}`);
          }

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

module.exports = createRemoveAction;
