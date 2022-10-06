import { useState } from "react";
import Modal from "./modal";
import Background from "./background";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cardIsOpen, setCardIsOpen] = useState(true);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalDelete() {
    setModalIsOpen(false);
    setCardIsOpen(false);
  }
  function closeModalRemain() {
    setModalIsOpen(false);
  }
  return cardIsOpen ? (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal
          onClickDelete={closeModalDelete}
          onClickRemain={closeModalRemain}
        />
      )}
      {modalIsOpen && <Background onClick={closeModalRemain} />}
    </div>
  ) : null;
}
export default Todo;
