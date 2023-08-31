function GifList({gif}){
    console.log(gif)
    return(
       <ul>
        {gif.map((item) =>(
            <li key ={item.id}>
                <img src = {item.images.original.url} />
                <p>{gif.title}</p>
            </li>
        ))}
        
       </ul>
    )
}
export default GifList;