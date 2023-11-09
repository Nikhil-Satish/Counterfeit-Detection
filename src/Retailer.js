import React, { useState, useEffect } from "react";
import Trial from './abi/Trial.json';
import DetectFake from './abi/DetectFake.json'
import QrReader from 'react-qr-scanner';
import contractAddress from "./ContractAddress";
import hashes from "./Hashes";

const ethers = require("ethers")
const Retailer = () =>{
    const [contract, setContract] = useState(null);
    const [accounts, setAccounts] = useState(null);
    // const [str, setStr] = useState("");
    const [retailerName, setRetailer] = useState('');
    const [retailerLocation, setRetailerLocation] = useState('');
    const [product, setProduct] = useState([]);
    const [hash, setHash] = useState('');
    const [scanned, setScan] = useState(false);
    const [enteredHash, setEntered] = useState('');

    useEffect(() =>{
        const init = async() =>{
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const accounts = await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner(accounts[0]);
            const contractInstance = new ethers.Contract(contractAddress, DetectFake.abi, signer);
            setContract(contractInstance);
            setAccounts(accounts);
            console.log("------------------", accounts);
        }
        init();
    },[]);

    // useEffect(()=>{
    //     const getProductDetails = async() =>{
    //         const pro = await contract.getNotOwnedCodeDetails(hash);
    //         console.log(pro);
    //         setProduct(pro);
    //         // const val = await contract.getProductCodes();
    //         // console.log(val);
    //     }
    //     if(hash != ''){
    //         getProductDetails();
    //     }
    // },[hash]);

    // const trial = async() =>{
    //     const val1 = await contract.modString("Nik");
    //     console.log(val1);
    // }
    // const check = async() =>{
    //     const sum = await contract.giveString("Nik");
    //     console.log(sum);
    //     setStr(sum[1]);
    // }

    const getProductDetails = async() =>{
        // const pro = await contract.getNotOwnedCodeDetails(hash);
        // console.log(pro);
        // setProduct(pro);
        // const val = await contract.getProductCodes();
        // console.log(val);
        const val = await contract.getNotOwnedCodeDetails(hashes[0]);
        console.log(val);
    }

    const getNums = async() =>{
        const val = await contract.getNums();
        console.log(val);
    }

    const addRetailerName = (event) =>{
        setRetailer(event.target.value);
    }

    const confirmHash = async(event) =>{
        setHash(enteredHash);
        console.log(hash);
        await getProductDetails();
    }

    const enterCode = (event) =>{
        setEntered(event.target.value);
    }

    const addRetailerLocation = (event) =>{
        setRetailerLocation(event.target.value);
    }
    const addRetailer = async() =>{
        // setHash(hashes[0]);
        // setRetailer("Nikhil");
        // setRetailerLocation("NITK");
        // const val1 = await contract.createRetailer(hashes[0], "Nikhil", "NITK");
        // console.log(val1);
        const val2 = await contract.addRetailerToCode(hashes[0], "Nikhil");
        console.log(val2);
        const val3 = await contract.getRetailerDetails(hashes[0]);
        console.log("Retailer added:\n");
        console.log(val3);
    }

    const handleScan = async(data) => {
        if (data) {
            //   setHash(data);
            console.log(data);
            const val = await contract.getProductCodes();
            console.log(val);
            setScan(true);
        //   await getProductDetails();
        }
    }

    const handleError = (error) => {
        console.error(error);
    }
    return(
        <div>
            <div> 
                    {/* <label> Code </label>
                    <input type="text"  value={enteredHash} onChange={enterCode}/>
                    <br /> */}
                    <button onClick={getProductDetails}>Submit</button>
                    <button onClick={addRetailer}>Add retailer</button>
                </div>
            
            
            {/* <button onClick={trial} >Get</button>
            <button onClick={check} >Check</button> */}
            {/* <p>{str}</p> */}
        </div>
    )
}

export default Retailer;

// const accounts = await web3Instance.eth.getAccounts();
            // const networkId = await web3Instance.eth.net.getId();
            // const deployedNetwork = Trial.networks[networkId];
            // const contractIntsance = new web3Instance.eth.Contract(
            //     Trial.abi,
            //     // "0xDEB67D58E838885b9D6e68fecb5fAC9b4D95f5d0"
            //     deployedNetwork && deployedNetwork.address,
            // );

        // const productDetails = await contract.methods.getNotOwnedCodeDetails("1234").call();
        // console.log(productDetails);
        // const res = await contract.getResult(3,5).send({from:accounts[0], gas: 1000000});
        // console.log(res);
        // const res = await contract.methods.getResult(2,3).send({ from:accounts[0] , gas: 1000000 });
        // console.log(res);

        // const web3Instance = await getWeb3();
            // const web3Instance = new Web3("HTTP://127.0.0.1:7545");
            // const provider = new ethers.BrowserProvider(window.etherium)


            // {
            //     hash == '' && scanned === true &&
            //     {/* <QrReader
            //         delay={300}
            //         onError={handleError}
            //         onScan={handleScan}
            //         style={{ width: '100%' }}
            //     /> */} 
                
            // }
            // {
            //     hash ==='' &&
                
            // }

            // {hash != '' && 
            //     <div>
            //         {/* <p>{hash.text}</p> */}
            //         <p>{hash}</p>
            //         {product.forEach((item)=>{
            //             <div>
            //                 <br/>
            //                 <p>{item}</p>
            //             </div>
            //         })}
            //         <br />
            //         <label> Retailer name: </label>
            //         <input type="text"  value={retailerName} onChange={addRetailerName}/>
            //         <br />
            //         <label> Retailer location: </label>
            //         <input type="text"  value={retailerLocation} onChange={addRetailerLocation}/>
            //         <br />
            //         <button onClick={addRetailer}>Submit</button>
            //     </div>
            // }