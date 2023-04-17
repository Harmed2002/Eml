import React, { useState, useRef } from "react";
import { QrReader, useQrReader } from "react-qr-reader";

const QrScanner = () => {
    // const reader = useRef(null);
    // const [code, setCode] = useState("");
    const [data, setData] = useState("");
    const [scanResultWebCam, setScanResultWebCam] = useState("");
    const handleErrorWebCam = (error) => {
        console.log(error);
    };
    const handleScanWebCam = (result) => {
        if (result) {
            console.log("result", result);
            setScanResultWebCam(result);
        }
    };
    return (
        <div>
            <QrReader
                onResult={(result, error) => {
                    if (!!result) {
                        handleScanWebCam(result?.text);
                    }

                    if (!!error) {
                        handleErrorWebCam(error);
                    }
                }}
                style={{ width: "40%" }}
            />
            <p>{data}</p>
        </div>
    );
};

export default QrScanner;
