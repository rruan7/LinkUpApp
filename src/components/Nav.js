import {
  Nav,
  NavLink,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import React, { Component } from "react";

/* COMPONENT THAT RENDERS NAVBAR */

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <main>
        <Navbar
          className="pb-0"
          style={{
            backgroundColor: "#FFC107",
          }}
          light
          expand="lg"
        >
          <NavbarBrand
            className="mx-2 py-3"
            href="/"
            style={{ fontSize: "x-large" }}
          >
            <b>LinkUp</b>
          </NavbarBrand>
          <NavbarToggler className="me-5" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/matches">
                  <b>Matches</b>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/profile">
                  <b>Profile</b>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <br />
      </main>
    );
  }
}
