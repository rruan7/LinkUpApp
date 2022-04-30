import React, { Component } from "react";
import Navigation from "./Nav";
import { Button, Container, Row, Col } from "reactstrap";

import profile from "./images/Profile.svg";

export default class Matches extends Component {
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
          <h1>Matches</h1>
        </div>
        <br />
        <Container>
          {/* First Match */}
          <Row
            style={{
              backgroundColor: "#17A2B8",
              padding: "20px",
            }}
          >
            <Col sm={2}>
              <img width="75%" src={profile} />
            </Col>
            <Col sm={8}>
              <h4>
                <b style={{ color: "white" }}>Matched Topic: Hackathons</b>
              </h4>
              <br />
              <text style={{ color: "white" }}>
                Matched On <b>04/29/2022</b> With <b>@NewbieWebDeveloper</b>
                <br />
                Video Chat Scheduled for <b>05/01/2022</b> @ <b>6AM PST</b>
              </text>
            </Col>
            <Col sm={2}>
              <div
                style={{
                  height: "100px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button color="warning">
                  <b>Start Video Chat</b>
                </Button>
              </div>
            </Col>
          </Row>

          {/* Second Match */}
          <br />
          <Row
            style={{
              backgroundColor: "#17A2B8",
              padding: "20px",
            }}
          >
            <Col sm={2}>
              <img width="75%" src={profile} />
            </Col>
            <Col sm={8}>
              <h4>
                <b style={{ color: "white" }}>Matched Topic: Mountaineering</b>
              </h4>
              <br />
              <text style={{ color: "white" }}>
                Matched On <b>04/29/2022</b> With <b>@SuperHiker2</b> <br />
                Video Chat Scheduled for <b>05/11/2022</b> @ <b>9AM PST</b>
              </text>
            </Col>
            <Col sm={2}>
              <div
                style={{
                  height: "100px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button disabled color="warning">
                  <b>Start Video Chat in 10d:05h:23m</b>
                </Button>
              </div>
            </Col>
          </Row>

          {/* Third Match */}
          <br />
          <Row
            style={{
              backgroundColor: "#17A2B8",
              padding: "20px",
            }}
          >
            <Col sm={2}>
              <img width="75%" src={profile} />
            </Col>
            <Col sm={8}>
              <h4>
                <b style={{ color: "white" }}>Matched Topic: Recipes</b>
              </h4>
              <br />
              <text style={{ color: "white" }}>
                Matched On <b>04/29/2022</b> With <b>@MasterChef</b> <br />
                Video Chat Scheduled for <b>05/21/2022</b> @ <b>7PM PST</b>
              </text>
            </Col>
            <Col sm={2}>
              <div
                style={{
                  height: "100px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button disabled color="warning">
                  <b>Start Video Chat in 21d:12h:01m</b>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <br />
      </div>
    );
  }
}
