var inquirer = require("inquirer");
const chalk = require("chalk");
const clear = require("clear");

const welcomeCommand = require("./welcome");
const todo = require("../action/todo");

const createRemoveAction = require("./remove");
const createViewAction = require("./view");
const createChangeAction = require("./change");

const title = [
  {
    type: "input",
    name: "title",
    message: "Title For Your Todo ?",
    validate: function(value) {
      return String(value).length > 0 ? true : "Please Enter Valid";
    },
    filter: String
  }
];

const createAddAction = () => {
  inquirer.prompt(title).then(({ title }) => {
    const rest = [
      {
        type: "input",
        name: "description",
        message: `Description For Your "${chalk.green(title)}" ?`,
        validate: function(value) {
          return String(value).length > 0 ? true : "Please Enter Valid";
        },
        filter: String
      },
      {
        type: "list",
        name: "status",
        message: `"${chalk.green(title)}" Status ?`,
        choices: ["InComplete", "Complete"]
      }
    ];
    inquirer
      .prompt(rest)
      .then(({ description, status: tempStatus }) => {
        let status = tempStatus === "InComplete" ? false : true;
        todo.add(title, status, description);

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
      })
      .catch(err => console.log(err));
  });
};

module.exports = {
  createAddAction
};
