import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";

function DeleteProductModal({ productId, productName, setProducts }) {
  const token = useSelector((state) => state.user.token);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    try {
      // eslint-disable-next-line
      const response = await axios.delete(
        `${process.env.REACT_APP_URL_ADMIN_BACKEND}/products`,
        {
          data: {
            id: productId,
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      setProducts((prev) => prev.filter((product) => product.id !== productId));
    } catch (error) {
      console.log(error);
    }
  };

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
          <Button
            variant="dark"
            onClick={() => {
              handleClose();
              handleDelete();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteProductModal;
