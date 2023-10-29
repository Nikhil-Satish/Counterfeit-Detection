import React, { useState } from "react";
import Web3 from 'web3';
import { DetectFake } from "./abi/abi";
// import QRScanner from "./QRScanner";
import QrReader from 'react-qr-scanner';

const Retailer = () =>{
    const web3 = new Web3(Web3.givenProvider);
    const contractAddress = '0x49AAcAF2e539eFB34FAFAA2C9c7abDFd91235a91'; // Replace with your contract address
    const contract = new web3.eth.Contract(DetectFake, contractAddress);
    const [hash, setHash] = useState('');
    const handleScan = (data) => {
        if (data) {
          setHash(data);
        }
    }
    
    const handleError = (error) => {
        console.error(error);
    }
    return(
        <div>
            <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
            />
        </div>
    )
}

export default Retailer;