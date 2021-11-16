import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function DeleteProductModal({ productId, productName }) {
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
            Are you sure you want to delete this product?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The product <strong>{productName}</strong> (id:{" "}
          <strong>{productId}</strong> ) and all the information in it will be
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

export default DeleteProductModal;
