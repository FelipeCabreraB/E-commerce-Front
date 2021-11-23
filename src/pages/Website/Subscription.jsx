import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function Subscription() {
  // const [show, setShow] = useState(false);
  // const target = useRef(null);
  const popover = (
    <Tooltip id="overlay-example">
      Sorry, this modality is out of the scope for this project
    </Tooltip>
  );

  return (
    <div className="bg-light my-0">
      <div className="pt-5 mb-5">
        <h1 className="text-center">Never run out of coffee</h1>
        <p className="text-center recieve">
          Choose your plan and receive specialty coffee every 15 days.
        </p>
      </div>

      <Container>
        <Row className="px-5 mt-5">
          <Col col={4} lg={4} mb={5} className="mb-5">
            <div className="bg-white p-5 rounded-lg shadow  ">
              <h1 className="text-center font-weight-bold mb-4">Basic</h1>
              <p className="text-center font-weight-bold mb-4">
                Receive 1 bag of 250 gr. each 15 days.
              </p>
              <h3 className=" text-center font-weight-bold">
                $900
                <span className="text-small font-weight-bold ml-2">
                  / month
                </span>
              </h3>
              <div className="custom-separator my-4 mx-auto bg-dark"></div>

              <ul class="list-unstyled mt-3 text-small text-left mb-5">
                <li className="mb-3">
                  <i className="fa fa-chevron-right mr-2 text-dark"></i> Receive
                  blends and origins specially selected by our roaster.
                </li>
                <li className="mb-3">
                  <i className="fa fa-chevron-right mr-2 text-dark"></i>{" "}
                  Shipping frequency every 15 days.
                </li>
                <li className="mb-3">
                  <i className="fa fa-chevron-right mr-2 text-dark"></i> Free
                  shipping within Montevideo to José Ignacio.
                </li>
                <li className="mb-3">
                  <i className="fa fa-chevron-right mr-2 text-dark"></i> 10%
                  discount on coffee drinks at our stores.
                </li>
              </ul>
              <br />
              <div className="text-center mt-3">
                <OverlayTrigger
                  trigger="click"
                  rootClose
                  placement="top"
                  overlay={popover}
                >
                  <Button
                    className="mt-4 rounded-pill px-5 py-2 "
                    variant="dark"
                    size="lg"
                  >
                    Subscribe
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </Col>
          <Col
            col={4}
            lg={4}
            mb={5}
            className="justify-content-md-center mb-5 "
          >
            <div className="bg-white p-5 rounded-lg shadow  border-dark square border border-4 ">
              <h1 className="text-center font-weight-bold mb-4">Double shot</h1>
              <p className="text-center font-weight-bold mb-4">
                Receive 2 bag of 250 gr. each 15 days.
              </p>
              <h3 className=" text-center font-weight-bold">
                $1.700
                <span className="text-small font-weight-normal ml-2">
                  / month
                </span>
              </h3>
              <div className="custom-separator my-4 mx-auto bg-dark"></div>

              <ul class="list-unstyled my-3 text-small text-left">
                <li className="mb-3">
                  <i className="fa fa-chevron-right mr-2 text-dark"></i> Receive
                  blends and origins specially selected by our roaster.
                </li>
                <li className="mb-3">
                  <i className="fa fa-chevron-right mr-2 text-dark"></i>{" "}
                  Shipping frequency every 15 days.
                </li>
                <li className="mb-3">
                  <i className="fa fa-chevron-right mr-2 text-dark"></i> Free
                  shipping within Montevideo to José Ignacio.
                </li>
                <li className="mb-3">
                  <i className="fa fa-chevron-right mr-2 text-dark"></i> 10%
                  discount on coffee drinks at our stores.
                </li>
                <li className="mb-3">
                  <i className="fa fa-chevron-right mr-2 text-dark"></i> 15%
                  discount on coffee drinks at our stores.
                </li>
              </ul>
              <div className="text-center mt-3">
                <OverlayTrigger
                  trigger="click"
                  rootClose
                  placement="top"
                  overlay={popover}
                >
                  <Button
                    className="mt-4 rounded-pill px-5 py-2 "
                    variant="dark"
                    size="lg"
                  >
                    Subscribe
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </Col>
          <Col
            col={4}
            lg={4}
            mb={4}
            className="justify-content-md-center mb-5 "
          >
            <div className="bg-white p-5 rounded-lg shadow  ">
              <h1 className="text-center font-weight-bold mb-4">Pro</h1>
              <p className="text-center font-weight-bold mb-4">
                Receive 3 bag of 250 gr. each 15 days.
              </p>
              <h3 className=" text-center font-weight-bold">
                $2.400
                <span className="text-small font-weight-normal ml-2">
                  / month
                </span>
              </h3>
              <div className="custom-separator my-4 mx-auto bg-dark"></div>

              <ul class="list-unstyled my-3 text-small text-left">
                <li className="mb-3">
                  <i className="fa fa-chevron-right mr-2 text-dark"></i> Receive
                  blends and origins specially selected by our roaster.
                </li>
                <li className="mb-3">
                  <i className="fa fa-chevron-right mr-2 text-dark"></i>{" "}
                  Shipping frequency every 15 days.
                </li>
                <li className="mb-3">
                  <i className="fa fa-chevron-right mr-2 text-dark"></i> Free
                  shipping within Montevideo to José Ignacio.
                </li>
                <li className="mb-3">
                  <i className="fa fa-chevron-right mr-2 text-dark"></i> 10%
                  discount on coffee drinks at our stores.
                </li>
                <li className="mb-3">
                  <i className="fa fa-chevron-right mr-2 text-dark"></i> 15%
                  discount on coffee drinks at our stores.
                </li>
              </ul>
              <div className="text-center mt-3">
                <OverlayTrigger
                  trigger="click"
                  rootClose
                  placement="top"
                  overlay={popover}
                >
                  <Button
                    className="mt-4 rounded-pill px-5 py-2 "
                    variant="dark"
                    size="lg"
                  >
                    Subscribe
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </Col>
          <h2 className="text-center my-5">Frequently Asked Questions</h2>
          <Col xs={12} md={8} className="mx-auto mb-5">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What payment methods do you work with?
                </Accordion.Header>
                <Accordion.Body>
                  We accept all major credit and debit cards through Mercado
                  Pago.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How do I change my subscription plan?
                </Accordion.Header>
                <Accordion.Body>
                  You can change to a new plan after the first month of the
                  current selection has elapsed. You let us know and we will
                  make the change.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Can I unsubscribe at any time?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! You just have to wait for the first month to elapse from
                  the start of your subscription. The only way to successfully
                  unsubscribe is to let us know and we will unsubscribe you.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  I don't have a mill, can you send it to me already ground?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, of course. Choose your type of grind at check out and we
                  will send it to you ground according to your needs.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>How do deliveries work? </Accordion.Header>
                <Accordion.Body>
                  We deliver from Monday to Friday between 16:00 to 21:00 hs. If
                  you need us to deliver it in a particular time slot or you
                  need to change your delivery day, we can coordinate it.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Subscription;
