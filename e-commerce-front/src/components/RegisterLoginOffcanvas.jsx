import { Offcanvas, Tab, Row, Col, Nav } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow}>
        <i className="far fa-user pointer"></i>
      </Nav.Link>
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
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="gx-0">
              <Col sm={6}>
                <Nav variant="tabs" className="flex-column text-center">
                  <Nav.Item>
                    <Nav.Link className="text-black pointer" eventKey="first">
                      REGISTER
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={6}>
                <Nav variant="tabs" className="flex-column text-center">
                  <Nav.Item>
                    <Nav.Link className="text-black pointer" eventKey="second">
                      LOGIN
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col>
                <Tab.Content className="px-3 mt-3">
                  <Tab.Pane eventKey="first">
                    <form>
                      <label className="form-label" htmlFor="email">
                        Email address *
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        id="email"
                        name="email"
                      />
                      <p className="mt-2" style={{ fontSize: "12px" }}>
                        A password will be sent to your email address.
                      </p>
                      <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        value="newsletter"
                      />
                      <label className="ms-2" for="newsletter">
                        RECEIVE OUR NEWSLETTER
                      </label>
                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            fontSize: "12px",
                          }}
                          className="btn rounded-pill mt-5 px-5 py-2"
                        >
                          REGISTER
                        </button>
                      </div>
                    </form>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <form>
                      <label className="form-label" htmlFor="usernameOrEmail">
                        Username or email address *
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="usernameOrEmail"
                        name="usernameOrEmail"
                      />
                      <label className="form-label mt-2" htmlFor="password">
                        Password *
                      </label>
                      <input
                        className="form-control mb-3"
                        type="password"
                        id="password"
                        name="password"
                      />
                      <div className="d-flex justify-content-between">
                        <div>
                          <input
                            type="checkbox"
                            id="remember"
                            name="remember"
                            value="remember"
                          />
                          <label className="ms-2" for="remember">
                            Remember
                          </label>
                        </div>
                        <Link className="text-black" to="/">
                          Lost password?
                        </Link>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            fontSize: "12px",
                          }}
                          className="btn rounded-pill mt-5 px-5 py-2"
                        >
                          LOG IN
                        </button>
                      </div>
                    </form>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
function RegisterLoginOffcanvas() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default RegisterLoginOffcanvas;
