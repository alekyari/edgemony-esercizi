import CardProduct from "../cardProduct";
import List from "../list";
import Button from "../button"
import "./index.css";

const ListProducts = ({listData}) => {
  const onGetList = () =>
    alert(`Ci sono prodotti disponibili`);
  return (
    <div className="prod">
      <div className="list_container">
      {listData.map((product) => (
        <List productData={product} key={product.id} />
      ))}
    </div>
    <div className="ListProducts">
    <Button className="listButton" text="Disponibilità" clickFunc={onGetList} />
      {listData.map((product) => (
        <CardProduct  productData={product} key={product.id}/>
      ))}
    </div>
    </div>
  );
};

export default ListProducts;
