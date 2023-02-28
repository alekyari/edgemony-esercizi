import "./index.css";

const List = ({ productData }) => {
  return (
    <div className="SingleProduct">
        <p>{productData.title}</p>
      </div>
  );
};

export default List;
