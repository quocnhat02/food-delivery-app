const nemo = ["nemo"];

const everyone = [
  "sara",
  "ken",
  "shay",
  "dou",
  "nana",
  "ken",
  "nemo",
  "su",
  "leo",
];

const large = new Array(100).fill("nemo");

function findNemo(array) {
  let t0 = performance.now();
  let t1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      t1 = performance.now();
      console.log("Found Nemo");
      break;
    }
  }
  console.log("Call to find Nemo took " + (t1 - t0) + " ms");
}

findNemo(nemo);
