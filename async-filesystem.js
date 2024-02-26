const { readFile, writeFile } = require("fs");
console.log('start')
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/2nd-result-async.txt",
      `Hello guys this the ${first} and the ${second} file`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log("Done with the current Task ");
        
      }
    );
  });
});
console.log("starting a New one task ");

