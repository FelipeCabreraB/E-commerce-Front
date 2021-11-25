import React from "react";
import axios from "axios";
import { Row, Col, Container, Spinner } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import AdminMenu from "../../components/Admin/AdminMenu";
import ChangeStatusOrderModal from "../../components/Admin/ChangeStatusOrderModal";
import { useSelector } from "react-redux";
import Pagination from "react-bootstrap/Pagination";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

function AdminProduct() {
  const params = useParams();
  const [orders, setOrders] = useState([]);
  const [launch, setLaunch] = useState(false);
  const token = useSelector((state) => state.user.token);
  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    const getorders = async (ev) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_ADMIN_BACKEND}/orders/${params.page}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        setOrders(response.data.orders);
        setNumberOfPages(response.data.numberOfPages);
      } catch (error) {
        console.log(error);
      }
    };
    getorders();
  }, [launch, token, params.page]);

  let items = [];
  for (let number = 1; number <= numberOfPages; number++) {
    items.push(
      <Pagination.Item key={number} className="p-0">
        <Link to={`/admin/orders/${number}`} style={{ textDecoration: "none" }}>
          <div className="px-1 py-1">{number}</div>
        </Link>
      </Pagination.Item>
    );
  }

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
            {orders.length < 1 ? (
              <div className="w-100 text-center">
                <Spinner animation="border" variant="dark" />
              </div>
            ) : (
              <Table
                striped
                bordered
                hover
                responsive
                className="text-center align-middle"
              >
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
                        Actual status:{" "}
                        <strong className="mx-3">{order.statusOrder}</strong>
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
            )}
          </Col>
        </Row>
        <div className="w-100 d-flex justify-content-center">
          <Pagination size="sm">{items}</Pagination>
        </div>
      </Container>
    </div>
  );
}

export default AdminProduct;
