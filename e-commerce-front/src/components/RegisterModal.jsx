import { Offcanvas, Tabs, Tab, Button } from "react-bootstrap";
import { useState } from "react";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [key, setKey] = useState("home");

  return (
    <>
      <i className="far fa-user pointer" onClick={handleShow}></i>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <div className="d-flex">
          <div className=" px-2 mt-3 ms-2 pointer" onClick={handleClose}>
            <i className="fas fa-times"></i>
          </div>
        </div>

        <Offcanvas.Header className="d-flex justify-content-center">
          <Offcanvas.Title>
            <div className="text-center mt-4">
              <i className="far fa-user pointer"></i>
            </div>
            <div>MY ACCOUNT</div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Home">
              fsdfdfsd
            </Tab>
            <Tab eventKey="profile" title="Profile">
              dfgsdfgfhg
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              dfhdgjghjhgj
            </Tab>
          </Tabs>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
function RegisterModal() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default RegisterModal;
