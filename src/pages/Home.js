import React from "react";
import CarouselComponent from "../components/CarouselComponent"; 
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-4">
      <h2 className="text-center">Welcome to BookMyShow 2.0</h2>
      <CarouselComponent />
    </Container>
  );
}

export default Home;
