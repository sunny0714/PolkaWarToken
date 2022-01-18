const PolkaWarToken = artifacts.require("PolkaWarToken");

module.exports = function (deployer) {
  deployer.deploy(PolkaWarToken);
};
