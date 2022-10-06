function Modal(props) {
  function deleteHandler() {
    props.onClickDelete();
  }
  function remainHandler() {
    props.onClickRemain();
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn" onClick={remainHandler}>
        No
      </button>
      <button className="btn" onClick={deleteHandler}>
        Yes
      </button>
    </div>
  );
}
export default Modal;
