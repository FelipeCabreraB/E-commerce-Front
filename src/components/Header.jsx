import { useDispatch } from "react-redux";
import VideoCulto from "../videos/Culto-Web-v1-optimizado.mp4";
import "./Header.css";

function Header() {
  const dispatch = useDispatch();

  return (
    <div>
      <video id="header-video" loop autoPlay muted>
        <source src={VideoCulto} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <h2
          className="text-white text-center"
          id="header-title-never-run-out-coffee"
        >
          <strong>Never run out of coffee</strong>
        </h2>
        <h5 className="text-white text-center">
          <strong>
            Subscribe and receive your favourite coffee delivered every two
            weeks for just $900.
          </strong>
        </h5>
        <div className="text-center" id="header-button-container">
          <button
            type="button"
            style={{
              backgroundColor: "white",
              color: "black",
              fontSize: "15px",
            }}
            className="btn rounded-pill mt-5 px-5 py-2"
            id="header-button-id"
          >
            <strong>SUBSCRIBE</strong>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
