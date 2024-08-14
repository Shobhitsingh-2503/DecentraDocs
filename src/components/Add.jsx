import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { FileUploader } from "react-drag-drop-files";
import "../global.css";
import { JWT } from "../constants";

const Add = ({ contract, signer, setAdding }) => {
  const fileTypes = ["JPG", "PNG", "PDF"];
  const [name, setName] = useState("");
  const [selectedFile,setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(file){
    setFile(file);
  }
  async function getIpfsHash(file){
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${JWT}`,
        },
        body: formData,
      }
    );
    const resData = await res.json();
    return resData.IpfsHash;
  }

  async function add() {
    if (name === "" || selectedFile === null) {
      alert(`All fields are mandatory`);
      return;
    }
    setLoading(true);
    await contract.addDoc(name, getIpfsHash(selectedFile)).then((res) => {
      setAdding(false);
    }).catch((err)=>{
      console.error(err.reason);
      alert(`Document of this name already exists, please try with some other name !`)
      setLoading(false);
    })
  }
  return (
    <div id="upld">
      <input
        id="inpt"
        type="text"
        placeholder="Name of Issued document"
        onChange={(e) => {
          setName(e.target.value);
        }}
        autocomplete="off"
      />
      <br />
      <FileUploader name="file" types={fileTypes} handleChange={handleChange}/>
      <br />
      <button onClick={add} className="button-23">
        Submit
      </button>
      {loading ? (
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : null}
    </div>
  );
};

export default Add;
