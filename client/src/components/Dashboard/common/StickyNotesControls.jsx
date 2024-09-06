import { MdOutlineRectangle } from 'react-icons/md'
import { FaPlus, FaMinus } from "react-icons/fa"
import { useState } from 'react'
import colors from "../../../assets/colors.json"
const StickyNotesControls = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const nextPage = () => {
setPageNumber(pageNumber + 1)
  }
  const prevPage = () => {
    if(pageNumber == 1){
      return;
    }
setPageNumber(pageNumber - 1)
  }
  return (
    <div className="sticky-notes-color-controls">
    <div  className="sticky-notes-color-add-btn"
    onClick={() => { nextPage()}}
    >
          <FaPlus />
      </div>
          {colors.map((color, index) => (
          
            <div
            key={index}
          className="sticky-notes-color"
          style={{ backgroundColor: color.colorHeader }}
      ></div>
      

          ))}
          <div  className="sticky-notes-color-add-btn">
          <b>{pageNumber}</b>
      </div>
                          <div  className="sticky-notes-color-add-btn"
                          onClick={() => { prevPage()}}
                          >
          <b><FaMinus /></b>
      </div>
          
      </div>
  )
}

export default StickyNotesControls