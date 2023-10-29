import React from "react";
import { useState } from "react";
import { DetectFake } from "./abi/abi";
import Web3 from 'web3';
import getWeb3 from "./getWeb3";
import QrReader from 'react-qr-scanner'
import Manufacturer from "./Manufacturer";
import QRScanner from "./QRScanner";

const web3 = new Web3(Web3.givenProvider);
const contractAddress = '0x49AAcAF2e539eFB34FAFAA2C9c7abDFd91235a91'; // Replace with your contract address
const contract = new web3.eth.Contract(DetectFake, contractAddress);

const App = () =>{
  const [productId, setProductId] = useState('');
  const [data, setData] = useState('');
    const handleScan = (data) => {
        if (data) {
          setData(data);
          console.log(data);
        }
    }
    
    const handleError = (error) => {
        console.error(error);
    }

  return (
      <div>
        {/* <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
          <p>{data.text}</p> */}
        {/* <QRScanner /> */}
        <Manufacturer />
      </div>
    );
}

export default App;
