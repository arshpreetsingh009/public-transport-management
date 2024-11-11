// ProfilePage.js
import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';

function ProfilePage() {
    const [user, setUser] = useState({});
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userResponse = await fetch('/api/user/profile');
                const userData = await userResponse.json();
                setUser(userData);

                const ticketsResponse = await fetch('/api/user/tickets');
                const ticketsData = await ticketsResponse.json();
                setTickets(ticketsData);
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchProfile();
    }, []);

    const handleDownload = (ticket) => {
        const doc = new jsPDF();
        doc.text("Ticket Details", 10, 10);
        doc.text(`Ticket ID: ${ticket.ticketId}`, 10, 20);
        doc.text(`Bus Number: ${ticket.busNumber}`, 10, 30);
        doc.text(`From: ${ticket.fromLocation}`, 10, 40);
        doc.text(`To: ${ticket.toLocation}`, 10, 50);
        doc.text(`Pick-up Time: ${ticket.pickUpTime}`, 10, 60);
        doc.text(`Drop-off Time: ${ticket.dropOffTime}`, 10, 70);
        doc.text(`Fare: ₹${ticket.fare}`, 10, 80);
        doc.save(`Ticket_${ticket.ticketId}.pdf`);
    };

    return (
        <div style={{
            padding: '40px',
            maxWidth: '900px',
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f3f8ff',
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
            borderRadius: '15px'
        }}>
            <h1 style={{
                textAlign: 'center',
                color: '#007bff',
                fontSize: '36px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                marginBottom: '40px'
            }}>USER PROFILE</h1>
        
            <div style={{
                backgroundColor: '#ffffff',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
                marginBottom: '30px'
            }}>
                <h2 style={{
                    color: '#333',
                    fontSize: '28px',
                    fontWeight: '600',
                    marginBottom: '20px',
                    borderBottom: '2px solid #007bff',
                    paddingBottom: '10px'
                }}>Personal Information</h2>
                <p style={{ fontSize: '20px', marginBottom: '10px' }}><strong>Name:</strong> {user.name}</p>
                <p style={{ fontSize: '20px' }}><strong>Phone Number:</strong> {user.phoneNumber}</p>
            </div>
        
            <div style={{ marginTop: '40px' }}>
                <h2 style={{
                    color: '#333',
                    fontSize: '28px',
                    fontWeight: '600',
                    marginBottom: '20px',
                    borderBottom: '2px solid #28a745',
                    paddingBottom: '10px'
                }}>Tickets</h2>
                
                {tickets.length > 0 ? (
                    tickets.map(ticket => (
                        <div key={ticket.ticketId} style={{
                            border: '1px solid #ddd',
                            padding: '20px',
                            borderRadius: '10px',
                            marginBottom: '20px',
                            backgroundColor: '#f9f9f9',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)'
                        }}>
                            <p style={{ fontSize: '18px', marginBottom: '8px' }}><strong>Ticket ID:</strong> {ticket.ticketId}</p>
                            <p style={{ fontSize: '18px', marginBottom: '8px' }}><strong>Bus Number:</strong> {ticket.busNumber}</p>
                            <p style={{ fontSize: '18px', marginBottom: '8px' }}><strong>From:</strong> {ticket.fromLocation}</p>
                            <p style={{ fontSize: '18px', marginBottom: '8px' }}><strong>To:</strong> {ticket.toLocation}</p>
                            <p style={{ fontSize: '18px', marginBottom: '8px' }}><strong>Pick-up Time:</strong> {ticket.pickUpTime}</p>
                            <p style={{ fontSize: '18px', marginBottom: '8px' }}><strong>Drop-off Time:</strong> {ticket.dropOffTime}</p>
                            <p style={{ fontSize: '18px', marginBottom: '8px' }}><strong>Fare:</strong> ₹{ticket.fare}</p>
        
                            <button
                                onClick={() => handleDownload(ticket)}
                                style={{
                                    marginTop: '15px',
                                    padding: '12px 24px',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                    background: 'linear-gradient(90deg, #28a745, #218838)',
                                    color: '#ffffff',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontWeight: '600',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                    transition: 'background-color 0.3s, transform 0.2s'
                                }}
                            >
                                Download Ticket
                            </button>
                        </div>
                    ))
                ) : (
                    <p style={{ fontSize: '20px', color: '#555' }}>No tickets available.</p>
                )}
            </div>

            {/* More Options Section */}
            <h2 style={{
                color: '#333',
                fontSize: '28px',
                fontWeight: '600',
                marginTop: '60px',
                marginBottom: '20px',
                borderBottom: '2px solid #007bff',
                paddingBottom: '10px',
                textAlign: 'center'
            }}>More Options</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                padding: '40px 20px',
                backgroundColor: '#10497E',
                borderRadius: '15px'
            }}>
                <a href="#" style={{ ...gridItemStyle, backgroundColor: '#FF5778' }}>BOOK TICKETS</a>
                <a href="#" style={{ ...gridItemStyle, backgroundColor: '#FF5778' }}>BOOKING HISTORY</a>
                <a href="#" style={{ ...gridItemStyle, backgroundColor: '#FF5778' }}>RAISE A COMPLAINT</a>
                <a href="#" style={{ ...gridItemStyle, backgroundColor: '#3B7DB9' }}>PTMS COVERAGE MAP</a>
                <a href="#" style={{ ...gridItemStyle, backgroundColor: '#3B7DB9' }}>DISCOUNT OFFERS</a>
                <a href="#" style={{ ...gridItemStyle, backgroundColor: '#3B7DB9' }}>REFUND AND CANCELLATION</a>
                <a href="#" style={{ ...gridItemStyle, backgroundColor: '#3B7DB9' }}>PTMS APP (LAUNCHING SOON)</a>
            </div>
        </div>
    );
}

// Inline style definitions for grid items
const gridItemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '150px',
    borderRadius: '15px',
    color: 'white',
    fontSize: '1.2rem',
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'relative',
    transition: 'transform 0.3s',
    textDecoration: 'none',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
    cursor: 'pointer'
};

export default ProfilePage;
