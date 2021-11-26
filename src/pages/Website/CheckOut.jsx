import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

function CheckOut() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [messageCheckEmail, setMessageCheckEmail] = useState("");
  const [messageCheckPhone, setMessageCheckPhone] = useState("");
  const [messageCheckFullName, setMessageCheckFullName] = useState("");
  const [messageCheckDelivery, setMessageCheckDelivery] = useState("");

  const handleValidation = async () => {
    setMessageCheckEmail("");
    setMessageCheckPhone("");
    setMessageCheckFullName("");
    setMessageCheckDelivery("");
    if (
      !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        email
      )
    ) {
      setMessageCheckEmail(
        "Please check the email, it must have a valid format."
      );
    }
    if (!/^[0-9]{8,9}$/.test(phone)) {
      setMessageCheckPhone(
        "Please check the phone number, it must have a valid format."
      );
    }
    if (fullName.length < 5) {
      setMessageCheckFullName(
        "Please check the Full Name, it must have at least 5 characters."
      );
    }
    if (deliveryAddress < 5) {
      setMessageCheckDelivery(
        "Please check the Delivery Address, it must have at least 5 characters."
      );
    }
  };

  return (
    <div>
      <div className="container">
        <div className="mb-5">
          <p className="mt-5">
            <strong>BILLING INFORMATION</strong>
          </p>
          <hr />

          <Form>
            <Row>
              <Col>
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
              </Col>
              <Col>
                <label
                  className="form-label"
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
                      <p
                        className="text-success mt-1"
                        style={{ fontSize: "0.7rem" }}
                      >
                        Valid Email Format
                      </p>
                    ) : (
                      <p
                        className="text-danger mt-1"
                        style={{ fontSize: "0.7rem" }}
                      >
                        Invalid Email Format
                      </p>
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
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}>
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
                  required
                />
                <p className="text-danger mt-2" style={{ fontSize: "0.7rem" }}>
                  * Required fields
                </p>
              </Col>
              <Col md={6} sm={12}>
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
                      <p
                        className="text-success mt-1"
                        style={{ fontSize: "0.7rem" }}
                      >
                        Valid Phone Format
                      </p>
                    ) : (
                      <p
                        className="text-danger mt-1"
                        style={{ fontSize: "0.7rem" }}
                      >
                        Invalid Phone Format
                      </p>
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
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}>
                <div>
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
                </div>
              </Col>
              <Col className="text-end" md={6} sm={12}>
                {/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
                  email
                ) &&
                /^[0-9]{8,9}$/.test(phone) &&
                fullName.length >= 5 &&
                deliveryAddress.length >= 5 ? (
                  <Link to="/checkout/card-information">
                    <Button
                      variant="dark"
                      type="button"
                      className="rounded-pill mt-2"
                    >
                      Proceed to final step{" "}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="dark"
                    type="button"
                    className="rounded-pill mt-2"
                    onClick={() => {
                      handleValidation();
                    }}
                  >
                    Proceed to final step{" "}
                  </Button>
                )}
              </Col>
            </Row>
            <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
              <p className="mt-4 py-0 align-self-center">
                <i class="fas fa-less-than"></i> Return to cart
              </p>
            </Link>
          </Form>
          <p className="text-danger mt-3" style={{ fontSize: "0.7rem" }}>
            {messageCheckFullName}
          </p>
          <p className="text-danger mt-3" style={{ fontSize: "0.7rem" }}>
            {messageCheckDelivery}
          </p>
          <p className="text-danger mt-3" style={{ fontSize: "0.7rem" }}>
            {messageCheckEmail}
          </p>
          <p className="text-danger mt-3" style={{ fontSize: "0.7rem" }}>
            {messageCheckPhone}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
