# Creating Custom Crypto Tokens

This project implements a BEP20 Token creation smart contract on Binance Smart Chain. 
We can set name of the token, symbol of the token, total supply in Token.sol smart contract. We deploy this token to Binance Smart chain using deploy_bsc.js script.

This project is built using Hardhat, Solidity and OpenZeppelin library.

To run this smart contract you will require the following to be configured.

 - Create .env file and add the following keys which are utilised in hardhat config JS file
  ```shell
  BINANCE_TEST_API_KEY=<Provide the testnet API key here>
  PRIVATE_KEY_BNB=<Provide private key from your wallet address for owner of the smart contract>
  ```
  
  - Run npm install to install dependencies listd in package.json file
  
More smart contracts to demonstrate creating ERC20 compatible/alternate tokens on different blockchains will be added to this project over time. Please keep a watch on this repo.

 ##### Details of Developer/Team:
  - <a href="https://github.com/khaliduddin">khalid</a>
