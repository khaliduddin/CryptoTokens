const { ethers } = require("hardhat");

async function main() {

    const BscToken = await ethers.getContractFactory("Token");

    const bscToken = await BscToken.deploy();

    await bscToken.deployed();

    console.log("New BSC Token deployed to:", bscToken.address);
}

main();