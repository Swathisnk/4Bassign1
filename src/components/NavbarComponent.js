import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button, ListGroup, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/bookmyshowlogo.png";

// Movies list with availability
const moviesList = [
  { name: "Avatar", available: true },
  { name: "Spider-Man: No Way Home", available: true },
  { name: "The Batman", available: false }, // Sold out
  { name: "Inception", available: true },
  { name: "Interstellar", available: true },
  { name: "Joker", available: false }, // Sold out
  { name: "Oppenheimer", available: true },
  { name: "The Dark Knight", available: true },
  { name: "Dune: Part Two", available: false } // Sold out
];

function NavbarComponent({ darkMode, setDarkMode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [message, setMessage] = useState(null); // To show ticket availability
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Handle input change and filter movies
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredMovies([]);
    } else {
      const filtered = moviesList
        .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
        .map((movie) => movie.name);

      setFilteredMovies(filtered.length > 0 ? filtered : ["No results found"]);
    }
  };

  // Handle Enter key press to search
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && searchQuery.trim() !== "") {
      const matchedMovie = moviesList.find((movie) => movie.name.toLowerCase() === searchQuery.toLowerCase());
      if (matchedMovie) {
        handleSelectMovie(matchedMovie.name);
      }
    }
  };

  // Handle clicking search button
  const handleSearchClick = () => {
    const matchedMovie = moviesList.find((movie) => movie.name.toLowerCase() === searchQuery.toLowerCase());
    if (matchedMovie) {
      handleSelectMovie(matchedMovie.name);
    }
  };

  // Handle selecting a movie from the dropdown
  const handleSelectMovie = (movieName) => {
    if (movieName === "No results found") return;

    const selectedMovie = moviesList.find((movie) => movie.name === movieName);
    
    if (selectedMovie) {
      setMessage(selectedMovie.available ? "✅ Tickets Available!" : "❌ Sold Out");
      
      setTimeout(() => {
        navigate(`/movies/${movieName.toLowerCase().replace(/\s+/g, "-")}`);
        setMessage(null);
      }, 2000);
    }

    setSearchQuery("");
    setFilteredMovies([]);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setFilteredMovies([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="BookMyShow Logo" style={{ height: "40px", marginRight: "10px" }} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
              <Nav.Link as={Link} to="/events">Events</Nav.Link>
              <Nav.Link as={Link} to="/sports">Sports</Nav.Link>
              <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
            </Nav>

            {/* Search Bar with Dropdown */}
            <Form className="d-flex me-3 position-relative" ref={searchRef}>
              <FormControl
                type="search"
                placeholder="Search movies..."
                className="me-2"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleKeyPress}
                style={{ width: "250px" }}
              />
              <Button variant="outline-light" onClick={handleSearchClick}>Search</Button>

              {searchQuery && filteredMovies.length > 0 && (
                <ListGroup className="position-absolute bg-light w-100 mt-2 shadow" style={{ zIndex: 1000 }}>
                  {filteredMovies.map((movie, index) => (
                    <ListGroup.Item
                      key={index}
                      action
                      onClick={() => handleSelectMovie(movie)}
                      className={movie === "No results found" ? "text-muted" : ""}
                    >
                      {movie}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Form>

            <Button variant="outline-light" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Ticket Availability Message */}
      {message && (
        <Alert variant={message.includes("Sold Out") ? "danger" : "success"} className="text-center mt-3">
          {message}
        </Alert>
      )}
    </>
  );
}

export default NavbarComponent;
