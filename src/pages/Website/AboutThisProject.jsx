import { useState } from "react";
import { Row, Col, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiRedux,
  SiPostgresql,
  SiSequelize,
  SiVercel,
  SiExpress,
  SiSupabase,
  SiMysql,
} from "react-icons/si";
import Capture_screen1 from "../../Capture_screen1.JPG";
import Capture_screen2 from "../../Capture_screen2.JPG";

function AboutThisProject() {
  const [resetMessage, setResetMessage] = useState("");
  const [resetSpinner, setResetSpinner] = useState(false);
  const handleResetDatabase = async (ev) => {
    try {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_URL_BACKEND}/database`,
        data: {},
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResetMessage(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="about-this-project">
      <div className=" ">
        <div className="mt-4 mb-4 py-4 container">
          <h3 className="pb-3 text-center">ABOUT THIS PROJECT</h3>
          <p>
            Culto is our final project, an E-Commerce website which is built
            from scratch as the final work of the Coding Bootcamp and carried
            out by Hack Academy. The project is divided into three parts:
          </p>
          <ul>
            <li>
              The first one is a public interface where users can navigate
              search and add products to a cart. It is not a requirement to be
              logged until you proceed to checkout. The user can add later its
              personal information to buy a product and check his/her previous
              orders.
            </li>
            <li>
              The second part of this project includes an administrator panel.
              The Admin has permissions to read, add, update and delete
              products, categories, and users.
            </li>
            <li>The third part consist in a REST API.</li>
          </ul>
          <p>
            <strong>The process: </strong>
            The process consisted of 3 work weeks that includes approximately
            450 man hours. We used the agile methodology, testing the
            application and modifying our goals based on the data collected.
          </p>
          <p style={{ fontSize: "75%" }}>
            <strong>Note:</strong>
            The images and design of this project were collected from the Culto
            Café page and used only for educational purposes
          </p>
        </div>
        <div className="middle-part">
          <div className=" container mt-4 mb-4 py-4 text-center">
            <h3 className="py-4 my-2 text-center">TECHNOLOGIES USED</h3>
            <div className="">
              <Row className="gx-0">
                <Col>
                  <ul className="py-2" style={{ listStyle: "none" }}>
                    <li className="py-2 ms-3">
                      <FaReact /> React.js
                    </li>
                    <li className="py-2 ms-3">
                      <FaCss3Alt /> CSS3
                    </li>
                    <li className="py-2 ms-3">
                      <FaHtml5 /> HTML5
                    </li>
                    <li className="py-2 ms-3">
                      <FaNodeJs /> Node.js
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul className="py-2" style={{ listStyle: "none" }}>
                    <li className="py-2">
                      <SiRedux /> Redux
                    </li>
                    <li className="py-2">
                      <SiExpress /> Express
                    </li>
                    <li className="py-2">
                      <SiPostgresql /> Postgres
                    </li>
                    <li className="py-2">
                      <SiMysql /> MySQL
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul className="py-2" style={{ listStyle: "none" }}>
                    <li className="py-2">
                      <SiSequelize /> Sequelize
                    </li>
                    <li className="py-2">
                      <FaBootstrap /> Bootstrap
                    </li>
                    <li className="py-2">
                      <SiVercel /> Vercel
                    </li>
                    <li className="py-2">
                      <SiSupabase /> Supabase
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="my-5 py-4 container">
          <Row className="text-center mb-3">
            <Col className="d-flex align-items-center " md={5}>
              <p>
                <strong>The user can go through the page very easily! </strong>{" "}
                <br />
                Look at the different products, add the products of your
                interest to your cart and only log in or register when you want
                to finalize the purchase.
              </p>
            </Col>
            <Col md={7} className="img-fluid">
              <img
                className="shadow img-screenCapture"
                src={Capture_screen1}
                alt=""
                style={{ maxWidth: "34rem" }}
              />
            </Col>
          </Row>
          <Row className="mt-4 pt-4">
            <Col md={7} className="img-fluid">
              <div>
                <img
                  className="shadow img-screenCapture"
                  src={Capture_screen2}
                  alt=""
                  style={{ maxWidth: "34rem" }}
                />
              </div>
            </Col>
            <Col className="d-flex align-items-center text-center mt-3" md={5}>
              <p>
                <strong>
                  The Admin has a a very easy and instinctive panel to use!
                </strong>{" "}
                <br />
                You can easily add, edit, update and delete any product, user or
                category you want.
              </p>
            </Col>
          </Row>
        </div>
        <div className="credentials">
          <div className="mt-4 mb-4 py-4 text-center container">
            <h5 className="my-4">USE THIS CREDENTIALS TO LOG IN: </h5>
            <Row className="m-3">
              <Col>
                <p>Email: user@user.com</p>
                <p>Password: 123456</p>
              </Col>
              <Col className="mt-3">
                <Button
                  variant="light"
                  onClick={() => {
                    handleResetDatabase();
                    setResetSpinner(true);
                  }}
                >
                  Reset Database
                </Button>
                {
                  // eslint-disable-next-line
                  resetSpinner == true && resetMessage.length < 1 ? (
                    <div className="mt-2">
                      <Spinner animation="border" variant="light" />
                    </div>
                  ) : (
                    <p className="text-success mt-2">{resetMessage}</p>
                  )
                }
              </Col>
              <Col>
                <p>Email: admin@admin.com</p>
                <p>Password: 123456</p>
              </Col>
            </Row>
          </div>
        </div>
        <div className="mt-4 mb-4 py-4 container">
          <h3 className="py-4 text-center">TEAM</h3>
          <Row>
            <Col className="text-center">
              <img
                className="img-thumbnail rounded-circle img-profile"
                style={{ maxWidth: "8rem" }}
                src="https://media-exp1.licdn.com/dms/image/C5103AQFIDI16-RugSg/profile-displayphoto-shrink_400_400/0/1562091332774?e=1643241600&v=beta&t=eOhkSRLXxwllBxTJfiu2X0F42OCObURyHsJhET_thT0"
                alt=""
              />
              <p>
                <strong>Jonathan Boublil</strong>
              </p>
              <p>Full Stack Developer</p>
              <a
                href="https://www.linkedin.com/in/jonathan-boublil/"
                target="_blank"
                rel="noreferrer noopener"
                className="px-1 linkedin"
              >
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
              <a
                href="https://github.com/jonathanb88"
                target="_blank"
                rel="noreferrer noopener"
                className="px-1 github"
              >
                <i class="fab fa-github fa-2x"></i>
              </a>
            </Col>
            <Col className="text-center">
              <img
                className="img-thumbnail rounded-circle img-profile"
                style={{ maxWidth: "8rem" }}
                src="https://media-exp1.licdn.com/dms/image/C4E03AQHHHmEEq7QhRw/profile-displayphoto-shrink_400_400/0/1517612030695?e=1643241600&v=beta&t=SH5ZReSMpfdACKqGPxJoYltEryy7xMDt4QtyqSgixoA"
                alt=""
              />
              <p>
                <strong>Felipe Cabrera</strong>
              </p>
              <p>Full Stack Developer</p>
              <a
                href="https://www.linkedin.com/in/felipe-cabrera-bonino/"
                target="_blank"
                rel="noreferrer noopener"
                className="px-1 linkedin"
              >
                {" "}
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
              <a
                href="https://github.com/FelipeCabreraB"
                target="_blank"
                rel="noreferrer noopener"
                className="px-1 github"
              >
                <i class="fab fa-github fa-2x"></i>
              </a>
            </Col>
            <Col className="text-center">
              <img
                className="img-thumbnail rounded-circle img-profile"
                style={{ maxWidth: "8rem" }}
                src="https://media-exp1.licdn.com/dms/image/C5603AQEHCKfHmnPefQ/profile-displayphoto-shrink_400_400/0/1516842180500?e=1643241600&v=beta&t=GWltYmraJysAWDx2Cp3FXccDaP6itOImhZ1Wf6YG90A"
                alt=""
              />
              <p>
                <strong>Ignacio Nin</strong>
              </p>
              <p>Full Stack Developer</p>
              <a
                href="https://www.linkedin.com/in/ignacionin/"
                target="_blank"
                rel="noreferrer noopener"
                className="px-1 linkedin"
              >
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
              <a
                href="https://github.com/ignacionin"
                target="_blank"
                rel="noreferrer noopener"
                className="px-1 github"
              >
                <i class="fab fa-github fa-2x"></i>
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default AboutThisProject;
