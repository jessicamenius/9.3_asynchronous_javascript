// original code

function waitFor(seconds, cb) {
  if (isNaN(seconds) || seconds < 1) {
    return cb(Error("Parameter 'seconds' must be a positive number!"));
  }

  setTimeout(function () {
    cb(null, "Success!");
  }, seconds * 1000);
}

waitFor(2, function (err, msg) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(msg);
});

// refactored code

function waitFor(seconds) { 
  return new Promise(function (resolve, reject) {
   if(isNaN(seconds) || seconds < 1 ) {
     resolve("Success!")
     reject({Error: "Parameter 'seconds' must be a positive number!"})
   }
     
  //   waitFor(2)
  //   .then(function (msg) {
  //     console.log(msg);
  //     return waitFor(1);
  //   })
  //   .then(function(msg){
  //     console.log(msg)
  //   })
  // });

const getWait = async (num) => {
  try {
    const message = await waitFor(num);
    console.log(messasge); 1`
} catch  (err){
  console.log(err); 
}

getWait(2);