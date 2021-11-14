import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

function AccordionCheckOut() {
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const dispatch = useDispatch();

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
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="mt-2 py-0 ms-2">
            Click here to Login
          </Accordion.Header>
          <Accordion.Body>
            <div className="border p-4">
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
                <label className="form-label mt-2" htmlFor="password">
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
                  <Link className="text-black" to="/lost-password">
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
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default AccordionCheckOut;
