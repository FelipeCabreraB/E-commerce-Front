import { useState } from "react";
import { Button, Modal, Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";

function ChangeStatusOrderModal({ orderId, setLaunch, launch }) {
  const [statusOrder, setStatusOrder] = useState("Select the new status");
  const token = useSelector((state) => state.user.token);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeStatus = async () => {
    try {
      const response = await axios({
        method: "patch",
        url: `${process.env.REACT_APP_URL_ADMIN_BACKEND}/orders`,
        data: {
          orderId: orderId,
          newStatus: statusOrder,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      if (response.data.success) {
        setLaunch(!launch);
      }
      //if (response.data.error) {
      //  setErrorMessage(response.data.error);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Change Status
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Id: {orderId}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className="rounded-0 border-dark my-3"
            >
              {statusOrder}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  setStatusOrder("Completed");
                }}
              >
                Completed
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setStatusOrder("Pending");
                }}
              >
                Pending
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setStatusOrder("Cancelled");
                }}
              >
                Cancelled
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="dark"
            onClick={() => {
              handleClose();
              handleChangeStatus();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChangeStatusOrderModal;
