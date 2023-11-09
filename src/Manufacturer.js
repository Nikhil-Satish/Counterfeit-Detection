import React, { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import DetectFake from './abi/DetectFake.json'
import contractAddress from "./ContractAddress";
import hashes from "./Hashes";
import value from "./Value";

const ethers = require("ethers")
const Manufacturer = () =>{
    const [contract, setContract] = useState(null);
    const [accounts, setAccounts] = useState(null);

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

    const [product, setProduct] = useState('');
    const [brand, setBrand] = useState('');
    const [manuName, setManu] = useState('');
    const [productCreated, setProductCreated] = useState(false);
    const [hash, genHash] = useState(0);
    const [location, setLocation] = useState("");
    const [desc, setDesc] = useState("");

    const inputProduct = (event) =>{
        setProduct(event.target.value);
    }

    const inputBrand = (event) =>{
        setBrand(event.target.value);
    }

    const inputManu = (event) =>{
        setManu(event.target.value);
    }

    const inputLocation = (event) =>{
        setLocation(event.target.value);
    }

    const addDesciption = (event) =>{
        setDesc(event.target.value);
    }

    const submitted = async(event) =>{
        setProductCreated(true);
        genHash(hashes[value]);
        const pro = await contract.makeProduct(hashes[value], brand, "Model", 3, desc, manuName, location);
        console.log(pro);
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
                <label> Manufacturer's location: </label>
                <input type="text"  value={location} onChange={inputLocation}/>
                <br />
                <label> Description: </label>
                <input type="text"  value={desc} onChange={addDesciption}/>
                <br />
                <button onClick={submitted}>Submit</button>
            </div>
            {productCreated &&  (
                <QRCodeSVG  style={{margin:10}} value={""+hash} />
            )}
        </div>
    )
}

export default Manufacturer;


// const createHash = () =>{
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     for (let i = 0; i < 6; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         result += characters[randomIndex];
//     }
//     return result;
// }

// const generateRandom = () => {
//     const min = 1; // Minimum 6-digit number
//     const max = 9; // Maximum 6-digit number
  
//     const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
//     // return randomNumber;
//     return 2;
//   }