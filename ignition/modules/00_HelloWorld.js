// ignition/modules/HelloWorld.js
const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('HelloWorldModule', (m) => {
    // Get parameter or use default
    const initialMessage = m.getParameter('initialMessage', 'Hello from Hardhat Ignition Module!');

    // Deploy the contract
    const helloWorld = m.contract('HelloWorld', [initialMessage]);

    // Return the deployed contract for other modules to use
    return { helloWorld };
});