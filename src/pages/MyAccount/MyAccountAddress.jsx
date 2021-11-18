import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyAccountMenu from "../../components/MyAccount/MyAccountMenu";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";

function MyAccountAdress() {
  const token = useSelector((state) => state.user.token);
  const [user, setUser] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const params = useParams();
  const [fullname, setFullname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_BACKEND}/user/${params.userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        setUser(response.data);
        setFullname(response.data.firstname + response.data.lastname);
        setFirstname(response.data.firstname);
        setLastname(response.data.lastname);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setAddress(response.data.address);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  const handleUpdate = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios({
        method: "patch",
        url: `${process.env.REACT_APP_URL_BACKEND}/users`,
        data: {
          id: params.userId,
          firstname,
          lastname,
          email,
          phone,
          address,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      if (response.data.success) {
        setSuccessMessage(response.data.success);
      }
      if (response.data.error) {
        setErrorMessage(response.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col sm={3}>
            <MyAccountMenu />
          </Col>
          <Col className="myAccountResponsive" sm={9}>
            <h3>BILLING ADDRESS</h3>
            <form className="mt-3" onSubmit={(ev) => handleUpdate(ev)}>
              <label
                className="form-label"
                htmlFor="fullname"
                style={{ fontSize: "0.85rem" }}
              >
                Full name *
              </label>
              <input
                className="form-control"
                type="text"
                id="fullname"
                name="fullname"
                value={firstname + " " + lastname}
                onChange={(ev) => setFullname(ev.target.value)}
                required
              />
              <label
                className="form-label mt-3"
                htmlFor="phone"
                style={{ fontSize: "0.85rem" }}
              >
                Phone number *
              </label>
              <input
                className="form-control"
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={(ev) => setPhone(ev.target.value)}
                required
              />
              <label
                className="form-label mt-3"
                htmlFor="email"
                style={{ fontSize: "0.85rem" }}
              >
                Email address *
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                required
              />
              <label
                className="form-label mt-3"
                htmlFor="deliveryAdress"
                style={{ fontSize: "0.85rem" }}
              >
                Delivery address *
              </label>
              <input
                className="form-control"
                type="text"
                id="deliveryAdress"
                name="deliveryAdress"
                value={address}
                onChange={(ev) => setAddress(ev.target.value)}
                required
              />

              <button
                type="submit"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "0.65rem",
                }}
                className="btn px-4 mt-4 py-2"
              >
                <strong>SAVE ADDRESS</strong>
              </button>
              <p className="text-success text-center mt-3">
                {" "}
                <strong>{successMessage}</strong>{" "}
              </p>
              <p className="text-danger text-center mt-3">
                {" "}
                <strong>{errorMessage}</strong>{" "}
              </p>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyAccountAdress;
