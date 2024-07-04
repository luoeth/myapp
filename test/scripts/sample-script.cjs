const hre = require("hardhat");

async function main() {
  
  const [deployer] = await hre.ethers.getSigners();
  const FiredGuys = await hre.ethers.getContractFactory("MyToken");
  const firedGuys = await FiredGuys.deploy(deployer.address);

  console.log("My NFT deployed to:", firedGuys.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
