import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">LA COLLECTION</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link  style={{ marginLeft: "200px" }}><Link to="/Home">Home</Link></Nav.Link>
              <Nav.Link ><Link to="/Products">Products</Link></Nav.Link>
              <Nav.Link ><Link to="/About">About</Link></Nav.Link>
          
              <Nav.Link >
              <Link to="/contact">
                Contact
                </Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex ">
           
              <Button to="/login" variant="outline-success" style={{marginRight : '10px'}}>Login</Button>
              <Button to="/register" variant="outline-success" style={{marginRight : '10px'}}>Register</Button>
              <Button to="/cart" variant="outline-success">Cart (0)</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
