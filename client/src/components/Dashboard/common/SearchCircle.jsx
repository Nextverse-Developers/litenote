import { FaSearch } from "react-icons/fa"
const SearchCircle = ({ clickMe }) => {
  console.log(clickMe)
  return (
    <div className="plus-button" onClick={clickMe}>
    <FaSearch size={20} onClick={clickMe}/>
   
</div>
  )
}

export default SearchCircle