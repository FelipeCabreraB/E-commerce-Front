import React from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import AdminMenu from "../../components/Admin/AdminMenu";
import ChangeStatusOrderModal from "../../components/Admin/ChangeStatusOrderModal";
import { useSelector } from "react-redux";

function AdminProduct() {
  const [orders, setOrders] = useState([]);
  const [launch, setLaunch] = useState(false);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const getorders = async (ev) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_ADMIN_BACKEND}/orders/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getorders();
  }, [launch, token]);

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
            <div className="d-flex justify-content-between py-1 mb-1">
              <h3 className="">Orders </h3>
            </div>
            <Table striped bordered hover className="text-center align-middle">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Status Order</th>
                  <th>User Id</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>
                      {new Intl.DateTimeFormat("en-GB", {
                        month: "long",
                        day: "2-digit",
                        year: "numeric",
                      }).format(new Date(order.createdAt))}
                    </td>
                    <td className="d-flex justify-content-between">
                      Actual status: <strong>{order.statusOrder}</strong>
                      <ChangeStatusOrderModal
                        userId={order.userId}
                        orderId={order.id}
                        setLaunch={setLaunch}
                        launch={launch}
                      />
                    </td>
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
