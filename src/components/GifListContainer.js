import { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer(){
    const [getGif , setGif] = useState([])
    function handleSubmit(search){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=SB9gYyYaOteS0c7QFT8FeRNXoDFz1p1a`)
        .then((response) => response.json())
        .then((data) => setGif(data.data))
    }
    console.log(getGif)
    const sliced = getGif.slice(0, 3)
    return(
        <>
        <GifSearch handleSubmit = {handleSubmit} />
        <GifList gif={sliced}/>
        </>
    )
}

export default GifListContainer