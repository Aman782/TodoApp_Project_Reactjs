import Button from "./Button";

function Item({ itemText, onDelete }) {

  return (
      <div className="container d-flex justify-content-evenly align-items-center border border-3">
        <p className="fs-5 fw-semibold m-4">{itemText}</p>
        <Button BtnText={"Delete"} btnColor={"btn-danger"} onClick={onDelete}></Button>
      </div>
  );
}

export default Item;
