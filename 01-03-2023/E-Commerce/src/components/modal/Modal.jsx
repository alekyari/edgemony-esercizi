import Button from "../button";
import "./index.css";

const Modal = ({ setModalOpen }) => {
  return (
    <div className="Modal">
      <div className="Modal__content">
        <h3>Per visitare il sito è necessario accettare i cookies!</h3>
        <div className="Modal__content--btns">
          <Button
            text="Annulla"
            clickFunc={() => alert("Se non accetti non entri")}
          />
          <Button
            text="Conferma"
            clickFunc={() => setModalOpen((prev) => false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
