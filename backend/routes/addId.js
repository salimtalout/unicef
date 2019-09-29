var express = require('express');
const ethers = require('ethers');
const ipfsClient = require("ipfs-http-client");
var sendTransaction = require('./connectionEthereum');
const uuidv4 = require("uuid/v4");
var router = express.Router();
const ipfs = ipfsClient("localhost", "5001", { protocol: "http" });
const address = '0x1223dE063742092E56Bd6FcE0683585B66c9005B'

router.post('/', async function (req, res, next) {
  var uuid_number = uuidv4().slice(15);
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
  var uuid_juge = ethers.utils.formatBytes32String("0xabcd");

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
  const hash1 = hash.substring(0, 31);
  const hash2 = hash.substring(31);
  const date = Date.now();
  console.log(date)
  console.log(hash)
  tx_hash = await sendTransaction(uuid_juge, ethers.utils.formatBytes32String(uuid_number), ethers.utils.formatBytes32String(hash1), ethers.utils.formatBytes32String(hash2), address, date, ethers.utils.formatBytes32String(lieuNaissance), ethers.utils.formatBytes32String(uuid_number), ethers.utils.formatBytes32String(uuid_number));
  console.log(tx_hash)
  res.send()
});

module.exports = router;
