const { ethers } = require("hardhat");

async function main() {
    const contractAddress = "0xCABEe62adFB2a4d4172Fc2F7536f324FC52C274a";
    const HelloWorld = await ethers.getContractFactory("HelloWorld");

    const hello = HelloWorld.attach(contractAddress);
    console.log("Current message:", await hello.message());

    const tx = await hello.setMessage("New Hello!");
    await tx.wait();

    console.log("Updated message:", await hello.message());
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
