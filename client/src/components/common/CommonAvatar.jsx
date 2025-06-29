
import { useState, useEffect } from "react"
import useImageLoad from "../../hooks/useImageLoaded"
const CommonAvatar = ({ image, ...props}) => {
  const [loading, setLoading] = useState(true)
  const { loaded, error } = useImageLoad(image);
  useEffect(() => {
    if (error) {
      console.log("dave")
setLoading(true)
    }
  
    if (loaded === true) {
      console.log("how")
    setLoading(false)
    }
  }, [loaded, error])
  return (
    <>{ loading ? 
      <div
       {...props}
       className="common-avatar"></div>
    :
    <img src={image} {...props}></img>
    }
    </>
  )
}

export default CommonAvatar