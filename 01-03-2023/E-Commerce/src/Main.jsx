import { productsList } from "./mocks/productsList";
import Hero from "./components/hero";
import Header from "./components/header";
import Control from "./components/control";
import ListProducts from "./components/listProducts/ListProducts";
import Footer from "./components/footer";
import "./main.css";
import Gallery from "./components/gallery/Gallery";

const Main = () => {
  return (
    <div className="Main">
      <Hero title="S T O R E" />
      <Header title="S T O R E"/>
      <Gallery />
      <Control listDataLength={productsList.length} />     
      <ListProducts listData={productsList} />
      <Footer title="S T O R E" />
    </div>
  );
};

export default Main;
