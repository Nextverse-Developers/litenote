
import SuggestionCard from "./SuggestionCard"
import { useGetSuggestedStories } from "../../hooks/useGetSuggestedStories"
import ErrorMessage from "../common/ErrorMessage"
import { useEffect, useState } from "react"
import { FaRegSadTear } from "react-icons/fa";
import ContextMenu from "../common/ContextMenu";
import { useModalContext } from "../../hooks/useModalContext";
import { FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { MdOutlineFavoriteBorder, MdReadMore } from "react-icons/md";
const MoreStories = ({   userId, shareModal, fireClick, title, storyId, moreStories, setMoreStories}) => {
const [loadingState] = useState([{},{}])
const [emptyData, setEmptyData] = useState(false)
const stories = useGetSuggestedStories();
useEffect(() => {
  setEmptyData(false)
    stories.getSuggestedStories(1, 2, "all", userId._id, storyId, "more");
  }, [userId, storyId]);
  useEffect(() => {
if(stories.data.length > 0){
  console.log("sush")
  setMoreStories(stories.data)
  setEmptyData(false)
}
  }, [stories.data])
  useEffect(() => {
    if(!stories.isLoading){
      if(stories.data.length == 0 && !stories.error){
        setEmptyData(true)
      }
    }
        }, [stories.data, stories.isLoading, stories.error])
  const resendRequest = () => {
      stories.getSuggestedStories(1, 2, "all", userId, storyId, "more");
  }
  return (
    <>
<div  className="suggestion-container">
    <div className="litenote-suggestion-stories" style={{flexDirection : "row"}}>
    {  
      
      stories.isLoading ? 
      <div
    className="suggest-more-for-me">
      {loadingState.map((story, index) => (
      <SuggestionCard
      isLoading={true}
       shareModal={shareModal} story={story} fireClick={fireClick} key={index}/>
    ))
      }

    </div>
      :
      emptyData ? 
       <div style={{display : "flex", flexDirection : "column", justifyContent  : "center", alignItems : "center", gap : "30px"}}>
       <FaRegSadTear size={50}/>
 <h4>It looks like this is the only story by this author for now. Check back later for more</h4>
       </div>
       :
       <>
              <div
    className="suggest-more-for-me">
      {moreStories.map((story, index) => (
      <SuggestionCard
      isLoading={false}
       shareModal={shareModal} story={story} fireClick={fireClick} key={index}/>
    ))
      }

    </div>
       </>
      
    }
    </div>
    </div>
    {stories.error && <div className="litenote-suggestion-stories">


{ stories.error?.code == "ERR_NETWORK" ? 
  <ErrorMessage title={"Check Your Internet Connection"} 
message={"We are unable to load this content, check your connection"}
height={40}
type={stories.error.code}
fireClick = {resendRequest}
/>
:
stories.error?.code == "ERR_CANCELED"

?
<ErrorMessage title={"Timeout Error"} 
message={"Sorry, Your Request Has Timed Out, Pls click on the refresh button"}
height={40}
type={stories.error.code}
fireClick = {resendRequest}
/>
:
<ErrorMessage title={"Something went wrong"} 
message={"We are unable to load this content,Pls click on the refresh button"}
height={40}
type={stories.error.code}
fireClick = {resendRequest}
/>
}
</div>
}
    </>
    

  )
}

export default MoreStories