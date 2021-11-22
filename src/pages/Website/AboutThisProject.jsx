import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaBootstrap,
  FaLinkedin,
  FaGithub,
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

  const styleLinkedin = { color: "black" };
  return (
    <div className="about-this-project">
      <div className="container ">
        <div className="mt-4 mb-4 py-4">
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
            <strong>The process</strong>
            The process consisted of 3 work weeks that includes approximately
            450 man hours. We used the agile methodology, testing the
            application and modifying our goals based on the data collected.
          </p>
          <p style={{ fontSize: "75%" }}>
            <strong>Note:</strong>
            The images and design of this project were collected from the Culto
            Café page and used only for educational purposes
          </p>
          {/* <Row>
            <Col xs={12} md={6}>
              <p></p>
              <p>
                <strong>Team: </strong> Jonathan Boublil, Felipe Cabrera,
                Ignacio Nin
              </p>
              <p>
                <strong>Technologies and tools used: </strong>{" "}
              </p>
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React.js</li>
                <li>mySQL and Sequelize</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>JWT</li>
                <li>JSON</li>
                <li>React Boostrap</li>
                <li>Bcryptjs</li>
                <li>Axios</li>
                <li>Vercel - Deployment</li>
                <li>Supabase - Cloud Storage</li>
              </ul>
            </Col>
            <Col xs={12} md={6}>
              <p className="my-3">
                {" "}
                <strong> Note: </strong>
                The objective of this project is to simulate an e-commerce page
                where most of the normal functionalities work with the exception
                of making purchases since this is not a real bussiness. <br />{" "}
                Among those functionalities are:
              </p>
              {/* ESPECIFICAR QUE USAMOS COMO MODELO LA PAGINA DE CULTO CAFE??? */}
          {/* <ul>
                <li>
                  A database with the list of products, users, orders and
                  categories
                </li>
                <li>
                  Register, Login, and keep the information of your data and
                  orders in your account (AGREGAMOS RESETEO DE CONTRASEÑA???)
                </li>
                <li>
                  An administrator account that allows to do CRUD of products,
                  categories and administrators (to access that account go to
                  the following link and log in with the user .........)
                </li>
                <li>
                  Functional cart that automatically adds and sums the selected
                  products
                </li>
              </ul>
            </Col>
          </Row> */}{" "}
        </div>
        <div className="middle-part mt-4 mb-4 py-4">
          <h3 className="pb-3 text-center">TECHNOLOGIES USED</h3>
          <Row>
            <Col>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <FaReact /> React.js
                </li>
                <li>
                  <FaCss3Alt /> CSS3
                </li>
                <li>
                  <FaHtml5 /> HTML5
                </li>
                <li>
                  <FaNodeJs /> Node.js
                </li>
              </ul>
            </Col>
            <Col>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <SiRedux /> Redux
                </li>
                <li>
                  <SiExpress /> Express
                </li>
                <li>
                  <SiPostgresql /> Postgres
                </li>
                <li>
                  <SiMysql /> MySQL
                </li>
              </ul>
            </Col>
            <Col>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <SiSequelize /> Sequelize
                </li>
                <li>
                  <FaBootstrap /> Bootstrap
                </li>
                <li>
                  <SiVercel /> Vercel
                </li>
                <li>
                  <SiSupabase /> Supabase
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="my-5 py-4">
          <Row className="text-center">
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
                className="shadow"
                src={Capture_screen1}
                alt=""
                style={{ maxWidth: "34rem" }}
              />
            </Col>
          </Row>
          <Row className="mt-3 pt-2">
            <Col md={7} className="img-fluid">
              <img
                className="shadow"
                src={Capture_screen2}
                alt=""
                style={{ maxWidth: "34rem" }}
              />
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
        <div className="mt-4 mb-4 py-4 text-center">
          <h5>USE THIS CREDENTIALS TO LOG IN: </h5>
          <Row className="m-3">
            <Col>
              <p>Email: user@user.com</p>
              <p>Password: 123456</p>
            </Col>
            <Col className="mt-3">
              <Button variant="dark" onClick={() => handleResetDatabase()}>
                Reset Database
              </Button>
              <p className="text-success mt-2">{resetMessage}</p>
            </Col>
            <Col>
              <p>Email: admin@admin.com</p>
              <p>Password: 123456</p>
            </Col>
          </Row>
        </div>
        <div className="mt-4 mb-4 py-4">
          <h3 className="pb-3 text-center">TEAM</h3>
          <Row>
            <Col className="text-center">
              <img
                className="img-thumbnail rounded-circle"
                style={{ maxWidth: "8rem" }}
                src="https://media-exp1.licdn.com/dms/image/C5103AQFIDI16-RugSg/profile-displayphoto-shrink_400_400/0/1562091332774?e=1643241600&v=beta&t=eOhkSRLXxwllBxTJfiu2X0F42OCObURyHsJhET_thT0"
                alt=""
              />
              <p>
                <strong>Jonathan Boublil</strong>
              </p>
              <p>Full Stack Developer</p>
              <Link to="https://www.linkedin.com/in/jonathan-boublil/">
                <FaLinkedin style={styleLinkedin} />
              </Link>
              {"   "}
              <Link to="https://github.com/jonathanb88">
                <FaGithub style={styleLinkedin} />
              </Link>
            </Col>
            <Col className="text-center">
              <img
                className="img-thumbnail rounded-circle"
                style={{ maxWidth: "8rem" }}
                src="https://media-exp1.licdn.com/dms/image/C4E03AQHHHmEEq7QhRw/profile-displayphoto-shrink_400_400/0/1517612030695?e=1643241600&v=beta&t=SH5ZReSMpfdACKqGPxJoYltEryy7xMDt4QtyqSgixoA"
                alt=""
              />
              <p>
                <strong>Felipe Cabrera</strong>
              </p>
              <p>Full Stack Developer</p>
              <Link to="https://www.linkedin.com/in/felipe-cabrera-bonino/">
                <FaLinkedin style={styleLinkedin} />
              </Link>
              {"   "}
              <Link to="https://github.com/FelipeCabreraB">
                <FaGithub style={styleLinkedin} />
              </Link>
            </Col>
            <Col className="text-center">
              <img
                className="img-thumbnail rounded-circle"
                style={{ maxWidth: "8rem" }}
                src="https://media-exp1.licdn.com/dms/image/C5603AQEHCKfHmnPefQ/profile-displayphoto-shrink_400_400/0/1516842180500?e=1643241600&v=beta&t=GWltYmraJysAWDx2Cp3FXccDaP6itOImhZ1Wf6YG90A"
                alt=""
              />
              <p>
                <strong>Ignacio Nin</strong>
              </p>
              <p>Full Stack Developer</p>
              <Link to="https://www.linkedin.com/in/ignacionin/">
                <FaLinkedin style={styleLinkedin} />
              </Link>
              {"   "}
              <Link to="https://github.com/ignacionin">
                <FaGithub style={styleLinkedin} />
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default AboutThisProject;
