import { useState } from "react"

export function LikeButton (){

    let [isLiked, setIsLiked] = useState(false);
    let [count, setCount] = useState(0);

    let toogleLike = () =>{
        setIsLiked(!isLiked);
        setCount(count+1);
    }

    let likeStyle = {color : "red"};
    return(
       <div>
        <p>Count is {count}</p>
          <p onClick={toogleLike}>
            {
                isLiked ? (
                <i className="fa-solid fa-heart" style={likeStyle}></i>
                ):(
                <i className="fa-regular fa-heart"></i>)
            }
             
          </p>
       </div>
    )
}