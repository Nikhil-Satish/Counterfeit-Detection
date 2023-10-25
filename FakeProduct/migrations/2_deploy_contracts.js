const DetectFake = artifacts.require("DetectFake");
module.exports = function (deployer) {
  deployer.deploy(DetectFake);
};