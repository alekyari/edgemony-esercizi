import { useState } from "react";
import { useEffect } from "react";
// import { productsList } from "./mocks/productsList" e importata come prop listData={productsList};
import Hero from "./components/hero";
import Header from "./components/header";
import NightSunMode from "./components/nightSunMode";
import Control from "./components/control";
import ListProducts from "./components/listProducts/ListProducts";
import Footer from "./components/footer";
import Gallery from "./components/gallery/Gallery";
import ImageProduct from "./components/imageProduct/ImageProduct";
import Modal from "./components/modal";
import "./main.css";

const Main = () => {
  const [isDarkMode, setDarkMode] = useState(true);
  const [isModalOpen, setModalOpen] = useState(true);
  const [singleProductModal, setSingleProductModal] = useState(null);
  const [listData, setListData] = useState([]);

        useEffect(()=> {
        fetch("https://dummyjson.com/products?limit=100").then(res=>res.json()).then((data)=> setListData(data.products));
         },[]);

  return (
    <div className={`Main ${isDarkMode && "dark-mode"}`}>
      <Hero title="S T O R E" />
      <NightSunMode setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
      <Header title="S T O R E"/>
      <Gallery />
      <Control listDataLength={listData.length} />     
      <ListProducts setSingleProductModal={setSingleProductModal} listData={listData}/>
      <Footer title="S T O R E" />
      {isModalOpen ? <Modal setModalOpen={setModalOpen} /> : null}
      {singleProductModal ? (
        <ImageProduct
          product={singleProductModal}
          setSingleProductModal={setSingleProductModal}
        />
      ) : null}
    </div>
  );
};

export default Main;
