const { readFileSync, writeFileSync } = require("fs");
console.log('start')
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first);
console.log(second);

// writeSync
writeFileSync(
  "./content/result-sync.txt",
  `hello here is the result of your sync : ${first} and ${second}`,
  { flag: "a" }
);
console.log("Done with task alocated to me");
console.log("starting the next task");
