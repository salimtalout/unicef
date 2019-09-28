var express = require('express');
var router = express.Router();
const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient("localhost", "5001", { protocol: "http" });
var sendTransaction = require('./connectionEthereum');
const uuidv4 = require("uuid/v4");

router.post('/', async function (req, res, next) {
  var uuid_number = uuidv4();
  console.log(uuid_number)
  var nom = req.body.textFields.nom;
  var prenom = req.body.textFields.prenom;
  var sexe = req.body.textFields.sexe;
  var dateNaissance = req.body.textFields.dateNaissance;
  var lieuNaissance = req.body.textFields.lieuNaissance;
  var couleurYeux = req.body.textFields.couleurYeux;
  var parent1 = req.body.textFields.parent1;
  var parent2 = req.body.textFields.parent2;
  var enfants = req.body.textFields.enfants;
  var signatureOracle = req.body.textFields.signatureOracle;
  var commentaire = req.body.textFields.commentaire;
  var acteNaissance = req.body.files.acteNaissance;
  var photo = req.body.files.photo;
  var fingerprint = req.body.files.fingerprint;
  var autres = req.body.files.autres;

  const content = {
    uuid: uuid_number,
    nom: nom,
    prenom: prenom,
    sexe: sexe,
    dateNaissance: dateNaissance,
    lieuNaissance: lieuNaissance,
    couleurYeux: couleurYeux,
    parent1: parent1,
    parent2: parent2,
    enfants: enfants,
    signatureOracle: signatureOracle,
    commentaire: commentaire,
    acteNaissance: acteNaissance,
    photo: photo,
    fingerprint: fingerprint,
    autres: autres
  };
  const results = await ipfs.add(JSON.stringify(content));
  const hash = results[0].hash;
  console.log(hash)
  // sendTransaction(uuid_number, hash);
  res.send()
});

module.exports = router;
