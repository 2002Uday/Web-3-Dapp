import React, { useContext, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsQrCodeScan } from "react-icons/bs";
import QrReader from "react-qr-scanner";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-700 text-sm font-semibold text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 rounded-lg bg-gray-200 font-semibold text-sm"
  />
);

const Welcome = () => {
  const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const [result, setResult] = useState("");

  const handleScan = (result) => {
    if (result) {
      setResult(result.text);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  // const [QrValue, setQrValue] = useState("");
  const [Toggle, setToggle] = useState(false);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    if(Toggle){
      formData.addressTo = result
    }
    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  const Scanner = () => {
    setToggle(true);
  }

  return (
    <>
      {currentAccount ? (
        <div className="flex w-full flex flex-col justify-center items-center pt-24">
          <h1 className="text-4xl mf:text-7xl font-extrabold text-white py-1">WELCOME !</h1>
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-48 mf:w-1/4 w-4/5 my-5 eth-card">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
              </div>
              <div>
                <p className="text-white font-light text-lg">
                  Wallet Address: 
                  <br/>
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-bold text-2xl mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-center items-center pt-24">
          <div className="p-3 flex justify-center items-center flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card">
          <p className="text-sm sm:text-xl font-semibold text-gray-800">
              Connect Your Wallet
            </p>
          </div>
      </div>
      )}
      <div className="flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 py-1">
              Make Transaction <br /> From Here
            </h1>
            {!currentAccount && (
              <button
                type="button"
                onClick={connectWallet}
                className="flex flex-row justify-center items-center my-5 border-2 border-purple-500 bg-purple-500 hover:bg-transparent p-3 rounded-full cursor-pointer "
              >
                <AiFillPlayCircle className="text-gray-900 mr-2" />
                <p className="text-gray-900 text-base font-semibold">
                  Connect Wallet
                </p>
              </button>
            )}

            <div className="grid sm:grid-cols-3 grid-cols-2 w-full text-black mt-10">
              <div
                className={`rounded-tl-2xl ${companyCommonStyles} text-black`}
              >
                Reliability
              </div>
              <div className={`${companyCommonStyles} text-black`}>
                Security
              </div>
              <div
                className={`sm:rounded-tr-2xl ${companyCommonStyles} text-black`}
              >
                Ethereum
              </div>
              <div
                className={`sm:rounded-bl-2xl ${companyCommonStyles} text-black`}
              >
                Web 3.0
              </div>
              <div className={`${companyCommonStyles} text-black`}>
                Low Fees
              </div>
              <div
                className={`rounded-br-2xl ${companyCommonStyles} text-black`}
              >
                Blockchain
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
            {/* <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  Wallet Address: 
                  <br/>
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div> */}
            <div className="p-5 sm:w-full flex flex-col justify-start items-center blue-glassmorphism">
              <p className="text-gray-800 text-center text-xl font-bold mb-2">
                Add Address Below To make the Transaction
              </p>
              { result === "" && !Toggle ? 
               ( <button onClick={Scanner} className="text-gray-700 font-bold px-3 py-1 drop-shadow-lg bg-white rounded-md flex justify-around gap-2 items-center">
                  <BsQrCodeScan />
                  <p>Scan QR</p>
                </button> ) : (
                  ""
                )}
              {Toggle ? (
                <div className="relative ">
                {
                  result === "" ? 
                  <>
                  <div className="absolute rounded-lg inset-y-0 right-1/4 top-14 h-3/5 w-1/2 border-4 border-red-700"></div>
                  <QrReader
                  delay={delay}
                  style={previewStyle}
                  onError={handleError}
                  onScan={handleScan}
                  className="rounded-3xl m-1"
                  />
                  </>
                  : ""}
                </div>
              ) : (
                ""
              )}
              <Input
                placeholder={result ? result : "Address To"}
                name="addressTo"
                type="text"
                handleChange={handleChange}
              />
              <Input
                placeholder="Amount (ETH)"
                name="amount"
                type="number"
                handleChange={handleChange}
              />
              <Input
                placeholder="Keyword (Gif)"
                name="keyword"
                type="text"
                handleChange={handleChange}
              />
              <Input
                placeholder="Enter Message"
                name="message"
                type="text"
                handleChange={handleChange}
              />

              <div className="h-[1px] w-full bg-white my-2" />

              {isLoading ? (
                <Loader />
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-black font-bold w-full mt-2 p-2 border-2 border-purple-500 bg-purple-500 hover:bg-transparent rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
