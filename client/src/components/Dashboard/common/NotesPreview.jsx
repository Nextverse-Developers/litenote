import { FaPlus, FaEdit,  FaReadme } from "react-icons/fa" 
import { FaEllipsis } from "react-icons/fa6"
import { MdDelete, MdSend } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import "../../../styles/components/Dashboard/notes-preview-page.css"
import SpecialModal from "../../common/SpecialModal"
import SearchCircle from "./SearchCircle"
import { useState } from "react"

const NotesPreview = () => {
    const [openModal, setOpenModal] = useState(false)
    const [modalTitle, setModalTitle] =  useState("")
    const [modalContent, setModalContent] =  useState("")
    const navigate = useNavigate()
    const triggerNoteDelete = () => {
        setModalTitle("Delete Note")
        setModalContent("Are you sure you want to delete this note")
        setOpenModal(true)
    }
    const searchForNotes = () => {
        setModalTitle("Search Notes")
        setModalContent(<div className="user-sticky-search-wrapper">

            <div className="field">
               <input type="text" placeholder="Search Sticky Notes"/>
               <label htmlFor="click" className="btn-2">Search</label>
            </div>
            </div>)
setOpenModal(true)
    }
    const dummyNotes = [
        {
            title : "This is a Title",
            content : "Download the perfect boulders pictures. Find over 100+ of the best free boulders images. Free for commercial use ✓ No attribution required ✓ Copyright ...",
            date : "April 3, 2022"
        },
        {
            title : "This is a Title",
            content : "Download the perfect boulders pictures. Find over 100+ of the best free boulders images. Free for commercial use ✓ No attribution required ✓ Copyright ...",
            date : "April 3, 2022"
        },
        {
            title : "This is a Title",
            content : "Download the perfect boulders pictures. Find over 100+ of the best free boulders images. Free for commercial use ✓ No attribution required ✓ Copyright ...",
            date : "April 3, 2022"
        },
        {
            title : "This is a Title",
            content : "Download the perfect boulders pictures. Find over 100+ of the best free boulders images. Free for commercial use ✓ No attribution required ✓ Copyright ...",
            date : "April 3, 2022"
        },
        {
            title : "This is a Title",
            content : "Download the perfect boulders pictures. Find over 100+ of the best free boulders images. Free for commercial use ✓ No attribution required ✓ Copyright ...",
            date : "April 3, 2022"
        },
        {
            title : "This is a Title",
            content : "Download the perfect boulders pictures. Find over 100+ of the best free boulders images. Free for commercial use ✓ No attribution required ✓ Copyright ...",
            date : "April 3, 2022"
        },
        {
            title : "This is a Title",
            content : "Download the perfect boulders pictures. Find over 100+ of the best free boulders images. Free for commercial use ✓ No attribution required ✓ Copyright ...",
            date : "April 3, 2022"
        },
    ]

return <>
    <section className="litenote-dashboard-notes-preview" >

    <SearchCircle clickMe={searchForNotes}/>
    <SpecialModal openModal={openModal} setOpenModal={setOpenModal} title={modalTitle} content={modalContent} width={450}/>
    <div className="user-notes-search-wrapper">

<div className="field">
   <input type="text" placeholder="Search Sticky Notes"/>
   <label htmlFor="click" className="btn-2">Search</label>
</div>
</div>
<div className="wrapper">

<li className="add-box" onClick={() => {
    navigate("/note/gideonbabalola69@gmail.com/283938") //This is just a test
}}>
<div className="icon"><FaPlus /></div>
<p>Add new note</p>
</li>
{dummyNotes.map((content, index) => (
    <li className = "note" key={index}>
<div className="details">
<p>{content.title}</p>
<span>{content.content}</span>

</div>
<div className="bottom-content">
<span>April 3, 2022</span>
<div className = "settings">
<FaEllipsis size={20}/>
<ul className = "menu">
<li style={{whiteSpace : "nowrap"}}><FaReadme size={20} /> Read More</li>
<li><FaEdit size={20} />Edit</li>
<li><MdSend size={20} />Transfer</li>
<li onClick={triggerNoteDelete}><MdDelete size={20}/>Delete</li>
</ul>
</div>
</div>
</li>
))}
</div>
    </section>
</>
}
export default NotesPreview