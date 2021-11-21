import { Offcanvas, Tab, Row, Col, Nav } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import MyAccountMenu from "../MyAccount/MyAccountMenu";

function OffCanvasExample({ name, ...props }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [show, setShow] = useState(false);
  const [errorRegister, setErrorRegister] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRegister = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL_BACKEND}/register`,
        {
          data: { emailReg, passwordReg },
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.data);
      if (response.data.token) {
        dispatch({ type: "ADD_TOKEN", payload: response.data });
        handleClose();
        setErrorRegister("");
      } else if (response.data.error) {
        setErrorRegister(response.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL_BACKEND}/login`,
        {
          data: { emailLog, passwordLog },
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.token) {
        dispatch({ type: "ADD_TOKEN", payload: response.data });
        handleClose();
        setErrorLogin("");
      } else if (response.data.error) {
        setErrorLogin(response.data.error);
      }
    } catch (error) {
      //handle error
      console.log("error ", error);
    }
  };

  return (
    <>
      {user.token ? (
        <Nav.Link onClick={handleShow}>
          <i
            id="userLogoNavbar"
            className="far fa-user pointer"
            style={{ color: "black" }}
          >
            <div id="welcomeEmailNavbar" className="numberOfCart text-center">
              <i class="fas fa-check-circle"></i>
            </div>
          </i>
        </Nav.Link>
      ) : (
        <Nav.Link onClick={handleShow}>
          <i className="far fa-user pointer" style={{ color: "black" }}></i>{" "}
        </Nav.Link>
      )}

      <Offcanvas
        show={show}
        onHide={() => {
          handleClose();
          setErrorLogin("");
          setErrorRegister("");
        }}
        {...props}
      >
        <div className="d-flex">
          <div
            className=" px-2 mt-3 ms-2 pointer"
            onClick={() => {
              handleClose();
              setErrorLogin("");
              setErrorRegister("");
            }}
          >
            <i className="fas fa-times ms-2"></i>
          </div>
        </div>

        <Offcanvas.Header className="d-flex flex-column justify-content-center">
          <Offcanvas.Title>
            <div className="text-center mt-4">
              <i className="far fa-user pointer"></i>
            </div>
            <div>MY ACCOUNT</div>
          </Offcanvas.Title>
          <p>{user.email}</p>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {user.token ? (
            <div className="px-3">
              <MyAccountMenu handleClose={handleClose} />
            </div>
          ) : (
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
                      <Nav.Link
                        className="text-black pointer"
                        eventKey="second"
                      >
                        LOGIN
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>

                <Col>
                  <Tab.Content className="px-3 mt-3">
                    <Tab.Pane eventKey="first">
                      <form onSubmit={(ev) => handleRegister(ev)}>
                        <label className="form-label" htmlFor="email">
                          Email address *
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          id="email"
                          name="email"
                          value={emailReg}
                          onChange={(ev) => setEmailReg(ev.target.value)}
                          required
                        />
                        {errorRegister !== "" && (
                          <p
                            className="text-danger mb-0 mt-1"
                            style={{ fontSize: "0.8rem" }}
                          >
                            * {errorRegister}
                          </p>
                        )}
                        <label className="form-label mt-3" htmlFor="password">
                          Password *
                        </label>
                        <input
                          className="form-control mb-3"
                          type="password"
                          id="password"
                          name="password"
                          value={passwordReg}
                          onChange={(ev) => setPasswordReg(ev.target.value)}
                          required
                        />
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
                            type="submit"
                            style={{
                              backgroundColor: "black",
                              color: "white",
                              fontSize: "12px",
                              width: "100%",
                            }}
                            className="btn rounded-pill mt-5 px-5 py-2"
                          >
                            REGISTER
                          </button>
                        </div>
                      </form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <form onSubmit={(ev) => handleLogin(ev)}>
                        <label className="form-label" htmlFor="email">
                          Email address *
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="email"
                          name="email"
                          value={emailLog}
                          onChange={(ev) => setEmailLog(ev.target.value)}
                          required
                        />
                        <label className="form-label mt-3" htmlFor="password">
                          Password *
                        </label>
                        <input
                          className="form-control mb-3"
                          type="password"
                          id="password"
                          name="password"
                          value={passwordLog}
                          onChange={(ev) => setPasswordLog(ev.target.value)}
                          required
                        />
                        {errorLogin !== "" && (
                          <p
                            className="text-danger mb-3 mt-0"
                            style={{ fontSize: "0.8rem" }}
                          >
                            * {errorLogin}
                          </p>
                        )}
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
                          <Link
                            className="text-black"
                            to="/lost-password"
                            onClick={() => handleClose()}
                          >
                            Lost password?
                          </Link>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            type="submit"
                            style={{
                              backgroundColor: "black",
                              color: "white",
                              fontSize: "12px",
                              width: "100%",
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
          )}
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
