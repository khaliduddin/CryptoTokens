//require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.2",
  defaultNetwork: "bsctest",
  networks: {
    bsctest: {
      url: process.env.BINANCE_TEST_API_KEY,
      gas: 2100000,
      gasPrice: 20000000000,
      accounts: [ process.env.PRIVATE_KEY_BNB ],
    }
  },
};
