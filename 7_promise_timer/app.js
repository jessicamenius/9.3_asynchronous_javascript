const messageWithTimer = (time, message) => {
  return new Promise((resolve, reject) =>
    typeof time === "number" && typeof message === "string"
      ? setTimeout(() => resolve(message), time * 1000)
      : reject("First argument must be a number. Second should be a string.")
  );
};

// messageWithTimer(2, "Hello everyone!")
//   .then((res) => {
//     console.log(res);
//     return messageWithTimer("2", "Hello Nugget");
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log({ error: err }));

// const asyncFunc = async () => {
//   try {
//     const message = await messageWithTimer("2", "Hello Said");
//     console.log(message);
//   } catch (err) {
//     console.log({ error: err });
//   }
// };

// asyncFunc();

(async () => {
  try {
    const message = await messageWithTimer(2, "Hello Said");
    console.log(message);
  } catch (err) {
    console.log({ error: err });
  }
})();

// try {
//   const message = await messageWithTimer(2, "Hello Said");
//   console.log(message);
// } catch (err) {
//   console.log({ error: err });
// };
