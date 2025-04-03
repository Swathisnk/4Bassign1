import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselComponent() {
  return (
    <Carousel prevIcon={<span className="carousel-control-prev-icon" style={{ filter: "invert(100%)" }} />}
    nextIcon={<span className="carousel-control-next-icon" style={{ filter: "invert(100%)" }} />}
>
      <Carousel.Item>
      <img 
  className="d-block" 
  src="/images/movie2.jpg" 
  alt="Kaappaan" 
  style={{ 
    width: "500px", 
    height: "500px", 
    objectFit: "contain", 
    display: "block", 
    margin: "0 auto" 
  }} 
/>


        <Carousel.Caption>
          <h3>Kaappan</h3>
          <p>An epic sci-fi adventure!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img 
  className="d-block" 
  src="/images/movie3.jpg" 
  alt="Avatar" 
  style={{ 
    width: "500px", 
    height: "500px", 
    objectFit: "contain", 
    display: "block", 
    margin: "0 auto" 
  }} 
/>


        <Carousel.Caption>
          <h3>Ramsetu</h3>
          <p>A mind-bending thriller!</p>
        </Carousel.Caption>

        </Carousel.Item>

<Carousel.Item>
<img 
className="d-block" 
src="/images/movie1.jpg" 
alt="Avatar" 
style={{ 
width: "500px", 
height: "500px", 
objectFit: "contain", 
display: "block", 
margin: "0 auto" 
}} 
/>


  <Carousel.Caption>
    <h3>Shaitaan</h3>
    <p>A mind-bending thriller!</p>
  </Carousel.Caption>


      </Carousel.Item>
      <Carousel.Item>
      <img 
  className="d-block" 
  src="/images/movie4.jpg" 
  alt="Avatar" 
  style={{ 
    width: "500px", 
    height: "500px", 
    objectFit: "contain", 
    display: "block", 
    margin: "0 auto" 
  }} 
/>


        <Carousel.Caption>
          <h3>Major</h3>
          <p>An epic sci-fi adventure!</p>
        </Carousel.Caption>
      </Carousel.Item>
      

    </Carousel>
  );
}

export default CarouselComponent;
