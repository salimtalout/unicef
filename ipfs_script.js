const fs = require("fs");

const ipfsClient = require("ipfs-http-client");

// connect to ipfs daemon API server
const ipfs = ipfsClient("localhost", "5001", { protocol: "http" }); // leaving out the arguments will default to these values

const data = {
  lol: 333
};

const content = JSON.stringify(data);

//const content = ipfsClient.Buffer.from("ABC");
//const content = fs.readFileSync("test.txt", "utf8");
//const content = fs.readdirSync("folder_test");

(async function() {
  //const results = await ipfs.add("lol")
  //  const results = await ipfs.add(content);
  const results = await ipfs.addFromFs("test.txt"); //, { recursive: true });
  const hash = results[0].hash; // "Qm...WW"
  console.log(hash);

  files = await ipfs.get(hash);
  await ipfs.pin.add(hash);
  console.log("all files are");
  console.log(files);

  // ipfs.get(hash, function(err, files) {
  //   ipfs.pin.add(hash); // to save it on my computer
  //   files.forEach(file => {
  //     console.log(file);
  //     console.log(file.content.toString("utf8"));
  //   });
  // });
})();
