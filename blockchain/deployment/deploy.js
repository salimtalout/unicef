const etherlime = require('etherlime-lib');
const LimeFactory = require('../build/ERC721Token.json');


//const deploy = async (network, secret, etherscanApiKey) => {

//	const deployer = new etherlime.EtherlimeGanacheDeployer();

    const deploy = async (network, secret, etherscanApiKey) => {

		var secret ="9b744130ff9a189a69273e0858b83775f77b13eb8b6064b5b43c4bcb06d6bdd8";
		var network ="kovan";
		var etherscanApiKey ="9XSY3Z7PGM4GW9EUFZE57TPFGD8N1RX97A";
		
		const deployer = new etherlime.InfuraPrivateKeyDeployer(secret, network,
            "f9eb270adf83401b932e90df3a1fac68");
//        deployer.defaultOverrides = { etherscanApiKey };
			deployer.setVerifierApiKey(etherscanApiKey);
        // Add params separated with ,
        const result = await deployer.deployAndVerify(LimeFactory, {});
    };
	// const result = await deployer.deploy(LimeFactory);

//};

module.exports = {
	deploy
};