import React, { Component } from "react";
import Navigation from "./Nav";
import {
  Form,
  FormGroup,
  Button,
  Input,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
} from "reactstrap";

import creatica from "./images/Creatica.svg";
import mod from "./images/MOD.svg";
import nature from "./images/Nature.svg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Find A Topic!</h1>
        </div>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Form style={{ width: "80vw" }}>
            <FormGroup row>
              <Col sm={11}>
                <Input placeholder="Example: Creatica" />
              </Col>
              <Button color="info" sm={1}>
                Search
              </Button>
            </FormGroup>
          </Form>
        </div>
        <br />
        <Container>
          <Row style={{ paddingBottom: "5px" }}>
            <Col sm={4}>
              <Card color="info" style={{ border: "0px" }}>
                <CardImg src={creatica} top width="100%" />
                <CardBody>
                  <CardTitle style={{ color: "white" }} tag="h5">
                    <b>Creatica Hackathon 2022</b>
                  </CardTitle>
                  <Button color="warning">
                    <b>Match Me!</b>
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm={4}>
              <Card color="info" style={{ border: "0px" }}>
                <CardImg src={mod} top width="100%" />
                <CardBody>
                  <CardTitle style={{ color: "white" }} tag="h5">
                    <b>Pizza</b>
                  </CardTitle>
                  <Button color="warning">
                    <b>Match Me!</b>
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm={4}>
              <Card color="info" style={{ border: "0px" }}>
                <CardImg src={nature} top width="100%" />
                <CardBody>
                  <CardTitle style={{ color: "white" }} tag="h5">
                    <b>Hiking</b>
                  </CardTitle>
                  <Button color="warning">
                    <b>Match Me!</b>
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <br />
      </div>
    );
  }
}
