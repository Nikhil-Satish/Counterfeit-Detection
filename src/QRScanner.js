import React from "react";
import { useState } from "react";
import QrReader from 'react-qr-scanner'

const QRScanner = () =>{
    const [data, setData] = useState('');
    const handleScan = (data) => {
        if (data) {
          setData(data);
        }
    }
    
    const handleError = (error) => {
        console.error(error);
    }

    return (
        <div>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
          <p>{data}</p>
        </div>
      );
}

export default QRScanner;