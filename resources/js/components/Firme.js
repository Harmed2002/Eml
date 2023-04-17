import Popup from "reactjs-popup";
import { useRef ,useState} from "react";
import "reactjs-popup/dist/index.css";
import SignaturePad from "react-signature-canvas";
import "../../css/all.css";

function Firme(props) {
    const sigCanvas = useRef({});
    const [imageURL, setImageURL] = useState(null);
    const [propURL, setpropURL] = useState(props);
    const clear = () => {
       setImageURL("");
       const { handleAction} =propURL;
       handleAction("");
       sigCanvas.current.clear();
    };
    const store = (e) =>{
        e.preventDefault();
        setImageURL(
            sigCanvas.current.getTrimmedCanvas().toDataURL("image/png")
        );

        const { handleAction} =propURL;
        handleAction(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
    }
    return (
        <div>
            <Popup
                modal
                trigger={
                    <button className="btn btn-primary btn-block" type="button" >
                        <i className="fa fa-solid fa-pen-fancy"></i> Firmar
                    </button>
                }
                closeOnDocumentClick={false}
                nested
                position="top center"
            >
                {(close) => (
                    <>
                        <div className="row justify-content-center">
                            <div className="col-xs-12 col-sm-12">
                                {" "}
                                <SignaturePad
                                    ref={sigCanvas}
                                    canvasProps={{
                                        className: "signatureCanvas",
                                    }}
                                />
                            </div>
                            <div className="col-xs-12 col-sm-3 mt-1">
                                <button
                                    className="btn btn-secondary mr-2"
                                    onClick={close}
                                >
                                    Cerrar
                                </button>
                            </div>

                            <div className="col-xs-12 col-sm-3 mt-1">
                                <button
                                    className="btn btn-danger"
                                    onClick={clear}
                                >
                                    Limpiar
                                </button>
                            </div>
                            <div className="col-xs-12 col-sm-3 mt-1">
                                <button
                                    className="btn btn-success ml-2"
                                    onClick={store}
                                >
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </Popup>
        </div>
    );
}

export default Firme;
