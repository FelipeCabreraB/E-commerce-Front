import React from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import AdminMenu from "../components/AdminMenu";
import { Link } from "react-router-dom";
import DeleteCategoryModal from "./DeleteCategoryModal";

function AdminCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getcategories = async (ev) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_ADMIN_BACKEND}/categories/`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        setCategories(response.data);
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
            <div className="sticky-top">
              <AdminMenu />
              <Link to="/admin/category/create">
                <Button
                  variant="dark"
                  style={{ float: "right", margin: "2rem" }}
                >
                  Add Category
                </Button>
              </Link>
            </div>
          </Col>
          <Col className="myAccountResponsive" sm={12} md={10}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Picture</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.categoryName}</td>
                    <td>{category.description}</td>
                    <td>
                      <div
                        className="mb-3"
                        style={{ width: "80px", height: "80px" }}
                      >
                        <img
                          className="img-fluid"
                          src={category.picture}
                          alt=""
                        />
                      </div>
                    </td>

                    <td>
                      <Link to={`/admin/category/edit/${category.id}`}>
                        <Button className="btn btn-warning me-2">
                          <i class="far fa-edit"></i>
                        </Button>
                      </Link>
                      <DeleteCategoryModal
                        categoryId={category.id}
                        categoryName={category.categoryName}
                        setCategories={setCategories}
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

export default AdminCategory;
