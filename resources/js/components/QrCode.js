import React, { useState, useRef } from "react";
import QRCode from "qrcode";
import { QrReader, useQrReader } from "react-qr-reader";

function QrCodeGenerate() {
    const [text, setText] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const generateQrCode = async () => {
        try {
            const response = await QRCode.toDataURL(text);
            setImageUrl(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h1>Qr</h1>
                <div className="row">
                    <div className="col-sm-6 col-sm-6 col-xs-12">
                        <textarea
                            label="Enter Text Here"
                            onChange={(e) => setText(e.target.value)}
                        ></textarea>
                        <button
                            variant="contained"
                            color="primary"
                            onClick={() => generateQrCode()}
                        >
                            Generate
                        </button>
                        <br />
                        <br />
                        <br />
                        {imageUrl ? (
                            <a href={imageUrl} download>
                                <img src={imageUrl} alt="img" />
                            </a>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

{
    /* <div className="container">
<div className="card">
    <h2 className="card-title">
        Generate Download & Scan QR Code with React js
    </h2>

    <div className="row">
        <div className="col-sm-6">
            <textarea
                label="Enter Text Here"
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button
                variant="contained"
                color="primary"
                onClick={() => generateQrCode()}
            >
                Generate
            </button>
            <br />
            <br />
            <br />
            {imageUrl ? (
                <a href={imageUrl} download>
                    <img src={imageUrl} alt="img" />
                </a>
            ) : null}
        </div>
        <div className="col-sm-6">
            <button
                variant="contained"
                color="secondary"
                onClick={onScanFile}
            >
                Scan Qr Code
            </button>
            <QrReader
                ref={qrRef}
                delay={300}
                onError={handleErrorFile}
                onScan={handleScanFile}
                legacyMode
            />
            <h3>Scanned Code: {scanResultFile}</h3>
        </div>
        <div className="col-sm-6">
            <h3>Qr Code Scan by Web Cam</h3>
            <QrReader
                delay={300}
                onError={handleErrorWebCam}
                onScan={handleScanWebCam}
            />
            <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
        </div>
    </div>
</div>
</div> */
}

// const useStyles = makeStyles((theme) => ({
//     conatiner: {
//         marginTop: 10,
//     },
//     title: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "#3f51b5",
//         color: "#fff",
//         padding: 20,
//     },
//     btn: {
//         marginTop: 10,
//         marginBottom: 20,
//     },
// }));
export default QrCodeGenerate;
