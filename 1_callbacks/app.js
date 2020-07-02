// setTimeout(() => {
//   console.log("first message");
// }, 2000);

// setTimeout(() => {
//   console.log("second message");
// }, 2000);

// setTimeout(() => {
//   console.log("first message");
//   setTimeout(() => {
//     console.log("second message");
//   }, 2000);
// }, 2000);

setTimeout(() => {
  console.log("first message");
  setTimeout(() => {
    console.log("second message");
    setTimeout(() => {
      console.log("callback hell");
    }, 2000);
  }, 2000);
}, 2000);

function sayHello(name, cb) {
  cb("hello " + name);
}

sayHello("Danielle", (res) => {
  console.log(res);
  sayHello("Thomas", (res) => {
    console.log(res);
  });
});
