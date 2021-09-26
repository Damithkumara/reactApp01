import React from "react";
import {Nav , Navbar } from 'react-bootstrap';
import Logo from '../../images/logo.png'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const navLinks = [
    {
      title: "ALL ITEMS",
      links: "/all_items",
    },
    {
      title: "DRESSES",
      links: "/dresses",
    },
    {
      title: "SEASONAL",
      links: "/seasonal",
    },
    {
      title: "DENIMS",
      links: "/denims",
    },
    {
      title: "TSHIRTS",
      links: "/tshirt",
    },
    {
      title: "TOPS",
      links: "/tops",
    },
  ];

export default function Header() {
  return (
    <div>
      <Navbar
        onToggle={() => console.log("Toggle")}
        onSelect={(eventKey) => console.log(eventKey)}
        style={{ background: "#690aa8" }}
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="100"
            height="30"
            className="d-inline-block align-top"
            alt="compay logo"/>
          {/* DK-Fashion */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((val, key) => {
              return (
                <Nav.Link key={key} style={{ color: "white" }} href={val.links}>
                  {val.title}
                </Nav.Link>
              );
            })}
          </Nav>
          <Nav>
            <Nav.Link style={{ color: "white" }} eventKey={2} href="#cart">
              CART <AddShoppingCartIcon/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
