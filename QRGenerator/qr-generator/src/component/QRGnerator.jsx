import { useState } from "react";

export const QRGenerator = () => {
  const [inputData, setInputData] = useState();
  const [qrData , setQRData] = useState('KSH');

  const qrURL =
    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrData}`;

  const textHandler = (e) => {
    setInputData(e.target.value);
  };

  const submitBtn = (e) => {
    e.preventDefault();
    setQRData(inputData);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <div style={{ display: "flex", margin: "10px" }}>
        <form onSubmit={(e) => submitBtn(e)}>
        <input type="text" onChange={(e) => textHandler(e)} />
        <button>Submit</button>
        </form>
      </div>
      <img src={qrURL} alt="QR" width={300} />
    </div>
  );
};
