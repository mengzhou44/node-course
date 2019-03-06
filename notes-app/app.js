const chalk = require("chalk");
const yargs = require("yargs");

console.log(chalk.green("success!"));

yargs.command({
  command: "add",
  describe: "add command",
  handler: () => {
    console.log("executed add command");
  }
});

yargs.command({
  command: "list",
  describe: "list command",
  handler: () => {
    debugger;
    console.log("executed list command");
  }
});

yargs.command({
  command: "read",
  describe: "read command",
  handler: () => {
    console.log("executed redd command");
  }
});

console.log(yargs.argv);
