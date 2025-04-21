// scripts/readHelloWorld.js
const hre = require("hardhat");

async function main() {
    const contractAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

    // 1. Get the contract instance with ABI
    const helloWorldContract = await hre.ethers.getContractAt(
        "HelloWorld",
        contractAddress
    );

    console.log("Successfully attached to HelloWorld contract at:", helloWorldContract.target);

    // 2. Read the message (using .callStatic for view functions)
    try {
        const currentMessage = await helloWorldContract.message.staticCall();
        console.log("Current message:", currentMessage);
    } catch (error) {
        console.error("Error reading message:", error);

        // Additional debug info
        const code = await hre.ethers.provider.getCode(contractAddress);
        console.log("Contract code at address:", code);
        throw error;
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});