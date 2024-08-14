import React, { useState } from "react";
import "../global.css";
import { ImDownload } from "react-icons/im";
import { MdDeleteForever } from "react-icons/md";
import Modal from "react-modal";
import { TailSpin } from "react-loader-spinner";
import { JWT } from "../constants";

const customStyles = {
  content: {
    borderRadius: "20px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const Showdoc = ({ name, index, contract, content }) => {
  let subtitle;
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  async function delNow() {
    setLoading(true);
    const response = await fetch(
      `https://api.pinata.cloud/pinning/unpin/${content}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${JWT}`,
        },
      }
    )
    console.log(response);
    await contract.delDoc(index).then(() => {
      closeModal();
    });
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="container" id="cnta">
      <span id="head">{name}</span>
      <iframe
        src={`https://bronze-elegant-gopher-211.mypinata.cloud/ipfs/${content}`}
        className="image"
      />
      <div className="middle">
        <div className="text">
          <a
            id="dnld"
            href={`https://bronze-elegant-gopher-211.mypinata.cloud/ipfs/${content}`}
            target="blank"
          >
            <ImDownload />
          </a>
        </div>
        <div className="text" id="del" onClick={openModal}>
          <MdDeleteForever />
        </div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
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
          ) : (
            <>
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                Are you sure you want to delete {name}
              </h2>
              <div id="inside">
                <button onClick={delNow}>Yes, I am !</button>
                <button onClick={closeModal}>Cancel</button>
              </div>
            </>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Showdoc;
