import { useState, useEffect } from "react";
import "./App.css";
import { ethers } from "ethers";
import { abi, contractAddress } from "./constants";
import Adddoc from "./components/Adddoc";
import "./global.css";
import Showdoc from "./components/Showdoc";
import Add from "./components/Add";
import Footer from "./components/Footer";

function App() {
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [cnct, setConnect] = useState("Connect");
  const [isConnected, setIsConnected] = useState(false);
  const [adding, setAdding] = useState(false);
  var [list, setList] = useState([]);

  async function connect() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      setSigner(signer);
      await signer.getAddress().then((res) => {
        setConnect(res.toString());
        setIsConnected(true);
      });
    } else {
      alert(`Please Install a Wallet`);
    }
    // const contract = new ethers.Contract(contractAddress, abi, signer);
    // setContract(contract);
  }

  useEffect(() => {
    if (window.ethereum) {
      async function show() {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        setContract(contract);
        await contract
          .getMyDocs(signer)
          .then(async (res) => {
            setList(await JSON.parse(JSON.stringify(res)));
          })
          .catch((err) => {
            console.log(err);
          });
      }
      show();
      connect();
    }
  }, []);

  return (
    <div>
      <div id="matter">
        <div id="navbar">
          <span id="head1">DecentraDocs</span>
          <button onClick={connect} className="button-17">
            {cnct}
          </button>
        </div>
        <div align="center" id="head2">
          Save all your documents at one single, safe space
        </div>
        <div id="top">
          {isConnected ? (
            <>
              <Adddoc setAdding={setAdding} add={adding} />
              {!adding ? (
                <div id="docs">
                  {list.map((items, index) => {
                    return (
                      <>
                        <Showdoc
                          name={items[0]}
                          content={items[1]}
                          index={index}
                          contract={contract}
                        />
                      </>
                    );
                  })}
                </div>
              ) : (
                <Add
                  signer={signer}
                  contract={contract}
                  setAdding={setAdding}
                />
              )}
            </>
          ) : (
            <p>Enjoy Storing all your documents in a safe space </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
