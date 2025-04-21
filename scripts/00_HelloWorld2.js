// scripts/readHelloWorld.js
const hre = require("hardhat");

async function main() {
    // npx hardhat ignition deployments
    // npx hardhat ignition status chain-31337
    const contractAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

    // Get the contract factory for HelloWorld
    const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");

    // Attach to the deployed contract using its address
    const helloWorldContract = await HelloWorld.attach(contractAddress);
    console.log("Successfully attached to HelloWorld contract at:", helloWorldContract.address);

    console.log(helloWorldContract);

    // Call the 'message' public variable to read its value
    const currentMessage = await helloWorldContract.message.staticCall();
    console.log("Current message:", currentMessage);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});