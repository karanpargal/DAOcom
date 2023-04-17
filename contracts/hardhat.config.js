require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    _5ire: {
      url: "https://rpc-testnet.5ire.network",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
