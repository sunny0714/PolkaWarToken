const PolkaWarToken = artifacts.require("PolkaWarToken");

module.exports = async function (deployer) {
  await deployer.deploy(PolkaWarToken, 10000);
};
