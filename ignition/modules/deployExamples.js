// $ npx hardhat ignition deploy ignition/modules/deployExamples.js --network localhost

const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');


module.exports = buildModule('ExamplesModule', (m) => {
    const future_Contract_library_interface = m.contract('MyGreeter', []);


    return { future_Contract_library_interface };
});