const fs = require("fs");
const util = require("util");

// fs.writeFile("test.txt", "this is a test", function (err) {
//   if (err) throw err;
//   console.log("success");
// });

const writeFileAysnc = util.promisify(fs.writeFile);

writeFileAysnc("test2.txt", "This is a promise now")
  .then(() => console.log("success"))
  .catch((err) => console.log(err));
