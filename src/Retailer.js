import React, { useState, useEffect } from "react";
import Web3 from 'web3';
import { DetectFake } from "./abi/abi";
// import QRScanner from "./QRScanner";
import QrReader from 'react-qr-scanner';
import getWeb3 from "./getWeb3";

const Retailer = () =>{
    const [web3, setWeb3] = useState(null);
    // const contractAddress = '0xae274fefD1D29684Ab109853E771aE65Db553985'
    const contractAddress = '0xB8D59839824C9169Ef072442d1b88dFcE39Ec39b'
    const [contract, setContract] = useState(null);
    const [accounts, setAccounts] = useState(null);

    useEffect(() =>{
        const init = async() =>{
            const web3Instance = await getWeb3();
            const accounts = await web3Instance.eth.getAccounts();
            const networkId = await web3Instance.eth.net.getId();
            const contractIntsance = new web3Instance.eth.Contract(DetectFake, contractAddress);
            setContract(contractIntsance);
            setWeb3(web3Instance);
            setAccounts(accounts);
        }
        init();
    },[]);

    const trial = async() =>{
        // const productDetails = await contract.methods.getNotOwnedCodeDetails("1234").call();
        // console.log(productDetails);
        // const res = await contract.methods.getResult(2,3).call();
        const just = await contract.methods.modString("nik").call();
        const one = await contract.methods.giveString("nik").call();
        console.log(just);
        console.log(one);
    }
    const makeP = async() =>{
        // const some = await contract.methods.makeProduct("1234", "X", "Y", 3, "D", "MN", "L").call();
    }
    const [hash, setHash] = useState('');
    const handleScan = async(data) => {
        if (data) {
          setHash(data);
        //   const productDetails = await contract.methods.getNotOwnedCodeDetails("1234").call();
        //   console.log(productDetails);

        // console.log(data.text);
        //   console.log(hash);
        //   console.log(data);
        }
    }
    
    const handleError = (error) => {
        console.error(error);
    }
    return(
        <div>
            {/* <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
            />
            {hash != '' && 
                <p>{hash.text}</p>
            } */}
            {/* <button onClick={makeP} >Make</button> */}
            <button onClick={trial} >Get</button>
        </div>
    )
}

export default Retailer;