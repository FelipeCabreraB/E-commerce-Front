import React from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import AdminMenu from "../../components/Admin/AdminMenu";
import DeleteProductModal from "../../components/Admin/DeleteProductModal";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";
import { useParams } from "react-router";

function AdminProduct() {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const token = useSelector((state) => state.user.token);
  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_ADMIN_BACKEND}/products/${params.page}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        setProducts(response.data.products);
        setNumberOfPages(response.data.numberOfPages);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [params.page]);

  let items = [];
  for (let number = 1; number <= numberOfPages; number++) {
    items.push(
      <Pagination.Item key={number}>
        <Link
          to={`/admin/products/${number}`}
          style={{ textDecoration: "none" }}
        >
          {number}
        </Link>
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Container fluid className="py-3  ">
        <Row>
          <Col sm={12} md={2}>
            <div className="sticky-top">
              <AdminMenu />
              <Link to="/admin/product/create">
                <Button
                  variant="dark"
                  style={{ float: "right", margin: "2rem" }}
                >
                  Add a Product
                </Button>
              </Link>
            </div>
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
                      <Link to={`/admin/product/edit/${product.id}`}>
                        <Button className="btn btn-warning me-2">
                          <i class="far fa-edit"></i>
                        </Button>
                      </Link>
                      <DeleteProductModal
                        productId={product.id}
                        productName={product.productName}
                        setProducts={setProducts}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
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
