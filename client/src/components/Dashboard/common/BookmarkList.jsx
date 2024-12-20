import "../../../styles/components/Dashboard/bookmark-card.css"
import { FaEllipsisH } from "react-icons/fa";
import { FaRegBookmark, FaBookOpen, FaTimes, FaShareAlt } from "react-icons/fa";
import { MdClose, MdShare, MdDelete, MdReadMore, MdBookmark } from "react-icons/md";
import StoryCard from "../../Profile/StoryCard";
import  { useModalContext } from "../../../hooks/useModalContext"
import ContextMenu from "../../common/ContextMenu";
import Share from "../../common/Share"
import { useRef } from "react"
const BookmarkList = () => {
    // Sample data for stories
    const {
      contextMenu,
       shareModal,
   shareRef,
   fireClick,
   setContextMenu,
   closeContextMenu
  } = useModalContext()
  const myStories = [
    {
      title: "Mastering the Art of Photography",
      category: "Photography",
      picture: "https://c4.wallpaperflare.com/wallpaper/760/955/638/artwork-landscape-sky-mountains-wallpaper-preview.jpg",
      link: "#",
      avatar : "https://res.cloudinary.com/doctr0fct/image/upload/v1730507575/Avatars/yxuavl3ckq9ziaw0kavl_ow59tp.jpg",
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
      avatar : "https://res.cloudinary.com/doctr0fct/image/upload/v1730507575/Avatars/yxuavl3ckq9ziaw0kavl_ow59tp.jpg",
      date : "March 17, 2025"
      ,
      estimatedReadingTime : {
        minutes : 4,
        seconds : 30
      }

    },
    {
      title: "Top 10 Hiking Trails in the US",
      category: "Adventure",
      picture: "https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg",
      link: "#",
      avatar : "https://res.cloudinary.com/doctr0fct/image/upload/v1730507575/Avatars/yxuavl3ckq9ziaw0kavl_ow59tp.jpg",
      date : "March 17, 2020"
      ,
      estimatedReadingTime : {
        minutes : 4,
        seconds : 30
      }
    },
    {
      title: "Top 10 Hiking Trails in the US",
      category: "Adventure",
      picture: "https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg",
      link: "#",
      avatar : "https://res.cloudinary.com/doctr0fct/image/upload/v1730507575/Avatars/yxuavl3ckq9ziaw0kavl_ow59tp.jpg",
      date : "March 17, 2020"
      ,
      estimatedReadingTime : {
        minutes : 4,
        seconds : 30
      }
    },
    {
      title: "Top 10 Hiking Trails in the US",
      category: "Adventure",
      picture: "https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg",
      link: "#",
      avatar : "https://res.cloudinary.com/doctr0fct/image/upload/v1730507575/Avatars/yxuavl3ckq9ziaw0kavl_ow59tp.jpg",
      date : "March 17, 2020"
      ,
      estimatedReadingTime : {
        minutes : 4,
        seconds : 30
      }
    },
    {
      title: "Top 10 Hiking Trails in the US",
      category: "Adventure",
      picture: "https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg",
      link: "#",
      avatar : "https://res.cloudinary.com/doctr0fct/image/upload/v1730507575/Avatars/yxuavl3ckq9ziaw0kavl_ow59tp.jpg",
      date : "March 17, 2020"
      ,
      estimatedReadingTime : {
        minutes : 4,
        seconds : 30
      }
    },
    {
      title: "Top 10 Hiking Trails in the US",
      category: "Adventure",
      picture: "https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg",
      link: "#",
      avatar : "https://res.cloudinary.com/doctr0fct/image/upload/v1730507575/Avatars/yxuavl3ckq9ziaw0kavl_ow59tp.jpg",
      date : "March 17, 2020"
      ,
      estimatedReadingTime : {
        minutes : 4,
        seconds : 30
      }
    },
    {
      title: "Top 10 Hiking Trails in the US",
      category: "Adventure",
      picture: "https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg",
      link: "#",
      avatar : "https://res.cloudinary.com/doctr0fct/image/upload/v1730507575/Avatars/yxuavl3ckq9ziaw0kavl_ow59tp.jpg",
      date : "March 17, 2020"
      ,
      estimatedReadingTime : {
        minutes : 4,
        seconds : 30
      }
    },
    {
      title: "Top 10 Hiking Trails in the US",
      category: "Adventure",
      picture: "https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg",
      link: "#",
      avatar : "https://res.cloudinary.com/doctr0fct/image/upload/v1730507575/Avatars/yxuavl3ckq9ziaw0kavl_ow59tp.jpg",
      date : "March 17, 2020"
      ,
      estimatedReadingTime : {
        minutes : 4,
        seconds : 30
      }
    },
    {
      title: "Top 10 Hiking Trails in the US",
      category: "Adventure",
      picture: "https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg",
      link: "#",
      avatar : "https://res.cloudinary.com/doctr0fct/image/upload/v1730507575/Avatars/yxuavl3ckq9ziaw0kavl_ow59tp.jpg",
      date : "March 17, 2020"
      ,
      estimatedReadingTime : {
        minutes : 4,
        seconds : 30
      }
    },

    {
      title: "Top 10 Hiking Trails in the US",
      category: "Adventure",
      picture: "https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg",
      link: "#",
      avatar : "https://res.cloudinary.com/doctr0fct/image/upload/v1730507575/Avatars/yxuavl3ckq9ziaw0kavl_ow59tp.jpg",
      date : "March 17, 2020"
      ,
      estimatedReadingTime : {
        minutes : 4,
        seconds : 30
      }
    }
  ]
  return (
    <>
  <div className="litenote-dashboard-stories-preview-grid"
onClick={closeContextMenu}
    >
    {myStories.map((story, index) => (
      <StoryCard key={index} story={story} fireClick={fireClick}/>
    ))}
    <ContextMenu
       state={"feed"}
       contextMenu={contextMenu}
       shareModal={shareModal}
                  setContextMenu={setContextMenu}
                  contextMenuData={[
                  {id : 1, icon : <FaShareAlt />
                  , label : "Share"},
                  {id : 2, icon : <MdBookmark />
                  , label : "UnBookmark"},
                  {id : 3, icon : <MdReadMore/>
                  , label : "Read More"},
                  {id : 4, icon : <FaTimes />
                  , label : "Close"}
]} />
    </div>
    </>
  )
}

export default BookmarkList