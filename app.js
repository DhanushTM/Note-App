const notes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");
//const fs = require("fs");
//fs.writeFileSync("notes.txt", "This file was created by Node.js");
//fs.appendFileSync("notes.txt", "\n My name is Dhanush");
//const add = require("./utils");
//const name = "Dhanush";

//const sum = add(4, 2);

//console.log(sum);

//const text = require("./notes.js");

//const someText = text();
//console.log(someText);

//const validator = require("validator");
//console.log(validator.isEmail("someone@example.com"));
//console.log(validator.isEmail("example.com"));
//console.log(validator.isURL("https://mead.io"));
/*
const chalk = require("chalk");
console.log(chalk.red("Success!"));
console.log(chalk.black.bgGreen("Success!"));
console.log(chalk.red.bold("Error!"));
console.log(process.argv);
console.log(process.argv[2]);
*/

//const command = process.argv[2];
//console.log(process.argv);
/*

if (command === "add") {
  console.log("Adding Note!");
} else if (command === "remove") {
  console.log("Removing Note!");
}
*/
//customize yargs version
yargs.version("1.1.0");

// add,remove,read,list
//create add command
yargs.command({
  command: "add",
  describe: "Add a new note!",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    //refactoring
    //handler: function (argv) {
    //console.log("Title: " + argv.title);
    //console.log("Body: " + argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    //refactoring
    //handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

//create read command
yargs.command({
  command: "read",
  describe: "Read the note!",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // refactoring
    //handler: function () {
    //console.log("Reading the Note!");
    notes.readNote(argv.title);
  },
});

//create list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler() {
    //refactoring
    //handler: function () {
    //console.log("Listing out all notes!");
    notes.listNotes();
  },
});

//console.log(yargs.argv);
yargs.parse();
