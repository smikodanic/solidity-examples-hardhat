# solidity-examples-hardhat
> Examples of Solidity smart contracts developed using the Hardhat framework.


## Install Hardhat
```bash
$ mkdir myProject && cd myProject
$ npm init
$ npm install --save-dev hardhat
```

## Start a project
```bash
$ npx hardhat
```

## Hardhat commands
```bash
$ npx hardhat clean     // delete artifacts folder and files from cache folder
$ npx hardhat compile   // compiles all changed .sol files in /contracts folder
$ npx hardhat node      // start the ETH server
$ npx hardhat run scripts/HelloWorld-deploy.js --network localhost     // deploy the contract
$ npx hardhat ignition deploy ignition/modules/Lock.js --network localhost
```

## Links
- [Solidity Docs](https://docs.soliditylang.org/en/v0.8.29/)
- [HardHat](https://hardhat.org/)
