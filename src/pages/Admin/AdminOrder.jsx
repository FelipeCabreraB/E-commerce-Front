import React from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import AdminMenu from "../../components/Admin/AdminMenu";

function AdminProduct() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getorders = async (ev) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_ADMIN_BACKEND}/orders/`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getorders();
  }, []);
  return (
    <div>
      <Container fluid className="py-3  ">
        <Row>
          <Col sm={12} md={2}>
            <div className="sticky-top">
              <AdminMenu />
              <Button variant="dark" style={{ float: "right", margin: "2rem" }}>
                Add a Order
              </Button>
            </div>
          </Col>
          <Col className="myAccountResponsive" sm={12} md={10}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Status Order</th>
                  <th>User Id</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.statusOrder}</td>
                    <td>{order.userId}</td>
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