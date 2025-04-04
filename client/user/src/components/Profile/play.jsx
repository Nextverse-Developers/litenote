import { useState, useEffect } from "react";
import FollowToast from "../Follow/FollowToast";
import LoadingSpinner from "../Loaders/LoadingSpinner"
import { useFollowUser } from "../../hooks/useFollowUser";
import { useUnFollowUser } from "../../hooks/useUnFollowUser"
import { useProfileContext } from "../../hooks/useProfileContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import SpecialModal from "../common/SpecialModal";
import { MdVerified } from "react-icons/md";
const Bio = ({ isLoading, isFollowing }) => {
const [imPossibleToFollow, setImPossibleToFollow] = useState(false)
const [openModal, setOpenModal] = useState(false)
const [following, setFollowing] = useState({
  following : false,
  followedData : []
})
const [unfollowing, setUnFollowing] = useState({
  unfollowing : false,
  unfollowedData : []
})
const [followToast, setFollowToast] = useState({
  toast : false,
  message : ""
})
const { profile } = useProfileContext()
const { user } = useAuthContext(); 
const triggerFollow = useFollowUser()
const triggerUnFollow = useUnFollowUser();

useEffect(() => {
  console.log(profile)
  console.log(profile.email, user.email)
if(profile.email == user.email){
  setImPossibleToFollow(true)
}else{
  setImPossibleToFollow(false)
}
if(isFollowing){
  setFollowing({following : false, followedData :user})
}
}, [profile, user.email, isFollowing])
  const triggerFollowUser = () => {
  setFollowing({following : true, followedData : []})
triggerFollow.followUser(profile.email)
  }
  const triggerUnFollowUser = () => {
    setUnFollowing({ unfollowing : true, unfollowedData : []})
    triggerUnFollow.unFollowUser(profile.email)
  }
  useEffect(() => {
    if(Object.keys(triggerFollow.data).length > 0){
      setFollowing({following : false, followedData : triggerFollow.data})
      setUnFollowing({ unfollowing : false, unfollowedData :[]})
      setFollowToast({ toast : true, message : `You have successfully followed ${profile.username}` })
    }
      }, [triggerFollow.data, profile.username])
      useEffect(() => {
        if(Object.keys(triggerUnFollow.data).length > 0){
          console.log("gift")
          setUnFollowing({ unfollowing : false, unfollowedData : triggerUnFollow.data})
          setFollowing({following : false, followedData : []})
          console.log(following)
          console.log(Object.keys(following.followedData).length)
          console.log("Cache")
          setFollowToast({ toast : true, message : `You have successfully unfollowed ${profile.username}` })
          // setOpenModal(!openModal)
        }
      }, [triggerUnFollow.data, profile.username])
  const triggerUnFollowModal = () => {
    setOpenModal(!openModal)
  }
  const renderFollowButton = () => {
    console.log("I still go here")
    if (Object.keys(following.followedData).length == 0 && !following.following) {
      console.log("why not me")
      return (
        <button className="follow" onClick={() => triggerFollowUser()}>
          <span className="spinner-loader-container text">Follow</span>
        </button>
      );
    }
  
    if (following.following && !triggerFollow.error) {
      return (
        <button className="follow">
          <span className="spinner-loader-container">
            <LoadingSpinner />
          </span>
        </button>
      );
    }
  
    if (!following.following && Object.keys(following.followedData).length > 0) {
      console.log("Jacob")
      return (
        <button className="follow special-modal-client" onClick={() => triggerUnFollowModal()}>
          <span className="spinner-loader-container text special-modal-client">Following</span>
        </button>
      );
    }
  
    if (triggerFollow.error) {
      return (
        <button className="follow" onClick={() => triggerFollowUser()}>
          <span className="spinner-loader-container text">Follow</span>
        </button>
      );
    }
  
    return null; // Fallback in case no condition matches
  };
  const renderUnFollowButton = () => {
    if (Object.keys(unfollowing.unfollowedData).length === 0 && !unfollowing.unfollowing) {
      return (
        <button className="unfollow-button" onClick={() => triggerUnFollowUser()}>Unfollow</button>
      );
    }
  
    if (unfollowing.unfollowing && !triggerUnFollow.error) {
      return (
        <button className="unfollow-button">
          <span className="spinner-loader-container">
            <LoadingSpinner />
          </span>
        </button>
      );
    }
  
    if (!unfollowing.unfollowing && Object.keys(unfollowing.unfollowedData).length > 0) {
      return (
        <button className="unfollow-button">UnFollowed</button>
      );
    }
  
    if (triggerUnFollow.error) {
      return (
        <button className="unfollow-button" onClick={() => triggerUnFollowUser()}>
          <span className="spinner-loader-container text">Follow</span>
        </button>
      );
    }
  
    return null; // Fallback in case no condition matches
  }
  
  const previewUnfollowHtml = () => {
        
    return (
    <div
    className="unfollow-modal"
     style={{display : "flex", flexDirection : "column", justifyContent :"space-between", gap : "20px", fontFamily : "Poppins"}}>
  <section style={{display : "flex", flexDirection : "column", justifyContent : "space-between", textAlign : "left"}}>
 <div style={{fontWeight : "1000"}}>
 <h4>Unfollow @{profile.username}</h4>
 </div>
 <div style={{textAlign : "left"}}>
 Their posts will no longer show up frequently in your feed. You can still view their profile, unless their posts are protected. 
 </div>
    </section>
<section style={{display : "flex", flexDirection : "column", justifyContent : "space-between", textAlign : "center", gap : "10px"}}>
{renderUnFollowButton()}
<button className="unfollow-cancel-button" onClick={() => setOpenModal(!openModal)}>Cancel</button>
</section>
    
    </div>)
  }
  return (
   <>
   <FollowToast followToast={followToast} setFollowToast={setFollowToast} message={followToast.message}/>
   { isLoading ? <section style={{display : "flex", flexDirection : "column", gap : "6px", alignItems : "flex-start"}}>
   <div style={{display : "flex", flexDirection : "row", gap : "6px", alignItems : "center"}}>
<div className="profile-loader profile-loader-username"></div>
{/* <div className="profile-loader profile-loader-verification"></div> */}
<div className="profile-loader profile-loader-follow-button"></div>

</div>
<div  style={{display : "flex", flexDirection : "column", gap : "6px", alignItems : "flex-start"}}>
<div className="profile-loader profile-loader-title"></div>
<div className="profile-loader profile-loader-bio"></div>
</div>
   </section>
    :
<section>
<div style={{display : "flex", flexDirection : "row", alignItems : "center", gap : "10px" }}>


            <h2 className="litenote-profile-name">{profile["username"]} 
            {/* <FcRating style={{marginLeft : "1%"}} /> */}

          {/* <span className="checkbot">
    
          <FaCertificate style={{color : "#ff5e62", margin: "1%"}} />
            <FaCheck className="checkman"  size={14}/> 
          </span> */}
        
      
        
          </h2>
          <MdVerified style={{marginLeft : "1%", color : "black", fill : "#FF4B33"}} size={30}/>
          <span>{
          !imPossibleToFollow &&
          <>

<>
  {renderFollowButton()}
</>





            
          </>
    
        }
        </span>
        </div>
          <span><b>{profile.email}</b></span>
        <p className="litenote-profile-bio">{profile.bio}</p>
</section>
   }
<SpecialModal openModal={openModal} setOpenModal={setOpenModal}  content={previewUnfollowHtml()} />
   </>
  )
}

export default Bio






























import { useState, useEffect } from "react";
import FollowToast from "../Follow/FollowToast";
import LoadingSpinner from "../Loaders/LoadingSpinner"
import { useFollowUser } from "../../hooks/useFollowUser";
import { useUnFollowUser } from "../../hooks/useUnFollowUser"
import { useProfileContext } from "../../hooks/useProfileContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import SpecialModal from "../common/SpecialModal";
import { MdVerified } from "react-icons/md";
const Bio = ({ isLoading, isFollowing }) => {
const [imPossibleToFollow, setImPossibleToFollow] = useState(false)
const [openModal, setOpenModal] = useState(false)
const [following, setFollowing] = useState(false)
const [unfollowing, setUnFollowing] = useState(false)
const [followToast, setFollowToast] = useState({
  toast : false,
  message : ""
})
const { profile } = useProfileContext()
const { user } = useAuthContext(); 
const triggerFollow = useFollowUser()
const triggerUnFollow = useUnFollowUser();

useEffect(() => {
  console.log(profile)
  console.log(profile.email, user.email)
if(profile.email == user.email){
  setImPossibleToFollow(true)
}else{
  setImPossibleToFollow(false)
}
if(isFollowing){
  setFollowing(false)
}
}, [profile, user.email, isFollowing])
  const triggerFollowUser = () => {
  setFollowing(true)
triggerFollow.followUser(profile.email)
  }
  const triggerUnFollowUser = () => {
    setUnFollowing(true)
    triggerUnFollow.unFollowUser(profile.email)
  }
  useEffect(() => {
    if(Object.keys(triggerFollow.data).length > 0){
      setFollowing(false)
      setUnFollowing(false)
      setFollowToast({ toast : true, message : `You have successfully followed ${profile.username}` })
    }
      }, [triggerFollow.data, profile.username])
      useEffect(() => {
        if(Object.keys(triggerUnFollow.data).length > 0){
          console.log("gift")
          setUnFollowing(false)
          setFollowing(false)
          setFollowToast({ toast : true, message : `You have successfully unfollowed ${profile.username}` })
          // setOpenModal(!openModal)
        }
      }, [triggerUnFollow.data, profile.username])
  const triggerUnFollowModal = () => {
    setOpenModal(!openModal)
  }
  const renderFollowButton = () => {
    console.log("I still go here")
    if (Object.keys(triggerFollow.data).length == 0 && !following && !isFollowing) {
      console.log("why not me")
      return (
        <button className="follow" onClick={() => triggerFollowUser()}>
          <span className="spinner-loader-container text">Follow</span>
        </button>
      );
    }
  
    if (following && !triggerFollow.error) {
      return (
        <button className="follow">
          <span className="spinner-loader-container">
            <LoadingSpinner />
          </span>
        </button>
      );
    }
  
    if (!following && Object.keys(triggerFollow.data).length > 0) {
      console.log("Jacob")
      return (
        <button className="follow special-modal-client" onClick={() => triggerUnFollowModal()}>
          <span className="spinner-loader-container text special-modal-client">Following</span>
        </button>
      );
    }
  if(isFollowing && Object.keys(triggerUnFollow.data).length > 0){
    return (
      <button className="follow special-modal-client" onClick={() => triggerUnFollowModal()}>
        <span className="spinner-loader-container text special-modal-client">Following</span>
      </button>
    );
  }
    if (triggerFollow.error) {
      return (
        <button className="follow" onClick={() => triggerFollowUser()}>
          <span className="spinner-loader-container text">Follow</span>
        </button>
      );
    }
  
    return null; // Fallback in case no condition matches
  };
  const renderUnFollowButton = () => {
    if (Object.keys(triggerUnFollow.data).length === 0 && !unfollowing) {
      return (
        <button className="unfollow-button" onClick={() => triggerUnFollowUser()}>Unfollow</button>
      );
    }
  
    if (unfollowing && !triggerUnFollow.error) {
      return (
        <button className="unfollow-button">
          <span className="spinner-loader-container">
            <LoadingSpinner />
          </span>
        </button>
      );
    }
  
    if (!unfollowing && Object.keys(triggerUnFollow.data).length > 0) {
      return (
        <button className="unfollow-button">UnFollowed</button>
      );
    }
  
    if (triggerUnFollow.error) {
      return (
        <button className="unfollow-button" onClick={() => triggerUnFollowUser()}>
          <span className="spinner-loader-container text">Follow</span>
        </button>
      );
    }
  
    return null; // Fallback in case no condition matches
  }
  
  const previewUnfollowHtml = () => {
        
    return (
    <div
    className="unfollow-modal"
     style={{display : "flex", flexDirection : "column", justifyContent :"space-between", gap : "20px", fontFamily : "Poppins"}}>
  <section style={{display : "flex", flexDirection : "column", justifyContent : "space-between", textAlign : "left"}}>
 <div style={{fontWeight : "1000"}}>
 <h4>Unfollow @{profile.username}</h4>
 </div>
 <div style={{textAlign : "left"}}>
 Their posts will no longer show up frequently in your feed. You can still view their profile, unless their posts are protected. 
 </div>
    </section>
<section style={{display : "flex", flexDirection : "column", justifyContent : "space-between", textAlign : "center", gap : "10px"}}>
{renderUnFollowButton()}
<button className="unfollow-cancel-button" onClick={() => setOpenModal(!openModal)}>Cancel</button>
</section>
    
    </div>)
  }
  return (
   <>
   <FollowToast followToast={followToast} setFollowToast={setFollowToast} message={followToast.message}/>
   { isLoading ? <section style={{display : "flex", flexDirection : "column", gap : "6px", alignItems : "flex-start"}}>
   <div style={{display : "flex", flexDirection : "row", gap : "6px", alignItems : "center"}}>
<div className="profile-loader profile-loader-username"></div>
{/* <div className="profile-loader profile-loader-verification"></div> */}
<div className="profile-loader profile-loader-follow-button"></div>

</div>
<div  style={{display : "flex", flexDirection : "column", gap : "6px", alignItems : "flex-start"}}>
<div className="profile-loader profile-loader-title"></div>
<div className="profile-loader profile-loader-bio"></div>
</div>
   </section>
    :
<section>
<div style={{display : "flex", flexDirection : "row", alignItems : "center", gap : "10px" }}>


            <h2 className="litenote-profile-name">{profile["username"]} 
            {/* <FcRating style={{marginLeft : "1%"}} /> */}

          {/* <span className="checkbot">
    
          <FaCertificate style={{color : "#ff5e62", margin: "1%"}} />
            <FaCheck className="checkman"  size={14}/> 
          </span> */}
        
      
        
          </h2>
          <MdVerified style={{marginLeft : "1%", color : "black", fill : "#FF4B33"}} size={30}/>
          <span>{
          !imPossibleToFollow &&
          <>

<>
  {renderFollowButton()}
</>





            
          </>
    
        }
        </span>
        </div>
          <span><b>{profile.email}</b></span>
        <p className="litenote-profile-bio">{profile.bio}</p>
</section>
   }
<SpecialModal openModal={openModal} setOpenModal={setOpenModal}  content={previewUnfollowHtml()} />
   </>
  )
}

export default Bio