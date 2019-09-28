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
    nom: req.body.nom,
    prenom: req.body.prenom,
    dateNaissance: req.body.dateNaissance,
    lieuNaissance: req.body.lieuNaissance,
    acteNaissance: req.body.acteNaissance,
    fingerprint: res.body.fingerprint,
    signatureOracle: res.body.signatureOracle,
    commentaire: res.body.commentaire,
    couleurYeux: res.body.couleurYeux,
    sexe: req.body.sexe,
    parent1: req.body.parent1,
    parent2: req.body.parent2,
    enfants: req.body.enfants,
    autres: req.body.autres,
    photo: req.body.photo
  };
  const results = await ipfs.add(JSON.stringify(content));
  const hash = results[0].hash;
  await sendTransaction(uuid_number, hash);
});

module.exports = router;
