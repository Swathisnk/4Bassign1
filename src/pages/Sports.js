import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import cricketImg from "../assets/images/cricket.jpg"; 
import footballImg from "../assets/images/football.jpg"; 
import tennisImg from "../assets/images/tennis.jpg"; 

const sportsList = [
  { name: "Cricket Match", date: "April 20, 2025", location: "Mumbai", image: cricketImg },
  { name: "Football League", date: "May 10, 2025", location: "Kolkata", image: footballImg },
  { name: "Tennis Championship", date: "June 5, 2025", location: "Chennai", image: tennisImg },
];

function Sports() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">🏆 Live Sports Matches</h2>
      <Row>
        {sportsList.map((event, index) => (
          <Col key={index} md={4}>
            <Card className="mb-3 shadow-sm">
              <Card.Img 
                variant="top" 
                src={event.image} 
                alt={event.name} 
                style={{ height: "200px", objectFit: "cover", width: "100%" }} 
              />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>
                  📅 {event.date} <br />
                  📍 {event.location}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Sports;
