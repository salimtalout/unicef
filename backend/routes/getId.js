var express = require('express');
var sendTransaction = require('./connectionEthereumGet');
const ipfsClient = require("ipfs-http-client");
const ethers = require('ethers');
const ipfs = ipfsClient("localhost", "5001", { protocol: "http" });
var router = express.Router();

router.post('/', async function (req, res, next) {
  var uuid = req.body.id;
  hash = await sendTransaction(ethers.utils.formatBytes32String(uuid));
  ipfs.get(hash, function (err, files) {
    files.forEach(file => {
      res.send(file.content.toString("utf8"));
    });
  });
  await ipfs.pin.add(hash);
});

module.exports = router;
