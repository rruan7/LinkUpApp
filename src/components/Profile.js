import React, { Component } from "react";
import Navigation from "./Nav";

import { Button, Container, Row, Col } from "reactstrap";

import profile from "./images/Profile.svg";

export default class Profile extends Component {
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
            marginTop: "5px",
            marginBottom: "5px",
          }}
        >
          <h1>Hacker123's Profile</h1>
        </div>
        <br />
        <Container>
          <Row>
            <Col sm={3}>
              <img
                style={{
                  border: "1px solid #17A2B8",
                }}
                width="85%"
                src={profile}
              />
            </Col>
            <Col sm={9}>
              <Container className="bg-light border">
                <b>Username</b> &emsp; @Hacker123 <br />
                <b>Tagline</b> &emsp; Want to discuss hackathons!
              </Container>
              <br />
              <Container>
                <b>My Topics</b>
                <hr />
                <Row style={{ paddingBottom: "5px" }}>
                  <Col sm={2}>
                    <Button color="info">Hackathons</Button>
                  </Col>
                  <Col sm={2}>
                    <Button color="info">Javascript</Button>
                  </Col>
                  <Col sm={2}>
                    <Button color="info">React.js</Button>
                  </Col>
                  <Col sm={2}>
                    <Button color="info">WebRTC</Button>
                  </Col>
                  <Col sm={2}>
                    <Button color="info">Creatica</Button>
                  </Col>
                  <Col sm={2}>
                    <Button color="info">Github</Button>
                  </Col>
                </Row>
                <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                  <Col sm={2}>
                    <Button color="info">HTML</Button>
                  </Col>
                  <Col sm={2}>
                    <Button color="info">CSS</Button>
                  </Col>
                  <Col sm={2}>
                    <Button color="info">Bootstrap</Button>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
