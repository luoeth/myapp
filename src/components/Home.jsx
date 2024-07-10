import React, { useEffect, useState } from 'react';
import WalletBalance from './WalletBalance';
import { ethers } from 'ethers';
import FiredGuys from '../artifacts/contracts/MyNFT.sol/FiredGuys.json';

function Home() {
//   const [totalMinted, setTotalMinted] = useState(0);
//   const [contract, setContract] = useState(null);

//   useEffect(() => {
//     async function setupBlockchain() {
//       // Wait for MetaMask to be injected
//       await window.ethereum.enable();

//       // Initialize provider and signer
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();

//       // Initialize contract instance
//       const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
//       const contractInstance = new ethers.Contract(contractAddress, FiredGuys.abi, signer);
//       setContract(contractInstance);

//       getCount(contractInstance);
//     }

//     if (window.ethereum) {
//       setupBlockchain();
//     }
//   }, []);

//   const getCount = async (contractInstance) => {
//     if (!contractInstance) return;
//     try {
//       const count = await contractInstance.count();
//       console.log(parseInt(count));
//       setTotalMinted(parseInt(count));
//     } catch (error) {
//       console.error('Error fetching count:', error);
//     }
//   };

  return (
    <div>
      <WalletBalance />

      
    </div>
  );
}

export default Home;
