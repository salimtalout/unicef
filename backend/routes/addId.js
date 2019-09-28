var express = require('express');
var router = express.Router();
const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient("localhost", "5001", { protocol: "http" });
var sendTransaction = require('./connectionEthereum');
const uuidv4 = require("uuid/v4");

router.post('/', async function (req, res, next) {
  var uuid_number = uuidv4();
  const content = {
    uuid: uuid_number,
    // nom: req.body.textFields.nom,
    // prenom: req.body.textFields.prenom,
    // sexe: req.body.textFields.sexe,
    // dateNaissance: req.body.textFields.dateNaissance,
    // lieuNaissance: req.body.textFields.lieuNaissance,
    // couleurYeux: res.body.textFields.couleurYeux,
    // parent1: req.body.textFields.parent1,
    // parent2: req.body.textFields.parent2,
    // enfants: req.body.textFields.enfants,
    // signatureOracle: res.body.textFields.signatureOracle,
    // commentaire: res.body.textFields.commentaire,
    // acteNaissance: req.body.files.acteNaissance,
    // photo: req.body.files.photo
    // fingerprint: res.body.files.fingerprint,
    // autres: req.body.files.autres,
  };
  console.log(content)
  const results = await ipfs.add(JSON.stringify(content));
  const hash = results[0].hash;
  console.log(hash)
  // sendTransaction(uuid_number, hash);
  res.send()
});

module.exports = router;
