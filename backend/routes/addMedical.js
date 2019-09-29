var express = require('express');
const ipfsClient = require("ipfs-http-client");
const xhttp = require('xhttp');
var router = express.Router();
const ipfs = ipfsClient("localhost", "5001", { protocol: "http" });

router.post('/', async function (req, res, next) {
  var medical = req.body.files.medical;
  var id = req.body.textFields.id;
  var tailleNew = req.body.textFields.tailleNew;
  var poidsNew = req.body.textFields.poidsNew;
  var commentairesNew = req.body.textFields.commentairesNew;
  const content = {
    id: id,
    medical: medical,
    tailleNew: tailleNew,
    poidsNew: poidsNew,
    commentairesNew: commentairesNew
  }
  const results = await ipfs.add(JSON.stringify(content));
  const hash = results[0].hash
  xhttp.open("POST", "https://carnetsante-ceb7.restdb.io/rest/data",true);
  xhttp.setRequestHeader("content-type", "application/json");
  xhttp.setRequestHeader("x-apikey", "5d9090241ce70f637985512f");
  xhttp.send(JSON.stringify({ "uuid": id,"hashIpfs": hash}));
  res.send()
});

module.exports = router;