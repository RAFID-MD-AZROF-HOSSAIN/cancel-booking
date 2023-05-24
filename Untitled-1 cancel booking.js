// Assuming you have an array of bookings
let bookings = [
    { id: 1, guestName: "John Doe", roomNumber: 101 },
    { id: 2, guestName: "Jane Smith", roomNumber: 202 },
    { id: 3, guestName: "Alice Johnson", roomNumber: 303 }
  ];
  
  // Function to cancel a booking based on the provided booking ID
  function cancelBooking(bookingId) {
    // Find the index of the booking in the array
    const bookingIndex = bookings.findIndex(booking => booking.id === bookingId);
  
    if (bookingIndex !== -1) {
      // Remove the booking from the array
      const canceledBooking = bookings.splice(bookingIndex, 1)[0];
      
      console.log("Booking canceled successfully:", canceledBooking);
    } else {
      console.log("Booking not found!");
    }
  }
  
  // Usage example: Canceling a booking with ID 2
  cancelBooking(2);
  