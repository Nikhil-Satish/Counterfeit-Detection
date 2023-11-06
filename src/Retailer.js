import React, { useState, useEffect } from "react";
import Web3 from 'web3';
import { DetectFake } from "./abi/abi";
// import QRScanner from "./QRScanner";
import QrReader from 'react-qr-scanner';
import getWeb3 from "./getWeb3";

const Retailer = () =>{
    const [web3, setWeb3] = useState(null);
    const contractAddress = '0x54d06303d5da477517099E84692D78FA88cC579F'
    // const contractAddress = '0xB8D59839824C9169Ef072442d1b88dFcE39Ec39b'
    const [contract, setContract] = useState(null);
    const [accounts, setAccounts] = useState(null);
    const [try1, setTry1] = useState(0);
    const [try2, setTry2] = useState(0);
    const [try3, setTry3] = useState(0);

    useEffect(() =>{
        const init = async() =>{
            const web3Instance = await getWeb3();
            // const web3Instance = new Web3("http://localhost:7545");
            const accounts = await web3Instance.eth.getAccounts();
            const networkId = await web3Instance.eth.net.getId();
            const contractIntsance = new web3Instance.eth.Contract(DetectFake, contractAddress);
            setContract(contractIntsance);
            setWeb3(web3Instance);
            setAccounts(accounts);
            console.log("------------------", accounts);
        }
        init();
    },[]);

    const trial = async() =>{
        // const productDetails = await contract.methods.getNotOwnedCodeDetails("1234").call();
        // console.log(productDetails);
        // const res = await contract.methods.getResult(3,5).call();
        // const res = await contract.methods.getResult(2,3).send({ from:accounts[0] , gas: 1000000 });
        // console.log(res);
        const val1 = await contract.methods.dummy2().send({from:accounts[0]})
        console.log(val1);
        // setTry1(res);

        // const just = await contract.methods.modString("pg").send({
        //     from:accounts[0],
        //     gas: '21000', // You can set the gas limit here
        //     gasPrice: web3.utils.toWei('30', 'gwei')
        // });
        // const just = await contract.methods.modString("abc").send({from:accounts[0], value: 1 });
        // console.log(just);
        // setTry2(just);
        // const one = await contract.methods.giveString("xyz").call();
        // console.log(one);
        // setTry3(one[0]);
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
            {/* <p>{try1}</p>
            <p>{try2}</p>
            <p>{try3}</p> */}
        </div>
    )
}

export default Retailer;