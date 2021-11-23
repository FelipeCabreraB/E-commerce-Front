import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";
import AdminMenu from "../../components/Admin/AdminMenu";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

function AddNewUser() {
  const token = useSelector((state) => state.user.token);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const params = useParams();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const handleUpdate = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_URL_ADMIN_BACKEND}/users`,
        data: {
          id: params.userId,
          firstname,
          lastname,
          email,
          address,
          phone,
          role,
          password,
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
      <Container className="py-3  ">
        <Row>
          <Col sm={12} md={2}>
            <div className="sticky-top">
              <AdminMenu />
            </div>
          </Col>
          <Col className="myAccountResponsive" sm={12} md={10}>
            <h3 className="my-3">Create new user</h3>
            <Form
              className="border px-5 pb-5 pt-3"
              onSubmit={(ev) => handleUpdate(ev)}
            >
              <Row>
                <Col>
                  <label className="form-label mt-2" htmlFor="firstname">
                    First Name
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
                </Col>
                <Col>
                  <label className="form-label mt-2" htmlFor="lastname">
                    Last Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={lastname}
                    onChange={(ev) => setLastname(ev.target.value)}
                  ></input>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label className="form-label mt-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                  />
                </Col>
                <Col>
                  <label className="form-label mt-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                  />
                </Col>
              </Row>
              <label className="form-label mt-2" htmlFor="address">
                Address
              </label>
              <input
                className="form-control"
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(ev) => setAddress(ev.target.value)}
              />

              <Row>
                <Col>
                  <label className="form-label mt-2" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(ev) => setPhone(ev.target.value)}
                  />
                </Col>
                <Col>
                  <label className="form-label mt-2" htmlFor="role">
                    Role
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="role"
                    name="role"
                    value={role}
                    onChange={(ev) => setRole(ev.target.value)}
                  />
                </Col>
              </Row>
              <Button
                type="submit"
                variant="dark"
                style={{ float: "right", margin: "1rem" }}
              >
                Confirm create
              </Button>
              {successMessage !== "" && (
                <div>
                  <p className="text-success text-center">
                    {" "}
                    <strong>{successMessage}</strong>{" "}
                  </p>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/admin/users/1"
                  >
                    <p className="mt-4 py-0 align-self-center">
                      <i class="fas fa-less-than"></i> Return
                    </p>
                  </Link>
                </div>
              )}

              <p className="text-danger text-center">
                {" "}
                <strong>{errorMessage}</strong>{" "}
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddNewUser;
