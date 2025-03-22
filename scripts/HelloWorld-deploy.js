const { ethers } = require("hardhat");

async function main() {
    // Get the first signer (deployer)
    const [deployer] = await ethers.getSigners();

    // Get deployer's initial balance
    let balanceBefore = await ethers.provider.getBalance(deployer.address);
    console.log("Deployer address:", deployer.address);
    console.log("Balance before deployment:", ethers.formatEther(balanceBefore), "ETH");

    // Get the contract factory
    const HelloWorld = await ethers.getContractFactory("HelloWorld", deployer);

    // Deploy the contract with a constructor argument
    const hello = await HelloWorld.deploy("Hello, Hardhat!");

    // Wait for deployment to complete
    const txReceipt = await hello.waitForDeployment();

    // Get contract address
    const contractAddress = await hello.getAddress();
    console.log("Contract deployed at:", contractAddress);

    // Get deployer's balance after deployment
    let balanceAfter = await ethers.provider.getBalance(deployer.address);
    console.log("Balance after deployment:", ethers.formatEther(balanceAfter), "ETH");

    // Calculate gas used
    const gasUsed = balanceBefore - balanceAfter;
    console.log("Gas used for deployment:", ethers.formatEther(gasUsed), "ETH");
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
