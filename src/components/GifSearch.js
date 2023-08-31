import { useState } from "react";
function GifSearch({handleSubmit}){
    const [searchTerm, setSearchTerm] = useState("");

    function handleSearchSubmit(event){
        event.preventDefault()
        handleSubmit(searchTerm)
    }
    function handleChange(event){
        setSearchTerm(event.target.value)
    }
   
    return(
        <form onSubmit={handleSearchSubmit}>
            <input type="text" placeholder="Search for gifs..." value={searchTerm} onChange={handleChange}/>
            <button type="submit">Search</button>
        </form>
    )
}
export default GifSearch