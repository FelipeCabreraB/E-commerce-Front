import React from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import { Button, Table, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import AdminMenu from "../../components/Admin/AdminMenu";
import { Link } from "react-router-dom";
import DeleteCategoryModal from "../../components/Admin/DeleteCategoryModal";
import { useSelector } from "react-redux";

function AdminCategory() {
  const [categories, setCategories] = useState([]);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const getcategories = async (ev) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_ADMIN_BACKEND}/categories/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getcategories();
  }, [token]);

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
              <h3>Categories </h3>
              <Link to="/admin/category/create">
                <Button variant="dark">Add Category</Button>
              </Link>
            </div>

            {categories.length < 1 ? (
              <div className="w-100 text-center">
                <Spinner animation="border" variant="dark" />
              </div>
            ) : (
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>

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
                        <Link to={`/admin/category/edit/${category.id}`}>
                          <Button className="btn btn-light btn-outline-dark me-2">
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
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminCategory;
