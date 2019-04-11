const fs = require("fs");
const chalk = require("chalk");

const add = (title, status, description) => {
  const todos = load();

  const duplicate = todos.find(todo => todo.title === title);

  if (!duplicate) {
    todos.push({
      title,
      description,
      status
    });
    save(todos);
    console.log(chalk.greenBright(`---> New Todo is Added`));
  } else {
    console.log(
      chalk.redBright(
        `---> ${chalk.yellow(title)} Already Exist Please Select with New One`
      )
    );
  }
};

const changeStatus = (title, status) => {
  const todos = load().map(l => (title === l.title ? { ...l, status } : l));
  save(todos);
  console.log(
    chalk.blueBright(
      `---> ${chalk.yellow(title)} Status Change  to ${
        status ? "Complete" : "InComplete"
      } `
    )
  );
};

const remove = title => {
  const todos = load().filter(todo => todo.title !== title);
  save(todos);
  console.log(
    chalk.redBright(`---> ${chalk.yellow(title)} Successfully Deleted`)
  );
};

const save = todos => {
  fs.writeFileSync("todos.json", JSON.stringify(todos));
};

const load = () => {
  try {
    const dataBuffer = fs.readFileSync("todos.json");
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    return data;
  } catch (error) {
    return [];
  }
};

const loadSingle = title => {
  return new Promise((res, rej) => {
    try {
      const dataBuffer = fs.readFileSync("todos.json");
      const dataJSON = dataBuffer.toString();
      const data = JSON.parse(dataJSON);
      const temp = data.find(todo => todo.title === title);
      res(temp);
    } catch (error) {
      rej({});
    }
  });
};

module.exports = {
  add,
  load,
  loadSingle,
  remove,
  changeStatus
};
