const hre = require("hardhat");

async function main() {
  const CrossChainTalk = await hre.ethers.getContractFactory("CrossChainTalk");
  const CrossChainTalkContract = await CrossChainTalk.deploy("0x48F31b40050BAE47D62e70e904f143d89B1c2746","500000","router1z6ralzg5tsznq9s6xmutyeen7evylcj7harhmq");

  await CrossChainTalkContract.deployed();

  console.log(`Deployed at address: ${CrossChainTalkContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
