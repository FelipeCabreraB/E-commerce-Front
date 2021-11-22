import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import AdminMenu from "../../components/Admin/AdminMenu";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";

function EditProduct() {
  const token = useSelector((state) => state.user.token);
  const [product, setProduct] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const params = useParams();
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [origin, setOrigin] = useState("");
  const [farm, setFarm] = useState("");
  const [notes, setNotes] = useState("");
  const [variety, setVariety] = useState("");
  const [height, setHeight] = useState("");
  const [processCoff, setProcessCoff] = useState(""); //Tiene que ser distinto a process porque sino agarra el precess.env
  const [rating, setRating] = useState(0);
  const [accessoriesChar1, setAccessoriesChar1] = useState("");
  const [accessoriesChar2, setAccessoriesChar2] = useState("");
  const [accessoriesChar3, setAccessoriesChar3] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState(0);
  const [featured, setFeatured] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_ADMIN_BACKEND}/product/${params.productId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        setProduct(response.data);
        setProductName(response.data.productName);
        setDescription(response.data.description);
        setOrigin(response.data.origin);
        setFarm(response.data.farm);
        setNotes(response.data.notes);
        setVariety(response.data.variety);
        setHeight(response.data.height);
        setProcessCoff(response.data.process);
        setRating(response.data.rating);
        setAccessoriesChar1(response.data.accessoriesChar1);
        setAccessoriesChar2(response.data.accessoriesChar2);
        setAccessoriesChar3(response.data.accessoriesChar3);
        setPrice(response.data.price);
        setStock(response.data.stock);
        setCategory(response.data.categoryId);
        setFeatured(response.data.featured);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [params.productId, token]);

  const handleUpdate = async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    try {
      const response = await axios({
        method: "patch",
        url: `${process.env.REACT_APP_URL_ADMIN_BACKEND}/products`,
        data: formData,
        /*  data: {
          id: params.productId,
          productName,
          description,
          origin,
          farm,
          notes,
          variety,
          height,
          process: processCoff,
          rating,
          accessoriesChar1,
          accessoriesChar2,
          accessoriesChar3,
          price,
          stock,
          category,
          featured,
        }, */
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      });
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
      <Container className="py-3  ">
        <Row>
          <Col sm={12} md={2}>
            <div className="sticky-top">
              <AdminMenu />
            </div>
          </Col>
          <Col className="myAccountResponsive  " sm={12} md={10}>
            <h3 className="my-3">
              Edit product (Id: <strong>{product.id}</strong>, Name:{" "}
              <strong>{product.productName}</strong>, Category:
              <strong>{product.categoryId}</strong>)
            </h3>
            <form className="border px-5 pb-5 pt-3" onSubmit={handleUpdate}>
              <input type="hidden" name="id" id="id" value={product.id} />
              <label className="form-label mt-2" htmlFor="productName">
                Product Name
              </label>
              <input
                className="form-control"
                type="text"
                id="productName"
                name="productName"
                size="50"
                value={productName}
                onChange={(ev) => setProductName(ev.target.value)}
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
                value={description}
                onChange={(ev) => setDescription(ev.target.value)}
              ></textarea>
              {product.categoryId === 1 && (
                <div>
                  <label className="form-label mt-2" htmlFor="origin">
                    Origin
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="origin"
                    name="origin"
                    value={origin}
                    onChange={(ev) => setOrigin(ev.target.value)}
                    required
                  />
                </div>
              )}
              {product.categoryId === 1 && (
                <div>
                  <label className="form-label mt-2" htmlFor="farm">
                    Farm
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="farm"
                    name="farm"
                    value={farm}
                    onChange={(ev) => setFarm(ev.target.value)}
                    required
                  />
                </div>
              )}
              {product.categoryId === 1 && (
                <div>
                  <label className="form-label mt-2" htmlFor="notes">
                    Notes
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="notes"
                    name="notes"
                    value={notes}
                    onChange={(ev) => setNotes(ev.target.value)}
                    required
                  />
                </div>
              )}
              {product.categoryId === 1 && (
                <div>
                  <label className="form-label mt-2" htmlFor="variety">
                    Variety
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="variety"
                    name="variety"
                    value={variety}
                    onChange={(ev) => setVariety(ev.target.value)}
                    required
                  />
                </div>
              )}
              {product.categoryId === 1 && (
                <div>
                  <label className="form-label mt-2" htmlFor="height">
                    Height
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="height"
                    name="height"
                    value={height}
                    onChange={(ev) => setHeight(ev.target.value)}
                    required
                  />{" "}
                </div>
              )}
              {product.categoryId === 1 && (
                <div>
                  <label className="form-label mt-2" htmlFor="process">
                    Process
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="process"
                    name="process"
                    value={processCoff}
                    onChange={(ev) => setProcessCoff(ev.target.value)}
                    required
                  />
                </div>
              )}
              {product.categoryId === 1 && (
                <div>
                  <label className="form-label mt-2" htmlFor="rating">
                    Rating
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="rating"
                    name="rating"
                    value={rating}
                    onChange={(ev) => setRating(ev.target.value)}
                    required
                  />
                </div>
              )}
              {product.categoryId === 2 && (
                <div>
                  <label className="form-label mt-2" htmlFor="accessoriesChar1">
                    Accessories Charactiristic 1
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="accessoriesChar1"
                    name="accessoriesChar1"
                    value={accessoriesChar1}
                    onChange={(ev) => setAccessoriesChar1(ev.target.value)}
                  />
                </div>
              )}
              {product.categoryId === 2 && (
                <div>
                  <label className="form-label mt-2" htmlFor="accessoriesChar2">
                    Accessories Charactiristic 2
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="accessoriesChar2"
                    name="accessoriesChar2"
                    value={accessoriesChar2}
                    onChange={(ev) => setAccessoriesChar2(ev.target.value)}
                  />
                </div>
              )}
              {product.categoryId === 2 && (
                <div>
                  <label className="form-label mt-2" htmlFor="accessoriesChar3">
                    Accessories Charactiristic 3
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="accessoriesChar3"
                    name="accessoriesChar3"
                    value={accessoriesChar3}
                    onChange={(ev) => setAccessoriesChar3(ev.target.value)}
                  />
                </div>
              )}
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
                Price ($)
              </label>
              <input
                className="form-control"
                type="number"
                id="price"
                name="price"
                value={price}
                onChange={(ev) => setPrice(ev.target.value)}
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
                value={stock}
                onChange={(ev) => setStock(ev.target.value)}
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
                value={category}
                onChange={(ev) => setCategory(ev.target.value)}
                required
              />
              <div class="form-text">
                Category 1: Coffee - Category 2: Accessories
              </div>
              <label className="form-label mt-2 me-3" htmlFor="featured">
                Featured:
              </label>
              <input
                type="checkbox"
                id="featured"
                name="featured"
                checked={featured}
                onChange={() => setFeatured(!featured)}
              />
              <Button
                type="submit"
                variant="dark"
                style={{ float: "right", margin: "2rem" }}
              >
                Confirm changes
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

export default EditProduct;
