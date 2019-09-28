const fs = require('fs');

const ipfsClient = require("ipfs-http-client");

// connect to ipfs daemon API server
const ipfs = ipfsClient("localhost", "5001", { protocol: "http" }); // leaving out the arguments will default to these values

//const content = ipfsClient.Buffer.from("ABC");
const content = fs.readFileSync("test.txt", 'utf8');
(async function() {

  //const results = await ipfs.add("lol")
  const results = await ipfs.add(content);
  const hash = results[0].hash; // "Qm...WW"
  console.log(hash);
})();
