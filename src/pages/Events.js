import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import concertImg from "../assets/images/musicconcert.jpg";
import conferenceImg from "../assets/images/techconference.jpg";
import comedyImg from "../assets/images/comedyevent.jpg";

const eventsList = [
  { name: "Music Concert", date: "April 15, 2025", location: "Bangalore", image: concertImg },
  { name: "Tech Conference", date: "May 5, 2025", location: "Mumbai", image: conferenceImg },
  { name: "Stand-up Comedy", date: "May 20, 2025", location: "Delhi", image: comedyImg },
];

function Events() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">🎉 Upcoming Events</h2>
      <Row>
        {eventsList.map((event, index) => (
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

export default Events;
