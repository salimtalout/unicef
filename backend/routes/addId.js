var express = require('express');
const fs = require("fs");
const ipfsClient = require("ipfs-http-client");
var router = express.Router();
const ipfs = ipfsClient("localhost", "5001", { protocol: "http" });

router.post('/', async function (req, res, next) {
  const content = fs.readFileSync("test.txt", "utf8");
  const results = await ipfs.add(content);
  const hash = results[0].hash;
});

module.exports = router;
