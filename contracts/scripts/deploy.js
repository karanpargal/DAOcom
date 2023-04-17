const hre = require("hardhat");

async function main() {
  const Salary = await hre.ethers.getContractFactory("Salary");
  const SalaryContract = await Salary.deploy();

  await SalaryContract.deployed();

  console.log(`Deployed at address: ${SalaryContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
