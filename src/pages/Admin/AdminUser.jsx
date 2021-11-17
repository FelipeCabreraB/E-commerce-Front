import React from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import AdminMenu from "../../components/Admin/AdminMenu";
import { Link } from "react-router-dom";
import DeleteUserModal from "../../components/Admin/DeleteUserModal";
import { useSelector } from "react-redux";

function AdminUser() {
  const [users, setUsers] = useState([]);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const getUsers = async (ev) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_ADMIN_BACKEND}/users/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

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
            <div className="d-flex justify-content-between py-1">
              <h3>Users </h3>
              <Link to="/admin/user/create">
                <Button variant="dark">Add a user</Button>
              </Link>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  {/* <th>Completed Orders</th> */}
                  <th>Actions</th>
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
                    <td>{user.address}</td>
                    <td>{user.phone}</td>
                    {/* <td>{user.completedOrders}</td> */}
                    <td>
                      <Link to={`/admin/users/edit/${user.id}`}>
                        <Button className="btn btn-warning me-2">
                          <i class="far fa-edit"></i>
                        </Button>
                      </Link>
                      <DeleteUserModal
                        userId={user.id}
                        firstname={user.firstname}
                        lastname={user.lastname}
                        setUsers={setUsers}
                      />
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

export default AdminUser;
