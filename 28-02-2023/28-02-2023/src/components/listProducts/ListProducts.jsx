import { productsList } from "../../mocks/productsList";
import CardProduct from "../cardProduct";
import List from "../list/List";
import "./index.css";

const ListProducts = () => {
  return (
    <div className="prod">
      <div className="list_container">
      {productsList.map((product) => (
        <List productData={product} />
      ))}
    </div>
    <div className="ListProducts">
      {productsList.map((product) => (
        <CardProduct productData={product} />
      ))}
    </div>
    </div>
  );
};

export default ListProducts;
