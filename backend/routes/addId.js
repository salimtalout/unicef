var express = require('express');
var router = express.Router();
// const ipfsClient = require("ipfs-http-client");
// const ipfs = ipfsClient("localhost", "5001", { protocol: "http" });
// var sendTransaction = require('./connectionEthereum');
const uuidv4 = require("uuid/v4");

router.post('/', function (req, res, next) {
  var uuid_number = uuidv4();
  console.log(uuid_number)
  // console.log(req.body)
  // const content = {
  //   uuid: uuid_number,
  //   nom: req.body.textFields.nom,
  //   prenom: req.body.textFields.prenom,
  //   dateNaissance: req.body.textFields.dateNaissance,
  //   lieuNaissance: req.body.textFields.lieuNaissance,
  //   // acteNaissance: req.body.files.acteNaissance,
  //   fingerprint: res.body.textFields.fingerprint,
  //   // signatureOracle: res.body.files.signatureOracle,
  //   commentaire: res.body.textFields.commentaire,
  //   couleurYeux: res.body.textFields.couleurYeux,
  //   sexe: req.body.textFields.sexe,
  //   parent1: req.body.textFields.parent1,
  //   parent2: req.body.textFields.parent2,
  //   enfants: req.body.textFields.enfants,
  //   // autres: req.body.files.autres,
  //   // photo: req.body.files.photo
  // };
  // const results = ipfs.add(JSON.stringify(content));
  // const hash = results[0].hash;
  // console.log('hash is : '+ hash);
  // sendTransaction(uuid_number, hash);
});

module.exports = router;
