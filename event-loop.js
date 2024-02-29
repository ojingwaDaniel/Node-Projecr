const { log } = require("console");
const { readFile } = require("fs");
console.log("Starting First task");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("Finishing the first file");
});
console.log("Starting Second Tas");
console.log("Starting Third Task");
