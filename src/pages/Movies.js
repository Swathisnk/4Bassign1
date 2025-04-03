import React, { useState } from "react";
import { Table, Button, Modal, Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function Movies() {
  const movies = [
    { name: "Avatar", genre: "Action", releaseDate: "2024-03-10", rating: "8.5", price: "Rs.400", trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY" },
    { name: "Spider-Man: No Way Home", genre: "Action", releaseDate: "2024-04-15", rating: "8.2", price: "Rs.350", trailerUrl: "https://www.youtube.com/embed/bK6ldnjE3Y0" },
    { name: "The Batman", genre: "Thriller", releaseDate: "2024-02-20", rating: "7.9", price: "Rs.380", trailerUrl: "https://www.youtube.com/embed/mqqft2x_Aa4" },
    { name: "Inception", genre: "Sci-Fi", releaseDate: "2010-07-16", rating: "8.8", price: "Rs.450", trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0" },
    { name: "Interstellar", genre: "Sci-Fi", releaseDate: "2014-11-07", rating: "8.6", price: "Rs.500", trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E" },
    { name: "Joker", genre: "Drama", releaseDate: "2019-10-04", rating: "8.4", price: "Rs.420", trailerUrl: "https://www.youtube.com/embed/zAGVQLHvwOY" },
    { name: "Oppenheimer", genre: "Biography", releaseDate: "2023-07-21", rating: "8.9", price: "Rs.550", trailerUrl: "https://www.youtube.com/embed/bK6ldnjE3Y0" },
    { name: "The Dark Knight", genre: "Action", releaseDate: "2008-07-18", rating: "9.0", price: "Rs.480", trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY" },
    { name: "Dune: Part Two", genre: "Sci-Fi", releaseDate: "2024-11-03", rating: "8.5", price: "Rs.520", trailerUrl: "https://www.youtube.com/embed/bK6ldnjE3Y0" }
  ];

  const [showTrailer, setShowTrailer] = useState(false);
  const [currentTrailer, setCurrentTrailer] = useState("");

  const handleShowTrailer = (url) => {
    setCurrentTrailer(url + "?autoplay=1"); // Enable autoplay
    setShowTrailer(true);
  };

  const handleCloseTrailer = () => {
    setShowTrailer(false);
    setCurrentTrailer(""); // Stop trailer on close
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">🎬 Now Showing</h2>

      {movies.length === 0 ? (
        <Alert variant="warning" className="text-center">
          No movies available at the moment. Check back later!
        </Alert>
      ) : (
        <Table striped bordered hover responsive className="text-center">
          <thead className="bg-dark text-white">
            <tr>
              <th>Movie Name</th>
              <th>Genre</th>
              <th>Release Date</th>
              <th>Ratings ⭐</th>
              <th>Ticket Price 🎟️</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td>{movie.name}</td>
                <td>{movie.genre}</td>
                <td>{movie.releaseDate}</td>
                <td>{movie.rating}</td>
                <td>{movie.price}</td>
                <td>
                  <Button variant="secondary" onClick={() => handleShowTrailer(movie.trailerUrl)}>
                    🎥 Watch Trailer
                  </Button>
                  <Link to="/booking">
                    <Button variant="primary" className="ms-2">🎟️ Book Now</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Trailer Modal */}
      <Modal show={showTrailer} onHide={handleCloseTrailer} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>🎬 Movie Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <iframe 
            width="100%" 
            height="400" 
            src={currentTrailer} 
            title="Movie Trailer" 
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Movies;
