import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

function DeleteCategoryModal({ categoryId, categoryName, setCategories }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_URL_ADMIN_BACKEND}/categories`,
        {
          data: {
            id: categoryId,
          },
          headers: { "Content-Type": "application/json" },
        }
      );
      setCategories((prev) =>
        prev.filter((category) => category.id !== categoryId)
      );
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
            Are you sure you want to delete this category?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The category <strong>{categoryName}</strong> (id:{" "}
          <strong>{categoryId}</strong> ) and all the information in it will be
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

export default DeleteCategoryModal;
