import React, { useState, useEffect } from "react";
import Trial from './abi/Trial.json';
import DetectFake from './abi/DetectFake.json'
import { QRCodeSVG } from "qrcode.react";
import contractAddress from "./ContractAddress";
import { render } from "react-dom";
import hashes from "./Hashes";

const ethers = require("ethers")
const Customer = () =>{
    const [contract, setContract] = useState(null);
    const [accounts, setAccounts] = useState(null);
    const [productCodes, setProCodes] = useState(["1","2"]);
    const [proAvail, setProAvail] = useState(false);
    // let prod = [], retail = [];
    const [prod, setProd] = useState([]);
    const [retail, setRetail] = useState([]);
    const [list, setList] = useState([]);
    let seeList = [];

    useEffect(() =>{
        const init = async() =>{
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const accounts = await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner(accounts[0]);
            const contractInstance = new ethers.Contract(contractAddress, DetectFake.abi, signer);
            setContract(contractInstance);
            setAccounts(accounts);
            console.log("------------------", accounts);
            // setProCodes([189456]);
            // setProAvail(true);
        }
        init();
    },[]);

    const getProduct = async() => {
        const pro = await contract.getProductCodes();
        console.log(pro);
        setProCodes([189456]);
        setProAvail(true);
    }

    // const QRCodeList = () =>{
    //     productCodes.map(function(hash, index){
    //         <QRCodeSVG  style={{margin:10}} value={hash} />
    //         // return <p>Hi</p>
    //     })
    // }

    const QRCodeList = () =>{
        // setList([1,2])
        // let lis = []
        // let check = productCodes.map((hash) =>(
        //     // <QRCodeSVG  style={{margin:10}} value={hash} />
        //     // <li key={index} >Hi</li>
        //     // seeList.push(<li >Hi</li>)
        //     <li>Hi</li>
        // ))
        // setList(check);
        // console.log(check);
        // return (
        //     <p>Hi</p>
        // )
        const arrayDataItems = hashes.map((hash) => <QRCodeSVG  style={{margin:10}} value={"Hi"+hash} />);
        return (
            <div>
                {/* <ul>{arrayDataItems}</ul> */}
                {arrayDataItems}
            </div>
        );
    }

    const productDetails = async(hash) =>{
        const pro = await contract.getNotOwnedCodeDetails(1234);
        console.log(pro);
        // return pro;
    }

    const retailerDetails = async(hash) =>{
        const retailer = await contract.getRetailerDetails(hash);
        // console.log(retailer);
        return retailer;
    }

    return(
        <div>
            {/* {
                proAvail &&
                productCodes.forEach(async(hash)=>{
                    prod = await productDetails(hash);
                    console.log(prod);
                    setProd(prod);
                    retail = await retailerDetails(hash);
                    console.log(retail);
                    setRetail(retail);
                }) 
            } */}
            {/* {
                productCodes.map(function(hash, index){
                    return <QRCodeSVG  style={{margin:10}} value={hash} />
                })
            } */}
            {/* {QRCodeList} */}
            {/* {QRCodeList } */}
            <QRCodeList/>
            {/* <button onClick={addRetailer}>Add retailer</button> */}
            {/* <productDetails/> */}
            {/* <QRCodeSVG  style={{margin:10}} value="1" /> */}

        </div>
    );
}

export default Customer;