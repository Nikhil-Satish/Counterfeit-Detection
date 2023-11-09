import React, { useState, useEffect } from "react";
import DetectFake from './abi/DetectFake.json'
import QrReader from 'react-qr-scanner';
import contractAddress from "./ContractAddress";
import hashes from "./Hashes";
import value from "./Value";

const ethers = require("ethers")
const Retailer = () =>{
    const [contract, setContract] = useState(null);
    const [accounts, setAccounts] = useState(null);
    const [retailerName, setRetailer] = useState('');
    const [retailerLocation, setRetailerLocation] = useState('');
    const [hash, setHash] = useState('');
    // const [scanned, setScan] = useState(false);
    const [enteredHash, setEntered] = useState('');
    const [onSubmit, setSubmit] = useState(false);
    const [manuDetails, setManuDetails] = useState("");

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

    const getProductDetails = async() =>{
        const pro = await contract.getNotOwnedCodeDetails(hashes[value]);
        console.log(pro);
        setManuDetails("Manufacturer name: "+pro[4]+"\nManufacturer Location:"+pro[5]);
        setSubmit(true);
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
        const val1 = await contract.createRetailer(hashes[value], retailerName, retailerLocation);
        console.log(val1);
        const val2 = await contract.addRetailerToCode(hashes[value], retailerName);
        console.log(val2);
        // const val3 = await contract.getRetailerDetails(hashes[0]);
        console.log("Retailer added:\n"+retailerName+"\n"+retailerLocation);
        // console.log(val3);
    }

    // const handleScan = async(data) => {
    //     if (data) {
    //         //   setHash(data);
    //         console.log(data);
    //         const val = await contract.getProductCodes();
    //         console.log(val);
    //         setScan(true);
    //     //   await getProductDetails();
    //     }
    // }

    // const handleError = (error) => {
    //     console.error(error);
    // }
    return(
        <div>
            <div> 
                    <label> Enter hash: </label>
                    <input type="text"  value={enteredHash} onChange={enterCode}/>
                    <br />
                    <button onClick={confirmHash}>Submit</button>
                    {onSubmit &&
                        <div>
                            <label> Retailer name: </label>
                            <input type="text"  value={retailerName} onChange={addRetailerName}/>
                            <br />

                            <label> Retailer location: </label>
                            <input type="text"  value={retailerLocation} onChange={addRetailerLocation}/>
                            <br />
                            <button onClick={addRetailer}>Add retailer</button>
                        </div>
                    }
                </div>
            
        </div>
    )
}

export default Retailer;
