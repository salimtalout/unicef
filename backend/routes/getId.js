var express = require('express');
var sendTransaction = require('./connectionEthereumGet');
const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient("localhost", "5001", { protocol: "http" });
var router = express.Router();

router.post('/', async function (req, res, next) {
  hash = await sendTransaction(uuid);
  ipfs.get(hash, function (err, files) {
    files.forEach(file => {
      console.log(file);
      console.log(file.content.toString("utf8"));
      res.send(file);
    });
  });
  await ipfs.pin.add(hash);
});

module.exports = router;
