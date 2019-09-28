var express = require('express');
var router = express.Router();
const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient("localhost", "5001", { protocol: "http" });
var sendTransaction = require('./ethereumConnection');

router.post('/', async function (req, res, next) {
  const content = {
    uuid: req.body.uuid,
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
  await sendTransaction(req.body.uuid, hash);
});

module.exports = router;
