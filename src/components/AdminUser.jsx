import React from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";

function AdminProduct() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getcategories = async (ev) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_ADMIN_BACKEND}/users/`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getcategories();
  }, []);
  return (
    <div>
      <Container fluid className="py-3  ">
        <Row>
          <Col sm={12} md={2}>
            <AdminMenu />
            <Button variant="dark" style={{ float: "right", margin: "2rem" }}>
              Add a user
            </Button>
          </Col>
          <Col className="myAccountResponsive" sm={12} md={10}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Completed Orders</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.role}</td>
                    <td>{user.email}</td>
                    <td>{user.completedOrders}</td>

                    <td>
                      <Button className="btn btn-warning me-2">
                        <i class="far fa-edit"></i>
                      </Button>
                      <Button className="btn btn-danger">
                        <i class="far fa-trash-alt"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminProduct;