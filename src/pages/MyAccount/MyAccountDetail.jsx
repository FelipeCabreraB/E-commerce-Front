import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyAccountMenu from "../../components/MyAccount/MyAccountMenu";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";

function MyAccountDetail() {
  const token = useSelector((state) => state.user.token);
  const handleClose = () => "";
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const params = useParams();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [messageCheckFirstName, setMessageCheckFirstName] = useState("");
  const [messageCheckLastName, setMessageCheckLastName] = useState("");
  const [messageCheckEmail, setMessageCheckEmail] = useState("");
  const [messageCheckPhone, setMessageCheckPhone] = useState("");

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
        setFirstname(response.data.firstname);
        setLastname(response.data.lastname);
        setEmail(response.data.email);
        setPhone(response.data.phone);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [params.userId, token]);

  const handleUpdate = async (ev) => {
    ev.preventDefault();
    try {
      if (newPassword !== "" && newPassword === confirmPassword) {
        const response = await axios({
          method: "patch",
          url: `${process.env.REACT_APP_URL_BACKEND}/users`,
          data: {
            id: params.userId,
            firstname,
            lastname,
            email,
            phone,
            newPassword,
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        });
        if (response.data.success) {
          setSuccessMessage(response.data.success);
          setErrorMessage("");
        }
        if (response.data.error) {
          setErrorMessage(response.data.error);
        }
      } else if (
        newPassword !== "" &&
        confirmPassword !== "" &&
        newPassword !== confirmPassword
      ) {
        setErrorMessage("Please verify that the two passwords match");
      } else {
        const response = await axios({
          method: "patch",
          url: `${process.env.REACT_APP_URL_BACKEND}/users`,
          data: {
            id: params.userId,
            firstname,
            lastname,
            email,
            phone,
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        });
        if (response.data.success) {
          setSuccessMessage(response.data.success);
          setErrorMessage("");
        }
        if (response.data.error) {
          setErrorMessage(response.data.error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleValidation = async () => {
    setMessageCheckFirstName("");
    setMessageCheckLastName("");
    setMessageCheckEmail("");
    setMessageCheckPhone("");

    if (!/^[0-9]{8,9}$/.test(phone)) {
      setMessageCheckPhone(
        "Please check the phone number, it must have a valid format."
      );
    }

    if (
      !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        email
      )
    ) {
      setMessageCheckEmail(
        "Please check the email, it must have a valid format."
      );
    }
    if (firstname.length < 3) {
      setMessageCheckFirstName(
        "Please check the first name, it must have at least 3 characters."
      );
    }
    if (lastname.length < 3) {
      setMessageCheckLastName(
        "Please check the last name, it must have at least 3 characters."
      );
    }
  };

  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col sm={12} md={2}>
            <div className="sticky-top">
              <MyAccountMenu handleClose={handleClose} />
            </div>
          </Col>
          <Col className="myAccountResponsive" sm={9}>
            <h3>
              ACCOUNT DETAILS
              {/* (Id: {user.id}) */}
            </h3>
            <form className="mt-3" onSubmit={(ev) => handleUpdate(ev)}>
              <label
                className="form-label"
                htmlFor="firstname"
                style={{ fontSize: "0.85rem" }}
              >
                First name *
              </label>
              <input
                className="form-control"
                type="text"
                id="firstname"
                name="firstname"
                value={firstname}
                onChange={(ev) => setFirstname(ev.target.value)}
                required
              />
              <label
                className="form-label"
                htmlFor="lastname"
                style={{ fontSize: "0.85rem" }}
              >
                Last name *
              </label>
              <input
                className="form-control"
                type="text"
                id="lastname"
                name="lastname"
                value={lastname}
                onChange={(ev) => setLastname(ev.target.value)}
                required
              />
              <label
                className="form-label mt-3"
                htmlFor="phone"
                style={{ fontSize: "0.85rem" }}
              >
                Phone number *
              </label>
              {phone !== "" ? (
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
                Email address *
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
              <p className="mt-4 mb-0">
                {" "}
                <strong>Do you want to change your password?</strong>
              </p>
              <label
                className="form-label mt-3"
                htmlFor="newPassword"
                style={{ fontSize: "0.85rem" }}
              >
                New password *
              </label>
              <input
                className="form-control"
                type="password"
                id="newPassword"
                name="newPassword"
                value={newPassword}
                onChange={(ev) => setNewPassword(ev.target.value)}
              />
              <label
                className="form-label mt-3"
                htmlFor="confirmPassword"
                style={{ fontSize: "0.85rem" }}
              >
                Confirm new password *
              </label>
              <input
                className="form-control"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(ev) => setConfirmPassword(ev.target.value)}
              />
              {firstname.length >= 3 &&
              lastname.length >= 3 &&
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
                email
              ) &&
              /^[0-9]{8,9}$/.test(phone) ? (
                <button
                  type="submit"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    fontSize: "0.65rem",
                  }}
                  className="btn px-4 mt-4 py-2"
                >
                  <strong>SAVE CHANGES</strong>
                </button>
              ) : (
                <button
                  type="submit"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    fontSize: "0.65rem",
                  }}
                  onClick={(ev) => {
                    ev.preventDefault();
                    console.log(handleValidation());
                    handleValidation();
                  }}
                  className="btn px-4 mt-4 py-2"
                >
                  <strong>SAVE CHANGES</strong>
                </button>
              )}
              <p className="text-success text-center mt-3">
                {" "}
                <strong>{successMessage}</strong>{" "}
              </p>
              <p className="text-danger text-center mt-3">
                {" "}
                <strong>{errorMessage}</strong>{" "}
              </p>
              <p className="text-danger mt-3" style={{ fontSize: "0.7rem" }}>
                {messageCheckFirstName}
              </p>
              <p className="text-danger mt-3" style={{ fontSize: "0.7rem" }}>
                {messageCheckLastName}
              </p>
              <p className="text-danger mt-3" style={{ fontSize: "0.7rem" }}>
                {messageCheckPhone}
              </p>
              <p className="text-danger mt-3" style={{ fontSize: "0.7rem" }}>
                {messageCheckEmail}
              </p>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyAccountDetail;
