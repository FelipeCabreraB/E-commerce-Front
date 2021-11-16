import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function DeleteCategoryModal({ categoryId, categoryName }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-danger" onClick={handleShow}>
        <i class="far fa-trash-alt"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Are you sure you want to delete this category?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The category <strong>{categoryName}</strong> (id:{" "}
          <strong>{categoryId}</strong> ) and all the information in it will be
          erased.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteCategoryModal;
