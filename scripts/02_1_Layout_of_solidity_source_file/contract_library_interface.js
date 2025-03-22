// npx hardhat run scripts/02_1_Layout_of_solidity_source_file/contract_library_interface.js --network localhost
const { ethers } = require('hardhat');


const main = async () => {
  const [user] = await ethers.getSigners();

  const contractAddress = '0xdc64a140aa3e981100a9beca4e685f962f0cf6c9'; // ← Replace this!

  // Get the contract instance
  const myGreeter = await ethers.getContractAt('MyGreeter', contractAddress, user);

  // Call greet()
  const greeting = await myGreeter.greet();
  console.log('Greet says:', greeting);

  // Call increaseCounter(10)
  const tx = await myGreeter.increaseCounter(10);
  await tx.wait();

  // Read counter value
  const counter = await myGreeter.counter();
  console.log('Counter is now:', counter.toString());
};


main().catch((error) => {
  console.error(error);
  process.exit(1);
});
