import Button from"../button";
import"./index.css";

const Control = ({listDataLength}) => {
    const getProductsNum = () =>
    alert(`Il numero di prodotti corrrisponde a : ${listDataLength}`);

    return(
        <div className="Control">
            <Button text="Numero totale di prodotti" 
            clickFunc={getProductsNum}
             isDisabled={false}/>
        </div>
    )
};

export default Control;