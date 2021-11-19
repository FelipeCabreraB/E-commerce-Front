import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyAccountMenu from "../../components/MyAccount/MyAccountMenu";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

function MyAccountOrder() {
 
  const token = useSelector((state) => state.user.token);
 
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_URL_BACKEND}/orders`,

          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        });
       
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, [token]);
  console.log(orders);

  return (
    <div className="mb-5 pb-5">
      <Container className="py-3 mb-3">
        <Row>
          <Col sm={12} md={2}>
            <div className="sticky-top">
              <MyAccountMenu />
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
                  <th>Status</th>
                  <th>Date</th>
                  <th>Total products</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{orders.indexOf(order) + 1}</td>
                    <td>{order.orderStatus}</td>
                    <td>
                      {new Intl.DateTimeFormat("en-GB", {
                        month: "long",
                        day: "2-digit",
                        year: "numeric",
                      }).format(new Date(order.createdAt))}
                    </td>
                    <td>{order.quantity}</td>
                    <td>${order.totalPrice}</td>
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

export default MyAccountOrder;
