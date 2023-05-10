function stretch() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("done stretching");
    }, 1000);
  });
}

function runOnTreadmill() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("done running on treadmill");
    }, 500);
  });
}

function liftWeights() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("done lifting weights");
    }, 2000);
  });
}

function workout() {
  // Your code here
  stretch()
    .then(() =>{
      // some code here
       runOnTreadmill()
    })
    .then(() => liftWeights())
    .then(() => console.log("done working out"));
}

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout();
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
