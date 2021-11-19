import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyAccountMenu from "../../components/MyAccount/MyAccountMenu";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Button, Table } from "react-bootstrap";
import { getOverlappingDaysInIntervals } from "date-fns/esm";

function MyAccountOrder() {
  const token = useSelector((state) => state.user.token);
  const [productsOrder, setProductsOrder] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const params = useParams();
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [grindingType, setgrindingType] = useState("");
  const [productId, setProductId] = useState(0);
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
        // setProductsOrder(response.data.productsOrder);
        setProductId(response.data.productId);
        setPrice(response.data.price);
        setQuantity(response.data.quantity);
        setgrindingType(response.data.grindingType);
        setProductId(response.data.productId);
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);
  console.log(orders);

  return (
    <div>
      <Container className="py-3  ">
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
                  <th>Total products</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{orders.indexOf(order) + 1}</td>
                    <td>{order.orderStatus}</td>
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
