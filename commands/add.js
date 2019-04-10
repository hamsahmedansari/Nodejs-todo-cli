var inquirer = require("inquirer");
const chalk = require("chalk");

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
        message: `Description For Your ${chalk.green(title)} ?`,
        validate: function(value) {
          return String(value).length > 0 ? true : "Please Enter Valid";
        },
        filter: String
      },
      {
        type: "list",
        name: "status",
        message: `${chalk.green(title)} Status ?`,
        choices: ["InComplete", "Complete"]
      }
    ];
    inquirer.prompt(rest).then(({ description, status }) => {});
  });
};

module.exports = {
  createAddAction
};
