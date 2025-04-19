require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
    solidity: {
        version: "0.8.28",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    paths: {
        sources: './contracts/examples',
        tests: './test/examples',
        cache: './cache/examples',
        artifacts: './artifacts/examples'
    },
    networks: {
        hardhat: {},
        // sepolia: {
        //     url: process.env.SEPOLIA_RPC_URL,
        //     accounts: [process.env.PRIVATE_KEY]
        // }
    },
    // etherscan: {
    //     apiKey: process.env.ETHERSCAN_API_KEY
    // }
};