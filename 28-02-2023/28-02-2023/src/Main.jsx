import Hero from "./components/hero";
import Header from "./components/header";
import ListProducts from "./components/listProducts/ListProducts";
import Footer from "./components/footer";
import "./main.css";

const Main = () => {
  return (
    <div className="Main">
      <Hero title="S T O R E" />
      <Header title="S T O R E"/>
      <ListProducts />
      <Footer title="S T O R E" />
    </div>
  );
};

export default Main;
