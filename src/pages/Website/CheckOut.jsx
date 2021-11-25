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

  const handleValidation = async () => {
    setMessageCheckEmail("");
    setMessageCheckPhone("");
    if (
      !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        email
      )
    ) {
      setMessageCheckEmail("Please check the email address");
    }
    if (!/^[0-9]{8,9}$/.test(phone)) {
      setMessageCheckPhone("Please check the phone number");
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
              </Col>
            </Row>
            <Row>
              <Col>
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
              <Col>
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
              </Col>
            </Row>
            <div className="d-flex justify-content-between">
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
              {/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
                email
              ) && /^[0-9]{8,9}$/.test(phone) ? (
                <Link to="/checkout/card-information">
                  <Button variant="dark" type="button" className="rounded-pill">
                    Proceed to final step{" "}
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="dark"
                  type="button"
                  className="rounded-pill"
                  onClick={() => {
                    handleValidation();
                  }}
                >
                  Proceed to final step{" "}
                </Button>
              )}
            </div>
          </Form>
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
