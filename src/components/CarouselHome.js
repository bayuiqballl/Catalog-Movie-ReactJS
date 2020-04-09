import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../App.css";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
function CarouselHome() {
  return (
    <section className="my-red">
      <Container>
        <Carousel>
          <Carousel.Item>
            <Row className="justify-content-center my-3 py-5">
              <Col md={5} className=" text-left text-light  mb-5">
                <img
                  width="551px"
                  height="351px"
                  className="d-block w-100"
                  src="https://livedemo00.template-help.com/wt_prod-20691/images/slider-4-570x364.jpg"
                  alt="First slide"
                />
                <br></br>
                <h4>
                  <b>Black Mirror</b>
                </h4>
                <h5>Action,Thriller</h5>
              </Col>
              <Col md={5} className="text-left text-light">
                <img
                  width="551px"
                  height="351px"
                  className="d-block w-100"
                  src="https://livedemo00.template-help.com/wt_prod-20691/images/slider-4-570x364.jpg"
                  alt="First slide"
                />
                <br></br>
                <h4>
                  <b>Black Mirror</b>
                </h4>
                <h5>Action,Thriller</h5>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="justify-content-center my-3 py-5">
              <Col md={5} className=" text-left text-light  mb-5">
                <img
                  width="551px"
                  height="351px"
                  className="d-block w-100"
                  src="https://livedemo00.template-help.com/wt_prod-20691/images/slider-4-570x364.jpg"
                  alt="First slide"
                />
                <br></br>
                <h4>
                  <b>Black Mirror</b>
                </h4>
                <h5>Action,Thriller</h5>
              </Col>
              <Col md={5} className="text-left text-light">
                <img
                  width="551px"
                  height="351px"
                  className="d-block w-100"
                  src="https://livedemo00.template-help.com/wt_prod-20691/images/slider-4-570x364.jpg"
                  alt="First slide"
                />
                <br></br>
                <h4>
                  <b>Black Mirror</b>
                </h4>
                <h5>Action,Thriller</h5>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="justify-content-center my-3 py-5">
              <Col md={5} className=" text-left text-light  mb-5">
                <img
                  width="551px"
                  height="351px"
                  className="d-block w-100"
                  src="https://livedemo00.template-help.com/wt_prod-20691/images/slider-4-570x364.jpg"
                  alt="First slide"
                />
                <br></br>
                <h4>
                  <b>Black Mirror</b>
                </h4>
                <h5>Action,Thriller</h5>
              </Col>
              <Col md={5} className="text-left text-light">
                <img
                  width="551px"
                  height="351px"
                  className="d-block w-100"
                  src="https://livedemo00.template-help.com/wt_prod-20691/images/slider-4-570x364.jpg"
                  alt="First slide"
                />
                <br></br>
                <h4>
                  <b>Black Mirror</b>
                </h4>
                <h5>Action,Thriller</h5>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
}

export default CarouselHome;
