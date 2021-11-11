import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

function AccordionCheckOut() {
  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="mt-2 py-0 ms-2">
            Click here to Login
          </Accordion.Header>
          <Accordion.Body>
            <div className="border p-4">
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
                  <Link className="text-black" to="/lost-password">
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
