const { ethers } = require('hardhat');

async function main() {
    // deployed contract address
    // npx hardhat ignition deployments
    // npx hardhat ignition status chain-31337
    const contractAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

    // ABI with only the `message` function
    const abi = [
        'function message() view returns (string)',
        'function setMessage(string _newMessage) public'
    ];

    // Connect to local Hardhat network
    const provider = new ethers.JsonRpcProvider('http://localhost:8545');

    // Create contract instance
    const helloWorld = new ethers.Contract(contractAddress, abi, provider);

    // Read and log message
    const currentMessage = await helloWorld.message();
    console.log('currentMessage:', currentMessage);

    await helloWorld.setMessage('Changed greeting');
    const changedMessage = await helloWorld.message();
    console.log('changedMessage:', changedMessage);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});