import { useState } from "react";
import {imagesList} from "./mocks/imagesList";
import "./index.css";


//  let urlList = imagesList.map((image) =>(image.image))
//  let start = 0
//  let end = 1
 
//  const interval= () => setInterval(function() { start++;end++;
//   if (start >= urlList.length) {
//   start = 0; end = 1} 
  
// return (urlList.slice(start,end))

// }, 1000);




const Gallery = () => {
 let urlList = imagesList.map((image) =>(image.image))
  const [actualImg, setActualImg] = useState(0);

  return (
    <div className="gallery">
      <img src={urlList[actualImg]} alt="image" />
      <button className="left" onClick={() => setActualImg(actualImg >= 0 ? actualImg -1 : actualImg == urlList.length - 3, console.log(actualImg))}>{"<"}</button>
      <button className="right"onClick={() => setActualImg(actualImg < urlList.length - 3 ? actualImg +1 : actualImg == 0 , console.log(actualImg))}>{">"}</button>
    </div>
  );
};


export default Gallery;



