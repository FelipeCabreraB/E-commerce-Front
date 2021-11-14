import React from "react";
import { Row, Col } from "react-bootstrap";

function AboutThisProject() {
  return (
    <div className="about-this-project">
      <div className="container ">
        <div className="mt-4 mb-4 py-4">
          <h1 className="pb-3">ABOUT THIS PROJECT</h1>
          <Row>
            <Col xs={12} md={6}>
              <h5 className="my-3">
                E-commerce project - Culto café (Coffee cult){" "}
              </h5>
              <p>E-commerce: Demo (AGREGAR LINK UNA VEZ DEPLOYADO)</p>
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
              <ul>
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
          </Row>
        </div>
      </div>
    </div>
  );
}

export default AboutThisProject;
