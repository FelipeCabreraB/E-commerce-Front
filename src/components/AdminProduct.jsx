import React from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
//import MyAccountMenu from "./MyAccountMenu";
import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import AdminMenu from "../components/AdminMenu";
import { Link } from "react-router-dom";

function AdminProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async (ev) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_ADMIN_BACKEND}/products/`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  return (
    <div>
      <Container fluid className="py-3  ">
        <Row>
          <Col sm={12} md={2}>
            <AdminMenu />
            <Button variant="dark" style={{ float: "right", margin: "2rem" }}>
              Add a Product
            </Button>
          </Col>
          <Col className="myAccountResponsive" sm={12} md={10}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Featured</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>
                      <div
                        className="mb-3"
                        style={{ width: "80px", height: "80px" }}
                      >
                        <img
                          className="img-fluid"
                          src={product.picture}
                          alt=""
                        />
                      </div>
                    </td>
                    <td>{product.productName}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.featured}</td>
                    <td>{product.categoryId}</td>
                    <td>
                      <Link to="/admin/product/edit">
                        <Button className="btn btn-warning me-2">
                          <i class="far fa-edit"></i>
                        </Button>
                      </Link>
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
