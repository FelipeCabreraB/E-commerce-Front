import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import AdminMenu from "../components/AdminMenu";
import { useParams } from "react-router";
import axios from "axios";

function AddNewCategory() {
  const [category, setCategory] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const params = useParams();
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");

  const handleUpdate = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL_ADMIN_BACKEND}/categories`,
        {
          data: {
            id: params.categoryId,
            categoryName,
            description,
            picture,
          },
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.data.success) {
        setSuccessMessage(response.data.success);
      }
      if (response.data.error) {
        setErrorMessage(response.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container fluid className="py-3  ">
        <Row>
          <Col sm={12} md={2}>
            <AdminMenu />
          </Col>
          <Col className="myAccountResponsive" sm={12} md={10}>
            <h3 className="my-3">Create new category</h3>
            <form
              className="border px-5 pb-5 pt-3"
              onSubmit={(ev) => handleUpdate(ev)}
            >
              <label className="form-label mt-2" htmlFor="categoryName">
                Category Name
              </label>
              <input
                className="form-control"
                type="text"
                id="categoryName"
                name="categoryName"
                value={categoryName}
                onChange={(ev) => setCategoryName(ev.target.value)}
                required
              />
              <label className="form-label mt-2" htmlFor="description">
                Description
              </label>
              <input
                class="form-control"
                name="description"
                id="description"
                cols="60"
                rows="5"
                value={description}
                onChange={(ev) => setDescription(ev.target.value)}
              ></input>
              <label className="form-label mt-2" htmlFor="picture">
                Change picture
              </label>
              <input
                id="picture"
                name="picture"
                type="file"
                class="form-control"
              />
              <div class="form-text">
                Accepted formats: .jpg, .jpeg, .svg, .png
              </div>
              <Button
                type="submit"
                variant="dark"
                style={{ float: "right", margin: "1rem" }}
              >
                Confirm create
              </Button>
              <p className="text-success text-center">
                {" "}
                <strong>{successMessage}</strong>{" "}
              </p>
              <p className="text-danger text-center">
                {" "}
                <strong>{errorMessage}</strong>{" "}
              </p>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddNewCategory;
