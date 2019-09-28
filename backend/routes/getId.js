var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {ipfs.get(hash, function (err, files) {
  // recuperer le hash depuis le smart contract grace à req.body.uuid
  ipfs.get(hash, function (err, files) {
    files.forEach(file => {
      console.log(file);
      console.log(file.content.toString("utf8"));
    });
  });
});

module.exports = router;
