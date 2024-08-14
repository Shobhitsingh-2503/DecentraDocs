import React from 'react'
import { MdOutlineAddCard } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import "../global.css"

const Adddoc = ({setAdding,add}) => {
  return (
    <div id="addDoc">
      <button 
      id="btn"
      className='button-30' 
      onClick={()=>{setAdding(!add)}}
      >
        {!add?
        <>
          <MdOutlineAddCard />
        </>:
          <MdArrowBack />
        }
      </button>
      {add? <p>Back</p> : <p>Add Document</p>}
    </div>
  )
}

export default Adddoc
