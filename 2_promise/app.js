const axios = require("axios");

axios
  .get("https://www.ombdapi.com/?t=the%20Matrix&apikey=trilogy")
  .then((res) => {
    const { data } = res;
    console.log(data);
    return axios.get("https://www.ombdapi.com/?t=the%20Matrix&apikey=trilogy");
  })
  .then((res) => {
    console.log("THIS IS NEW", res.data);
  })
  .catch((err) => console.log(err));
