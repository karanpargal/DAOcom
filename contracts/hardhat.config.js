require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    _5ire: {
      url: "https://rpc-testnet.5ire.network",
      accounts: [process.env.PRIVATE_KEY],
    },
    avalancheTest: {
      url: "https://app.zeeve.io/shared-api/avax/2c694b1343a737e0a1a5c90a7b0a0482d6e9a2e959d5286b/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [process.env.PRIVATE_KEY],
    },
    mumbai: {
      url: "https://app.zeeve.io/shared-api/poly/edde460abeaeb9369b8cd6d073d7dce4c27ac38213933ae4/",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
