import "./index.css";
import {imagesList} from "./mocks/imagesList";

const Gallery = ({title}) => {

 let urlList = imagesList.map((image) =>(image.image))
 let start = 0
 let end = 1
 
 const interval= () => setInterval(function() { start++;end++;
  if (start >= urlList.length) {
  start = 0; end = 1} 
  
return (urlList.slice(start,end))

}, 1000);




  // console.log(slider())

  return (
    <div className="gallery">
     <img 
    src="https://www.smartworld.it/images/2022/07/11/apple-show-orig.png"
   alt={title} />
    </div>
  );
};

export default Gallery;



