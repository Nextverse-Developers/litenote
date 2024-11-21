
import SuggestionCard from "./SuggestionCard"
import { useModalContext } from "../../hooks/useModalContext"
import ContextMenu from "../common/ContextMenu"
import { FaShareAlt, FaBookmark, FaRegThumbsUp } from "react-icons/fa"
import { MdReadMore } from "react-icons/md"
import Share from "../common/Share"
const StorySuggestions = () => {
    const {
        contextMenu,
         shareModal,
     shareRef,
     fireClick,
     setContextMenu,
     closeContextMenu
    } = useModalContext()
    const suggestionData = [
        {
          title: "Mastering the Art of Photography",
          category: "Photography",
          picture: "https://c4.wallpaperflare.com/wallpaper/760/955/638/artwork-landscape-sky-mountains-wallpaper-preview.jpg",
          link: "#",
          avatar : "https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg",
          date : "March 17, 2024",
          estimatedReadingTime : {
            minutes : 4,
            seconds : 30
          }
        },
        {
          title: "A Guide to Sustainable Living",
          category: "Lifestyle",
          picture: "https://c4.wallpaperflare.com/wallpaper/591/844/1024/spider-man-spider-video-games-superhero-wallpaper-preview.jpg",
          link: "#", 
          avatar : "https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg",
          date : "March 17, 2025"
          ,
          estimatedReadingTime : {
            minutes : 4,
            seconds : 30
          }
    
        }
      ]
  return (
    <>

<section>
    <div className="litenote-more-from-stories" style={{flexDirection : "row"}}>
    
    <span className="for-me-title"><b>
   More From Elon Jamas
    </b></span>
    
    <div
    className="suggest-more-for-me">
      {suggestionData.map((story, index) => (
      <SuggestionCard
      isLoading={false}
       shareModal={shareModal} story={story} fireClick={fireClick} key={index}/>
    ))
      }

    </div>
    </div>
    </section>

<section>
    <div className="litenote-suggestion-stories" style={{flexDirection : "row"}}>
    
    <span className="suggestion-title"><b>
    Suggested From LiteNote
    </b></span>
    
    <div
    className="suggest-more-for-me">
      {suggestionData.map((story, index) => (
      <SuggestionCard
      isLoading={false}
       shareModal={shareModal} story={story} fireClick={fireClick} key={index}/>
    ))
      }

    </div>
    </div>
    </section>
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
  <Share  share={shareRef} shareModal={shareModal}/>
    </>
    

  )
}

export default StorySuggestions