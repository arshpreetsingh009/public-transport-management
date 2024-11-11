// CheckoutPage.js
import React, { useState, useEffect } from 'react';

function CheckoutPage({ busNumber, fromLocation, toLocation, pickUpTime, endTime, scheduleId }) {
    const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState(null); // null, 'success', or 'failure'
    const [fare, setFare] = useState(null); // Stores fare from backend
    const [error, setError] = useState(null);

    // Fetch fare from backend API
    useEffect(() => {
        const fetchFare = async () => {
            try {
                const response = await fetch(`/api/fare?fromLocation=${fromLocation}&toLocation=${toLocation}&scheduleId=${scheduleId}`);
                const data = await response.json();
                if (response.ok) {
                    setFare(data.fare); // Assuming the API returns fare as part of the response
                } else {
                    setError("Failed to fetch fare.");
                }
            } catch (error) {
                console.error("Error fetching fare:", error);
                setError("Error fetching fare.");
            }
        };

        fetchFare();
    }, [fromLocation, toLocation, scheduleId]);

    const handlePayment = () => {
        setIsPaymentProcessing(true);

        // Simulate payment processing delay
        setTimeout(() => {
            // Randomly simulate success or failure
            const isSuccess = Math.random() > 0.5;
            setPaymentStatus(isSuccess ? 'success' : 'failure');
            setIsPaymentProcessing(false);
        }, 2000); // Simulated 2-second delay
    };

    const renderPaymentResult = () => {
        if (paymentStatus === 'success') {
            return <p style={{ color: 'green' }}>Payment Successful! Payment ID: DUMMY12345</p>;
        } else if (paymentStatus === 'failure') {
            return <p style={{ color: 'red' }}>Payment Failed. Please try again.</p>;
        }
        return null;
    };

    if (isPaymentProcessing) {
        return (
            <div style={{
                padding: '20px', maxWidth: '500px', margin: '0 auto',
                textAlign: 'center', fontFamily: 'Arial'
            }}>
                <h2>Processing Payment...</h2>
                <p>Please wait while we process your payment.</p>
            </div>
        );
    }

    return (
        <div style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '100vh', 
            backgroundColor: '#f3f4f6', 
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{
                padding: '60px', 
                maxWidth: '900px', 
                width: '100%', 
                backgroundColor: '#ffffff', 
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)', 
                borderRadius: '15px'
            }}>
                <h2 style={{
                    fontSize: '36px', 
                    color: '#333', 
                    marginBottom: '40px', 
                    fontWeight: 'bold', 
                    letterSpacing: '1px', 
                    textTransform: 'uppercase',
                    textAlign: 'center'
                }}>Checkout</h2>
                
                <div style={{
                    fontSize: '22px', 
                    color: '#555', 
                    lineHeight: '1.8', 
                    marginBottom: '30px'
                }}>
                    <p style={{ textAlign: 'left' }}><strong>Bus Number:</strong> {busNumber}</p>
                    <p style={{ textAlign: 'left' }}><strong>From:</strong> {fromLocation}</p>
                    <p style={{ textAlign: 'left' }}><strong>To:</strong> {toLocation}</p>
                    <p style={{ textAlign: 'left' }}><strong>Pick-up Time:</strong> {pickUpTime}</p>
                    <p style={{ textAlign: 'left' }}><strong>End Time:</strong> {endTime}</p>
                </div>
        
                {error ? (
                    <p style={{
                        color: '#ff4d4d', 
                        fontSize: '20px', 
                        marginBottom: '30px', 
                        fontWeight: '500',
                        textAlign: 'left'
                    }}>{error}</p>
                ) : fare !== null ? (
                    <div style={{
                        backgroundColor: '#f0f9ff', 
                        padding: '25px', 
                        borderRadius: '12px', 
                        fontSize: '24px', 
                        lineHeight: '1.8', 
                        color: '#0275d8', 
                        fontWeight: '600', 
                        marginBottom: '40px',
                        textAlign: 'left'
                    }}>
                        <p><strong>Total Fare:</strong> ₹{fare}</p>
                    </div>
                ) : (
                    <p style={{ fontSize: '20px', textAlign: 'left' }}>Loading fare...</p>
                )}
        
                {renderPaymentResult()}
        
                {paymentStatus === null && (
                    <button
                        style={{
                            display: 'block', 
                            margin: '40px auto', 
                            padding: '18px 35px', 
                            fontSize: '22px', 
                            cursor: 'pointer', 
                            backgroundColor: '#ff914d', 
                            color: '#ffffff', 
                            border: 'none', 
                            borderRadius: '10px', 
                            fontWeight: 'bold', 
                            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)', 
                            transition: 'background-color 0.3s, transform 0.2s'
                        }}
                        onClick={handlePayment}
                        disabled={fare === null || error}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#ff6f33'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#ff914d'}
                        onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
                        onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        Proceed to Payment
                    </button>
                )}
            </div>
        </div>
        
    );
}

export default CheckoutPage;
