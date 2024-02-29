require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/1AjzvlYqlX07g2GcqcigGmRcuDDtr_0v',
      accounts: ['63c3d1747b9cb1c9354f1619aa4f7e7ab073347ff3759d10fc1181d2ab9ced1d'],
    },
  },
};