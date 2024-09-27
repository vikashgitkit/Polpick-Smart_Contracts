const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const PolPickModule = buildModule("PolPickModule", (m) => {

  const ownerAddress = m.getParameter("ownerAddress", "0x3032Ca9eC138b6f1E34C2B550Dee5C7CbAC2c1D1");
  const polpick = m.contract("NewPolpick", [ownerAddress]);

  return { polpick };
});

module.exports = PolPickModule;