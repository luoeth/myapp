import { useState } from 'react';
import { ethers } from 'ethers';

function WalletBalance() {

    const [balance, setBalance] = useState();

    const getBalance = async () => {
        if (!window.ethereum) {
            console.error('MetaMask not detected');
            return;
        }
        
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const balance = await provider.getBalance(account);
            setBalance(ethers.utils.formatEther(balance));
        } catch (error) {
            console.error('Error fetching balance:', error);
            // Handle error here, e.g., show an error message to the user
        }
    };
  
    return (
      <div>
          <h5>Your Balance: {balance}</h5>
          <button onClick={() => getBalance()}>Show My Balance</button>
      </div>
    );
  };
  
  export default WalletBalance;
