const hre = require('hardhat');
const ethers = hre.ethers;

async function sleep(ms){
  return new Promise((resolve)=>{
    setTimeout(()=> resolve(),ms)
  })
}

async function main() {
  const BetaTester = await ethers.getContractFactory('BetaTesting');
  const betaTester = await BetaTester.deploy(2117);

  await betaTester.deployed();

  console.log(`Contract deployed to address: ${betaTester.address}`);

  await sleep(45*1000);

  await hre.run("verify:verify", {
    address: betaTester.address,
    constructorArguments: [2117],
  })
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
