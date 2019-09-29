var ethers = require('ethers');
const contractInfo = require('./contract.json');
let api_key = "3893ff5e79ec4ef2b64c7f93af4c22dc";
const privateKey = "984A4EA03686099AD29FDF77FE6E4932D2B178BB0CFCF30CFBB770D4B996D5E2";
const publicKey = "0x1223dE063742092E56Bd6FcE0683585B66c9005B";
let provider = new ethers.providers.InfuraProvider('kovan', api_key);
let wallet = new ethers.Wallet(privateKey, provider);
const abi = contractInfo.abi;
const address = contractInfo.address;
var contract = new ethers.Contract(address, abi, provider);
var contractSigner = contract.connect(wallet)

async function sendTransaction(id_juge, id, HashStructure,HashStructure2, NewIdentity, BirthDate, PlaceOfBirth, HashUuidParents, HashBirthCertificate) {
  let tx = await contractSigner.newIdentity(id_juge, id, HashStructure,HashStructure2, NewIdentity, BirthDate, PlaceOfBirth, HashUuidParents, HashBirthCertificate)
  await provider.waitForTransaction(tx.hash);
  return tx.hash;
}

module.exports = sendTransaction;
