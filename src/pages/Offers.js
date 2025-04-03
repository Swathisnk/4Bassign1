import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import movieOfferImg from "../assets/images/movie7.webp"; 
import weekendImg from "../assets/images/movie6.jpg"; 
import cardOfferImg from "../assets/images/movie5.jpg"; 

const offersList = [
  {
    title: "Weekend Special 🎉",
    description: "Get 20% off on movie tickets every weekend!",
    image: weekendImg,
  },
  {
    title: "Credit Card Offer 💳",
    description: "Flat Rs. 150 off on tickets booked with XYZ Bank cards.",
    image: cardOfferImg, 
  },
  {
    title: "Buy 1 Get 1 Free 🎟️",
    description: "Exclusive offer on select shows for premium members.",
    image: movieOfferImg, 
  },
];

function Offers() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">🔥 Exclusive Offers</h2>
      <Row>
        {offersList.map((offer, index) => (
          <Col key={index} md={4}>
            <Card className="mb-3 shadow-sm">
              <Card.Img 
                variant="top" 
                src={offer.image} 
                alt={offer.title} 
                style={{ height: "200px", objectFit: "cover", width: "70%" }} 
              />
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Offers;
