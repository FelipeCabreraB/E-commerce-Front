import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Nav, Overlay, Popover } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchBar() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  useEffect(() => {
    if (searchValue !== "") {
      const getProducts = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_URL_BACKEND}/search/products/${searchValue}`,
            {
              headers: { "Content-Type": "application/json" },
            }
          );
          setSearchedProducts(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      getProducts();
    }
  }, [searchValue]);

  return (
    <div ref={ref}>
      <Nav.Link onClick={handleClick}>
        <i class="fas fa-search" style={{ color: "black" }}></i>
      </Nav.Link>

      <Overlay
        show={show}
        placement="bottom"
        container={ref}
        containerPadding={20}
        target={target}
        rootClose
        onHide={() => setShow(false)}
      >
        <Popover id="popover-contained" onClick={() => setShow(false)}>
          <Popover.Header>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchValue}
              onChange={(ev) => setSearchValue(ev.target.value)}
            />
          </Popover.Header>
          <Popover.Body>
            {" "}
            {searchValue !== "" &&
              searchedProducts.map((product) => (
                <Link
                  to={`/product/${product.categoryId}/${product.productName}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="d-flex p-2" id="searchedProducts">
                    <img
                      src={
                        "https://hxxxiarcaeviegtlscdm.supabase.in/storage/v1/object/public/culto-coffee-img/" +
                        product.picture
                      }
                      style={{ height: "40px", width: "40px" }}
                      className="me-3"
                      alt=""
                    />
                    <div>
                      <p className="my-0">
                        {" "}
                        <strong>{product.productName}</strong>{" "}
                      </p>{" "}
                      <p className="my-0">${product.price}</p>{" "}
                    </div>
                  </div>
                  <hr className="my-0" />
                </Link>
              ))}
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
export default SearchBar;
