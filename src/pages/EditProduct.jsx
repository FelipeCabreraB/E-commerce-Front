import { Container, Row, Col, Button } from "react-bootstrap";
import AdminMenu from "../components/AdminMenu";

function EditProduct() {
  return (
    <div>
      <Container fluid className="py-3  ">
        <Row>
          <Col sm={12} md={2}>
            <AdminMenu />
          </Col>
          <Col className="myAccountResponsive" sm={12} md={10}>
            <h3 className="my-3">
              Edit product (Id: <strong>("Poner product id")</strong> Name:{" "}
              <strong>("Poner productName")</strong>)
            </h3>
            <form className="border px-5 pb-5 pt-3">
              <label className="form-label mt-2" htmlFor="productName">
                Product Name
              </label>
              <input
                className="form-control"
                type="text"
                id="productName"
                name="productName"
                required
              />
              <label className="form-label mt-2" htmlFor="description">
                Description
              </label>
              <textarea
                class="form-control"
                name="description"
                id="description"
                cols="60"
                rows="5"
              ></textarea>
              <label className="form-label mt-2" htmlFor="origin">
                Origin
              </label>
              <input
                className="form-control"
                type="text"
                id="origin"
                name="origin"
                required
              />
              <label className="form-label mt-2" htmlFor="farm">
                Farm
              </label>
              <input
                className="form-control"
                type="text"
                id="farm"
                name="farm"
                required
              />
              <label className="form-label mt-2" htmlFor="notes">
                Notes
              </label>
              <input
                className="form-control"
                type="text"
                id="notes"
                name="notes"
                required
              />
              <label className="form-label mt-2" htmlFor="variety">
                Variety
              </label>
              <input
                className="form-control"
                type="text"
                id="variety"
                name="variety"
                required
              />
              <label className="form-label mt-2" htmlFor="height">
                Height
              </label>
              <input
                className="form-control"
                type="text"
                id="height"
                name="height"
                required
              />
              <label className="form-label mt-2" htmlFor="process">
                Process
              </label>
              <input
                className="form-control"
                type="text"
                id="process"
                name="process"
                required
              />
              <label className="form-label mt-2" htmlFor="rating">
                Rating
              </label>
              <input
                className="form-control"
                type="number"
                id="rating"
                name="rating"
                required
              />
              <label className="form-label mt-2" htmlFor="accessoriesChar1">
                Accessories Charactiristic 1
              </label>
              <input
                className="form-control"
                type="text"
                id="accessoriesChar1"
                name="accessoriesChar1"
                required
              />
              <label className="form-label mt-2" htmlFor="accessoriesChar2">
                Accessories Charactiristic 2
              </label>
              <input
                className="form-control"
                type="text"
                id="accessoriesChar2"
                name="accessoriesChar2"
                required
              />
              <label className="form-label mt-2" htmlFor="accessoriesChar3">
                Accessories Charactiristic 3
              </label>
              <input
                className="form-control"
                type="text"
                id="accessoriesChar3"
                name="accessoriesChar3"
                required
              />
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
              <label className="form-label mt-2" htmlFor="price">
                Price
              </label>
              <input
                className="form-control"
                type="number"
                id="price"
                name="price"
                required
              />
              <label className="form-label mt-2" htmlFor="stock">
                Stock
              </label>
              <input
                className="form-control"
                type="number"
                id="stock"
                name="stock"
                required
              />

              <label className="form-label mt-2" htmlFor="category">
                Category
              </label>
              <input
                className="form-control"
                type="number"
                id="category"
                name="category"
                required
              />
              <label className="form-label mt-2 me-3 mt-2" htmlFor="featured">
                Featured:
              </label>
              <input type="checkbox" id="featured" name="featured" required />
              <Button variant="dark" style={{ float: "right", margin: "2rem" }}>
                Confirm changes
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EditProduct;
