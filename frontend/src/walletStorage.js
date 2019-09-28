const ethers = require("ethers");

function sign_data(data) {
  let my_wallet = null;

  if (localStorage.getItem("wallet") === null) {
    my_wallet = ethers.Wallet.createRandom();
    localStorage.setItem("wallet", JSON.stringify(my_wallet));
  } else {
    my_wallet = JSON.parse(localStorage.getItem("wallet")).signingKey;
  }

  (async function() {
    let signature = await my_wallet.signMessage(data);
    return signature;
  })();
}

module.exports = {
  sign_data: sign_data
};
