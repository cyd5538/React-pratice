import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Products from "./Products";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div classname="hero">
      <Card className="bg-dark text-white border-0">
        <Card.Img src="asset/background.jpg" height="550px" alt="bg" />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center">
          <Container >
            <Card.Title>
              <h1 style={{fontWeight :'bold',color:'black'}}>NEW SEASEON ARRIVALS</h1>
            </Card.Title>
            <Card.Text style={{color:'black',fontSize:'1.2rem'}}>CHECK OUT ALL THE TRENDS.</Card.Text>
          </Container>
        </Card.ImgOverlay>
      </Card>
      <Products/>
    </div>
  );
};
export default Home;
