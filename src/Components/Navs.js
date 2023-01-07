
import React, { useContext, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../Style/Navs.css";
import { RiShoppingBasketLine } from "react-icons/ri";
import { Button } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";

const Navs = (props) => {
  const Products = props.data;
  return (
    <div>
          <div>
        <div>
          <Navbar className="Nav-fother">
            <Container className="first-container">
              <div>
                <h1 className="Lusion">Lusion</h1>
              </div>
            </Container>
          </Navbar>
        </div>
        {["md"].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className=" mb-3 nav-container">
            <Container fluid  className="Nav-2line" >
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                className="side-nav"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                  >
                    Lusion
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className=" nav-cont flex-grow-1 pe-3">
                    <Link to={"/Shop"}>
                      <Navbar.Brand className="Links">Shop</Navbar.Brand>
                    </Link>
                    <Link to={"/"}>
                      <Navbar.Brand className="Links">Home</Navbar.Brand>
                    </Link>
                    <Link className="shopCart-logo" to={"/ShoppingCarD"}>
                      <Button className="ShoppingCarD-Btn">
                        <RiShoppingBasketLine className="Cart-logo" />
                        <Badge
                          bg={
                            Products.length === 0
                              ? "danger"
                              : "success"
                          }
                        >{`${Products.length}`}</Badge>
                      </Button>
                    </Link>
                   
                    
                    {/* <Link to={"/Signin"}>
                      <Button onClick={signout} className="signout">
                        <Navbar.Brand  className="Links">Sign In</Navbar.Brand>
                      </Button>
                    </Link> */}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
      </div>
  );
};

export default Navs;
