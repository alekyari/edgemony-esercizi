import { useState } from "react";
import "./index.css";

const ImageProduct = ({ product, setSingleProductModal }) => {
  const [actualImg, setActualImg] = useState(0);

  return (
    <div className="ImageProduct">
      <div
        className="ImageProduct__overlay"
        onClick={() => setSingleProductModal(null)}
      ></div>
   <div className="modal_gallery">
      <img src={product.images[actualImg]} alt={product.title} />
      <button className="left" onClick={() => setActualImg(actualImg >= 0 ? actualImg -1 : actualImg === product.images.length - 3, console.log(actualImg))}>{"<"}</button>
      <button className="right"onClick={() => setActualImg(actualImg < product.images.length - 3 ? actualImg +1 : actualImg === 0 , console.log(actualImg))}>{">"}</button>
    </div>
    </div>
  );
};

export default ImageProduct;
