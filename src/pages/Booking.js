import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import "../assets/css/booking.css";

function Booking() {
  const seats = Array.from({ length: 30 }, (_, i) => i + 1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const toggleSeat = (seat) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat) ? prevSeats.filter((s) => s !== seat) : [...prevSeats, seat]
    );
  };

  const handleConfirmBooking = () => {
    if (selectedSeats.length > 0) {
      setBookingSuccess(true); // Show confirmation message
      setTimeout(() => setBookingSuccess(false), 3000); // Hide after 3 seconds
      setSelectedSeats([]); // Clear selected seats after booking
    }
  };

  return (
    <div className="container mt-4">
      <h2>Select Your Seats</h2>
      
      {/* Success Message */}
      {bookingSuccess && <Alert variant="success">🎉 Booking Confirmed! Enjoy your movie. 🍿</Alert>}

      <div className="seat-container">
        {seats.map((seat) => (
          <Button 
            key={seat} 
            className={selectedSeats.includes(seat) ? "seat-selected" : "seat"} 
            onClick={() => toggleSeat(seat)}
          >
            {seat}
          </Button>
        ))}
      </div>

      <h4>Total Price: Rs. {selectedSeats.length * 400}</h4>

      <Button 
        variant="success" 
        disabled={selectedSeats.length === 0} 
        onClick={handleConfirmBooking}
      >
        Confirm Booking
      </Button>
    </div>
  );
}

export default Booking;
