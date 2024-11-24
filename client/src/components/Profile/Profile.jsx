import Avatar from "./Avatar"
import Bio from "./Bio"
import Stats from "./Stats"
import StoryCard from "./StoryCard"
import Share from "../common/Share"
import ContextMenu from "../common/ContextMenu"
import { FaEllipsisH, FaShareAlt } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { useModalContext } from "../../hooks/useModalContext"
import { useProfileContext } from "../../hooks/useProfileContext"
import ErrorMessage from "../common/ErrorMessage"
import { FaRegThumbsUp } from "react-icons/fa";
import { MdReadMore } from "react-icons/md"
import Toast from "../common/Toast"
import { useGetUserProfile } from "../../hooks/useGetUserProfile"
import { useEffect, useState } from "react"
const Profile = () => {
  const { dispatch, profile } = useProfileContext()
  const { getUserProfile, data, isLoading, error, statusCode  } = useGetUserProfile();
  const [stories, setStories] = useState([{}, {}, {}])

  useEffect(() => {
    if(Object.keys(profile).length == 0){
      console.log(" I do not always want to be called.")
    }
    getUserProfile();
  }, [])
  const resendRequest = () => {
    getUserProfile()
  }
  useEffect(() => {
  if(Object.keys(data).length > 1){
    setStories(data["stories"])
    dispatch({ type: "LOAD_PROFILE", payload:data });
  }
  }, [data, dispatch])
  useEffect(() => {
console.log(error)
  }, [error])
  const {
           contextMenu,
            shareModal,
        shareRef,
        fireClick,
        setContextMenu,
        closeContextMenu
     } = useModalContext()
  return (
    <>
<Toast/>
<div>
{  !error   &&
 <section className="litenote-profile-user-profile" onClick={closeContextMenu}>
  <Share  share={shareRef} shareModal={shareModal}/>
<div className="litenote-profile-container">
<div className="litenote-profile-header" style={{


borderRadius : "10px", padding : "30px"}}>
<div style={{display : "flex", flexDirection : "column", color : "white"}}>
<Avatar isLoading={isLoading}/>
<Bio isLoading={isLoading}/>
</div>
<div className="litenote-profile-info" style={ { color : "white"}}>

  <div className="litenote-profile-stats"  style={{   color: "#FF4B33"}}>
 <Stats isLoading={isLoading}/>
  </div>
</div>

<span style={{color : "white", alignSelf : "flex-end"}}>
  <FaEllipsisH />
</span>
</div>

<div className="litenote-profile-stories">
{isLoading ? <div className="profile-loader profile-loader-bio"></div> : <h3 className="litenote-profile-section-title">{profile["username"]} Stories</h3>}
<div className="litenote-profile-stories-grid">

  {
    stories.map((story, index) => (
      <StoryCard  shareModal={shareModal} 
       isLoading={isLoading}
      fireClick={fireClick} story={story} key={index}/>
    ))

  }
  
 <ContextMenu
 state={"feed"}
 contextMenu={contextMenu}
 shareModal={shareModal}
            setContextMenu={setContextMenu}
            contextMenuData={[
            {id : 1, icon : <FaShareAlt />
            , label : "Share"},
            {id : 2, icon : <FaBookmark />
            , label : "Bookmark"},
            {id : 3, icon : <MdReadMore/>
            , label : "Close"},
            {id : 4, icon : <FaRegThumbsUp />
            , label : "Like Story"}
]} />
   {/* Add more story cards as needed  */}
</div>
</div>
</div>
</section> 

 }
 {error && <>


{ error?.code == "ERR_NETWORK" ? 
  <ErrorMessage title={"Check Your Internet Connection"} 
message={"We are unable to load this content, check your connection"}
height={90}
type={error.code}
fireClick = {resendRequest}
/>
:
error?.code == "ERR_CANCELED"

?
<ErrorMessage title={"Timeout Error"} 
message={"Sorry, Your Request Has Timed Out, Pls click on the refresh button"}
height={90}
type={error.code}
fireClick = {resendRequest}
/>
:
<ErrorMessage title={"Something went wrong"} 
message={"We are unable to load this content, Pls click on the refresh button"}
height={90}
type={error.code}
fireClick = {resendRequest}
/>
}
</>
}
</div>
    </>
  )
}

export default Profile