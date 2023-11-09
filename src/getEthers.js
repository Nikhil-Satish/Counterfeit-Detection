// import { ethers } from "ethers";
const ethers = require("ethers")

const getEthers = () =>
  new Promise(async (resolve, reject) => {
    if (window.ethereum) {
      const web3 = new ethers.providers.Web3Provider(window.ethereum);
      try {
        await window.ethereum.enable();
        // await window.ethereum.request({ method: 'eth_requestAccounts' });
        resolve(web3);
      } catch (error) {
        reject(error);
      }
    } else if (window.web3) {
      resolve(window.web3);
    } else {
      reject(new Error("No Ethereum provider detected."));
    }
  });

export default getEthers;


// import { ethers } from "ethers";

// const initializeProvider = async () => {
//     if (window.ethereum) {
//       await window.ethereum.request({ method: 'eth_requestAccounts' });
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       return provider;
//     }
// }

// export default initializeProvider;