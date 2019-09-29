var ethers = require('ethers');
const contractInfo = require('./contract.json');
let api_key = "3893ff5e79ec4ef2b64c7f93af4c22dc";
let provider = new ethers.providers.InfuraProvider('kovan', api_key);
const abi = contractInfo.abi;
const address = contractInfo.address;
var contract = new ethers.Contract(address, abi, provider);

async function sendTransaction(uuid) {
  let hash1 = contract.showHashStructure1(uuid)
  let hash2 = contract.showHashStructure2(uuid)
  return hash1+hash2;
}

module.exports = sendTransaction;
