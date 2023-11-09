import React, { useState, useEffect } from "react";
import Trial from './abi/Trial.json';
import DetectFake from './abi/DetectFake.json'
import { QRCodeSVG } from "qrcode.react";
import contractAddress from "./ContractAddress";
import hashes from "./Hashes";

const ethers = require("ethers")
const Customer = () =>{
    const [contract, setContract] = useState(null);
    const [accounts, setAccounts] = useState(null);

    const [chain1, setChain1] = useState("");
    const [chain2, setChain2] = useState("");
    const [chain3, setChain3] = useState("");

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

    const QRCodeList = () =>{
        const arrayDataItems = hashes.map((hash,index) => <QRCodeSVG  style={{margin:10}} value={index == 0?chain1:(index == 1?chain2:chain3)} />);
        return (
            <div>
                {arrayDataItems}
            </div>
        );
    }

    const productDetails = async(hash) =>{
        const pro = await contract.getNotOwnedCodeDetails(hashes[0]);
        console.log(pro);
    }

    const fetchDetails = async() =>{
        const pro1 = await contract.getNotOwnedCodeDetails(hashes[0]);
        const pro2 = await contract.getNotOwnedCodeDetails(hashes[1]);
        const pro3 = await contract.getNotOwnedCodeDetails(hashes[2]);
        const retail1 = await contract.getRetailerDetails(hashes[0]);
        const retail2 = await contract.getRetailerDetails(hashes[1]);
        const retail3 = await contract.getRetailerDetails(hashes[2]);
        setChain1("Manufacturer name: "+pro1[4]+"\nManufacturer Location:"+pro1[5]+"\nRetailer name: "+retail1[0]+"\nRetailer location: "+retail1[1]);
        setChain2("Manufacturer name: "+pro2[4]+"\nManufacturer Location:"+pro2[5]+"\nRetailer name: "+retail2[0]+"\nRetailer location: "+retail2[1]);
        setChain3("Manufacturer name: "+pro3[4]+"\nManufacturer Location:"+pro3[5]+"\nRetailer name: "+retail3[0]+"\nRetailer location: "+retail3[1]);
    }

    return(
        <div>
            <QRCodeList/>
            <button onClick={fetchDetails}>Get details</button>
        </div>
    );
}

export default Customer;