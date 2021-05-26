const fs = require("fs");

fs.writeFileSync(
  "createFile.out",
  process.argv.length >= 3 ? process.argv[2] : ""
);
