import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import AdminMenu from "../../components/Admin/AdminMenu";
import { useParams } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";

function EditUser() {
  const token = useSelector((state) => state.user.token);
  const [user, setUser] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const params = useParams();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  // const [roleType, setRoleType] = useState("Choose an option");
  // const [selectRoleType, setSelectRoleType] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_ADMIN_BACKEND}/users/${params.userId}`,
          {
            headers: { "Content-Type": "application/json" },
            Authorization: "Bearer " + token,
          }
        );
        setUser(response.data);
        setFirstname(response.data.firstname);
        setLastname(response.data.lastname);
        setEmail(response.data.email);
        setAddress(response.data.address);
        setPhone(response.data.phone);
        setRole(response.data.role);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  const handleUpdate = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_URL_ADMIN_BACKEND}/users/`,
        {
          data: {
            id: params.userId,
            firstname,
            lastname,
            email,
            address,
            phone,
            role,
          },
          headers: { "Content-Type": "application/json" },
        }
      );
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
      <Container fluid className="py-3  ">
        <Row>
          <Col sm={12} md={2}>
            <AdminMenu />
          </Col>
          <Col className="myAccountResponsive" sm={12} md={10}>
            <h3 className="my-3">
              Edit user (Id: <strong>{user.id}</strong>, First Name:{" "}
              <strong>{user.firstname}</strong>, Last Name:
              <strong>{user.lastname}</strong>)
            </h3>
            <form
              className="border px-5 pb-5 pt-3"
              onSubmit={(ev) => handleUpdate(ev)}
            >
              <label className="form-label mt-2" htmlFor="firstname">
                First name
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
              <label className="form-label mt-2" htmlFor="lastname">
                Last name
              </label>
              <input
                class="form-control"
                type="text"
                name="lastname"
                id="lastname"
                value={lastname}
                onChange={(ev) => setLastname(ev.target.value)}
                required
              ></input>

              <div>
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
                  required
                />
              </div>

              <div>
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
                  required
                />
              </div>

              <div>
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
                  required
                />
              </div>
              <div>
                {/* <label className="form-label mt-2" htmlFor="phone">
                  Phone
                </label>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    className="rounded-0 border-dark my-3"
                  >
                    {roleType}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        setRoleType("client");
                        setRole({  });
                      }}
                    >
                      Client
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setRoleType("admin");
                        setRole({  });
                      }}
                    >
                      Admin
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
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
                  required
                />
              </div>

              <Button
                type="submit"
                variant="dark"
                style={{ float: "right", margin: "2rem" }}
              >
                Confirm changes
              </Button>
              <p className="text-success text-center">
                {" "}
                <strong>{successMessage}</strong>{" "}
              </p>
              <p className="text-danger text-center">
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

export default EditUser;
