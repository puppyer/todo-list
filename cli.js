const { program } = require("commander");
const api = require("./api.js");

program
  .option("-t, --todo", "todo")
  .option("-l, --list", "list")
  .version("0.0.1", "-v, --version");

program
  .command("add <taskName> [others...]")
  .description("add tasks")
  .action((task, others) => {
    // 可同时添加多个任务
    let tasks = [];
    if (others.length) {
      others.map(item => {
        tasks.push(item);
      });
    }
    tasks.unshift(task);
    api.add(tasks);
  });

program
  .command("clear")
  .description("clear all task")
  .action(() => {
    api.clear();
  });

program
  .command("show")
  .description("show all task")
  .action(() => {
    api.showAll();
  });
program.parse(process.argv);
