var inquirer = require("inquirer");
const chalk = require("chalk");
const clear = require("clear");

const { load, loadSingle } = require("../action/todo");

const addCommand = require("./add");
const createRemoveAction = require("./remove");
const createChangeAction = require("./change");

const createViewAction = () => {
  //   inquirer.prompt(title).then(({ title }) => {
  const rest = [
    {
      type: "list",
      name: "todo",
      message: `Which One You want to View ?`,
      choices: load().map(l => l.title)
    }
  ];
  inquirer
    .prompt(rest)
    .then(({ todo }) => {
      loadSingle(todo).then(data => {
        console.log(`
        \n ${chalk.magenta("Title :")} ${chalk.blueBright(data.title)}
        \t\n ${chalk.magenta("Description :")} ${chalk.blueBright(
          data.description
        )}
        \t\n ${chalk.magenta("Status :")} ${chalk.blueBright(
          data.status ? "Complete" : "InComplete"
        )}
        `);
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

module.exports = createViewAction;
