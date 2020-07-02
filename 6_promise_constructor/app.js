const sayMessage = (name) => {
  // return "Hello" + name
  return new Promise((resolve, reject) => {
    if (typeof name === "string") {
      resolve("Hello " + name);
    } else {
      reject("Argument must be a string");
    }
  });
};

// console.log("First way of resolving a promise");

// sayMessage("class")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// sayMessage(7)
//   .then((res) => console.log(res))
//   .catch((err) => console.log({ error: err }));

// sayMessage("Class")
//   .then((res) => {
//     console.log(res);
//     return sayMessage("Jessica");
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log({ error: err }));

console.log("Second way of resolving a promise");

const message = sayMessage();
