const BigNumber = require('bignumber.js');

const PolkaWarToken = artifacts.require("PolkaWarToken");

module.exports = async function (deployer) {
  await deployer.deploy(PolkaWarToken, new BigNumber(100000000000000000000000000));
};
