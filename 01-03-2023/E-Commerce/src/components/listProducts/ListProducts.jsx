// import { useEffect } from "react";
import {useState} from "react";
import CardProduct from "../cardProduct";
import List from "../list";
import Button from "../button"
import "./index.css";
import { isVisible } from "@testing-library/user-event/dist/utils";

const ListProducts = ({setSingleProductModal, listData}) => {
  // const [isListOpen, setListOpen] = useState(true);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [activeBtn, setActiveBtn] = useState(0);
  const [isVisible, setVisible] = useState(false);
  
  const onHandlePage = (min, max, index) => {
    setMin(min);
    setMax(max);
    setActiveBtn(index);
  };

  const onClick = () =>
  setVisible((prev) => !prev);
  console.log(isVisible);

  return (
    <div className="prod">
       <Button className="listButton" text="Lista dei Prodotti" clickFunc={onClick} />
      <div className="list_container">
       {isVisible ? listData.filter((product) => (product.id<15)).map((product) => (
       <List productData={product} key={product.id}  isVisible={isVisible} setVisible={setVisible}/>
      )): null} 
    </div>
    <div className="ListProducts">
      {listData.filter((product) => product.id > min && product.id <= max ).map((product) => (
        <CardProduct  productData={product} setSingleProductModal={setSingleProductModal} key={product.id}/>
      ))}
      <div className="ListProducts__pagination">
        {[...Array(listData.length / 10)].map((item,i)=> ( 
        <button 
        className={`${activeBtn === i && "active"}`}
        onClick={() => onHandlePage( i* 10, i * 10 +10, i)}
        >
          {i+1}
        </button>))}
      </div>
    </div>
    </div>
  );
};

export default ListProducts;
