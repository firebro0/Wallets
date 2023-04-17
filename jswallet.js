import { ethers } from "ethers";

const numWallets = 100;
const wallets = [];

for (let i = 0; i < numWallets; i++) {
  const wallet = ethers.Wallet.createRandom();
  wallets.push(wallet);
}

for (let i = 0; i < wallets.length; i++) {
  console.log(`Address: ${wallets[i].address} | Private Key: ${wallets[i].privateKey}`);
}
