const { readFile, writeFile } = require("fs");
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
        console.log(result);
      }
    );
  });
});
