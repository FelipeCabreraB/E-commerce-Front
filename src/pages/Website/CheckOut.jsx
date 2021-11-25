import { Row, Col } from "react-bootstrap";
import AccordionCheckOut from "../../components/Checkout/AccordionCheckOut";
import { useSelector } from "react-redux";
import { useState } from "react";

function CheckOut() {
  // const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  return (
    <div>
      <div className="container">
        <Row className="mb-4">
          <Col sm={7}>
            {!user.token && (
              <div className="mt-5 border p-3">
                <i className="far fa-user me-2"></i> Already have an account?
                <span className="ms-2 pointer">
                  <AccordionCheckOut />
                </span>
              </div>
            )}

            <p className="mt-5">
              <strong>BILLING INFORMATION</strong>
            </p>
            <hr />

            <form>
              <label
                className="form-label"
                htmlFor="fullname"
                style={{ fontSize: "0.85rem" }}
              >
                Full name <span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                id="fullname"
                name="fullname"
                value={fullName}
                onChange={(ev) => setFullName(ev.target.value)}
              />

              <label
                className="form-label mt-3"
                htmlFor="phone"
                style={{ fontSize: "0.85rem" }}
              >
                Phone <span className="text-danger">*</span>
              </label>
              {phone !== "" ? (
                <div>
                  {" "}
                  <input
                    className="form-control"
                    type="phone"
                    id="phone"
                    name="email"
                    value={phone}
                    onChange={(ev) => setPhone(ev.target.value)}
                  />
                  {/^[0-9]{8,9}$/.test(phone) ? (
                    <p className="text-success">Valid Phone</p>
                  ) : (
                    <p className="text-danger">Invalid Phone</p>
                  )}
                </div>
              ) : (
                <div>
                  {" "}
                  <input
                    className="form-control"
                    type="phone"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(ev) => setPhone(ev.target.value)}
                  />
                </div>
              )}

              <label
                className="form-label mt-3"
                htmlFor="email"
                style={{ fontSize: "0.85rem" }}
              >
                Email address <span className="text-danger">*</span>
              </label>

              {email !== "" ? (
                <div>
                  {" "}
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                  />
                  {/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
                    email
                  ) ? (
                    <p className="text-success">Valid Email</p>
                  ) : (
                    <p className="text-danger">Invalid Email</p>
                  )}
                </div>
              ) : (
                <div>
                  {" "}
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                  />
                </div>
              )}
              <label
                className="form-label mt-3"
                htmlFor="deliveryAdress"
                style={{ fontSize: "0.85rem" }}
              >
                Delivery address <span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                id="deliveryAdress"
                name="deliveryAdress"
                value={deliveryAddress}
                onChange={(ev) => setDeliveryAddress(ev.target.value)}
              />
              <p className="text-danger mt-2" style={{ fontSize: "0.7rem" }}>
                * Required fields
              </p>
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                value="newsletter"
                className="mt-4"
              />
              <label
                className="ms-2"
                for="newsletter"
                style={{ fontSize: "0.9rem" }}
              >
                RECEIVE OUR NEWSLETTER
              </label>
            </form>
          </Col>
          <Col sm={5}></Col>
        </Row>
      </div>
    </div>
  );
}

export default CheckOut;
