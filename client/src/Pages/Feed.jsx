
import "../styles/components/Feed/feed.css"
import {  MdFormatListBulleted, MdGridView,
    MdOutlineBookmarks,

} from "react-icons/md";
import { useModalContext } from "../hooks/useModalContext";
import FeedList from "../components/Feed/FeedList";
import FeedRightSidebar from "../components/Feed/FeedRightSidebar";
import FeedLeftSidebar from "../components/Feed/FeedLeftSidebar";
import FeedBottomNav from "../components/Feed/FeedBottomNav";
import favour from "../assets/29.jpg"
import ChatBot from "../components/ChatBot/ChatBot";
import { MdOutlineCreate } from "react-icons/md";
import { FaHome,FaSearch, FaTimes } from "react-icons/fa";
import useWindowSize from "../hooks/useWindowSize";
import { Link } from "react-router-dom"
import {  useState } from "react"
const FeedPage = () => {
    const { closeContextMenu } = useModalContext();
    const [view, setView] = useState({
        list : false,
        grid : true
    })
    const changeView = (e) => {
        if(e.currentTarget.closest("a") === null){
            setView({
                list : !view.list,
                grid : !view.grid
        })
    return;
    }
    switch (e.currentTarget.closest("a").innerText) {
        case "Grid":
            setView({
                list : false,
                grid : true
            })
            break;
            case "List":
                setView({
                    list : true,
                    grid : false
                })
            break;
            case undefined :
            console.log("Ddd") 
            setView({
                list : !view.list,
                grid : !view.grid
            })
            break;
    }
console.log()
    }
    const feedData = [
        {
          title: "Mastering the Art of Photography",
          category: "Photography",
          author : "Gideon_Babalola",
          content : "Automata theory is the study of abstract machines and complex problems using abstract machines to solve them. Abstract machines are also known as automata",
          picture: ["https://c4.wallpaperflare.com/wallpaper/760/955/638/artwork-landscape-sky-mountains-wallpaper-preview.jpg"],
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
          author : "Gideon_Babalola",
          content : "Automata theory is the study of abstract machines and complex problems using abstract machines to solve them. Abstract machines are also known as automata",
          picture: ["https://c4.wallpaperflare.com/wallpaper/591/844/1024/spider-man-spider-video-games-superhero-wallpaper-preview.jpg"],
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
          author : "Gideon_Babalola",
          content : "Automata theory is the study of abstract machines and complex problems using abstract machines to solve them. Abstract machines are also known as automata",
          picture: ["https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg"],
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
          author : "Gideon_Babalola",
          content : "Automata theory is the study of abstract machines and complex problems using abstract machines to solve them. Abstract machines are also known as automata",
          picture: ["https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg"],
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
          author : "Gideon_Babalola",
          content : "Automata theory is the study of abstract machines and complex problems using abstract machines to solve them. Abstract machines are also known as automata",
          picture: ["https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg"],
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
          author : "Gideon_Babalola",
          content : "Automata theory is the study of abstract machines and complex problems using abstract machines to solve them. Abstract machines are also known as automata",
          picture: ["https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg"],
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
          author : "Gideon_Babalola",
          content : "Automata theory is the study of abstract machines and complex problems using abstract machines to solve them. Abstract machines are also known as automata",
          picture: ["https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg"],
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
          author : "Gideon_Babalola",
          content : "Automata theory is the study of abstract machines and complex problems using abstract machines to solve them. Abstract machines are also known as automata",
          picture: ["https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg"],
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
          author : "Gideon_Babalola",
          content : "Automata theory is the study of abstract machines and complex problems using abstract machines to solve them. Abstract machines are also known as automata",
          picture: ["https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg"],
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
          author : "Gideon_Babalola",
          content : "Automata theory is the study of abstract machines and complex problems using abstract machines to solve them. Abstract machines are also known as automata",
          picture: ["https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg"],
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
          author : "Gideon_Babalola",
          content : "Automata theory is the study of abstract machines and complex problems using abstract machines to solve them. Abstract machines are also known as automata",
          picture: ["https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg"],
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
  const { width } = useWindowSize()
  return (
    <>
       <section className="total-feed" onClick={closeContextMenu}>
<FeedBottomNav view={view} changeView={changeView}/>
 
 <FeedLeftSidebar view={view} changeView={changeView}/>
    <div className="feed-main-content">
        <div className="feed-header">
            <div className="feed-logo">Lite Note</div>
           { width < 768 &&<>
            {/* <FaSearch style={{position : "absolute", top : "20%", left : "5%", cursor :"pointer"}} />
            <input type="text" placeholder="Search Anything" className="feed-search-bar" /> */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
  <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
    <FaSearch className="search-magphone" />
    <input
      type="text"
      placeholder="Search Anything"
      className="feed-search-bar"
      style={{
        paddingLeft: '35px', // Add padding to the left to accommodate the search icon
        paddingRight: '35px', // Add padding to the right to accommodate the times icon
        width: '100%',
      }}
    />
    <FaTimes className="searchXphone" />
  </div>
</div>


           </> }
        </div>
        
        <div className="feed-tabs">
            <span className="feed-headman active">Recommended</span>
            <span
            className="feed-headman"
             >Following</span>
            <span 
            className="feed-headman"
           >Challenges</span>
        </div>
        <hr />
        
  <FeedList view={view} feedData={feedData} />
    </div>
        
  <FeedRightSidebar />
   </section>
      <ChatBot />
    </>

  )
}

export default FeedPage