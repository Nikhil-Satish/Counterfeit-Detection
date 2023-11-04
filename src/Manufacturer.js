import React, { useEffect, useState } from "react";
import Web3 from 'web3';
import { DetectFake } from "./abi/abi";
// import QRCode from "react-qr-code";
// import QRCode from "react-native-qrcode-svg";
import jsonContract from './abi/DetectFake.json'
import getWeb3 from "./getWeb3";
// import { QRCodeCanvas, QRCodeSVG } from "solid-qr-code";
// import { QRCode } from "qrcode";
import { QRCodeSVG } from "qrcode.react";

const Manufacturer = () =>{
    // const web3 = new Web3(Web3.givenProvider);
    const [web3, setWeb3] = useState(null);
    const { abi } = require('./abi/DetectFake.json');
    // const contractAddress = '0x52B6F69aCEE878D08105ABC2717f235fb4c71CF6'; // Replace with your contract address
    // const contractAddress = '0xD4d427892333fD06d3615C1c0aB07FAe3e32d167'
    const contractAddress = '0xae274fefD1D29684Ab109853E771aE65Db553985'
    // const contract = new web3.eth.Contract(DetectFake, contractAddress);
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

    const [product, setProduct] = useState('');
    const [brand, setBrand] = useState('');
    const [manuName, setManu] = useState('');
    const [productCreated, setProductCreated] = useState(false);
    const [hash, genHash] = useState('');

    const inputProduct = (event) =>{
        setProduct(event.target.value);
    }

    const inputBrand = (event) =>{
        setBrand(event.target.value);
    }

    const inputManu = (event) =>{
        setManu(event.target.value);
    }

    const submitted = async(event) =>{
        // setManu(event.target.value);
        setProductCreated(true);
        genHash(createHash);
        const some = await contract.methods.makeProduct(hash, "X", "Y", 3, "D", "MN", "L").call();
    }

    const createHash = () =>{
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    }

    return(
        <div  >
            <div>
                <label> Product name: </label>
                <input type="text"  value={product} onChange={inputProduct}/>
                <br />
                <label> Brand: </label>
                <input type="text"  value={brand} onChange={inputBrand}/>
                <br />
                <label> Manufacturer's name: </label>
                <input type="text"  value={manuName} onChange={inputManu}/>
                <br />
                <button onClick={submitted}>Submit</button>
            </div>
            {productCreated &&  (
                <QRCodeSVG  style={{margin:10}} value={hash} />
            )}
        </div>
    )
}

export default Manufacturer;