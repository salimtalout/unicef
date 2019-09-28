var ethers = require('ethers');
let api_key = "3893ff5e79ec4ef2b64c7f93af4c22dc";
const privateKey = "984A4EA03686099AD29FDF77FE6E4932D2B178BB0CFCF30CFBB770D4B996D5E2";
const publicKey = "0x1223dE063742092E56Bd6FcE0683585B66c9005B";
let provider = new ethers.providers.InfuraProvider('kovan', api_key);
let wallet = new ethers.Wallet(privateKey, provider);

async function sendTransaction(value) {
  let tx = {
    gasLimit: 5000000,
    gasPrice: ethers.utils.parseUnits('1.0', 'gwei'),
    to: publicKey,
    data: "0x" + value,
  }
  let tx_hash = await wallet.sendTransaction(tx);
  await provider.waitForTransaction(tx_hash.hash);
  return tx_hash.hash;
}

module.exports = sendTransaction;
