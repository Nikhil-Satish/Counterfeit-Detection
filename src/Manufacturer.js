import React, { useState } from "react";
import Web3 from 'web3';
import { DetectFake } from "./abi/abi";
import QRCode from "react-qr-code";

const Manufacturer = () =>{
    const web3 = new Web3(Web3.givenProvider);
    const contractAddress = '0x49AAcAF2e539eFB34FAFAA2C9c7abDFd91235a91'; // Replace with your contract address
    const contract = new web3.eth.Contract(DetectFake, contractAddress);

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

    const submitted = (event) =>{
        // setManu(event.target.value);
        setProductCreated(true);
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
        <div>
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
            {productCreated && (
                genHash(createHash)
            ) && (
                <QRCode 
                    value={hash}
                />
            )}
        </div>
    )
}

export default Manufacturer;