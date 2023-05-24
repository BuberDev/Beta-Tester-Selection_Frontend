require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();



const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COIN_MARKETCAP = process.env.COIN_MARKETCAP



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.18',
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
    sepolia:{
      url:"https://rpc.sepolia.org/",
      accounts: [PRIVATE_KEY],
      chainId:11155111

    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: 'gasReporter.txt',
    noColors: true,
    currency: 'USD',
    coinmarketcap: COIN_MARKETCAP,
  },
};
