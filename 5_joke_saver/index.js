const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

const config = { headers: { accept: "application/json" } };

axios
  .get("https://icanhazdadjoke.com/", config)
  .then(function (res) {
    return appendFileAsync("jokes.txt", res.data.joke + "\n");
  })
  .then(function () {
    return readFileAsync("jokes.txt", "utf8");
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });

// chained promises

axios
  .get("https://icanhazdadjoke.com/", config)
  .then((res) => appendFileAsync("jokes.txt", res.data.joke + "\n"))
  .then(() => readFileAsync("jokes.txt", "utf8"))
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
