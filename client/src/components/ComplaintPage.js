import React from 'react';

const ComplaintPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-10 space-y-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
          We're Here to Help!
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Had an issue on one of your recent trips? Let us know, and we'll do our best to resolve it!
        </p>

        {/* Booking ID */}
        <div>
          <label htmlFor="bookingId" className="block text-gray-800 font-semibold mb-2">
            Booking ID
          </label>
          <input
            type="text"
            id="bookingId"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-400"
            placeholder="Enter your booking ID"
          />
        </div>

        {/* Issue Outline */}
        <div>
          <label htmlFor="issueOutline" className="block text-gray-800 font-semibold mb-2">
            Outline of the Issue
          </label>
          <select
            id="issueOutline"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400"
          >
            <option value="">Select an issue</option>
            <option value="delayed">Delayed Arrival</option>
            <option value="cancellation">Unexpected Cancellation</option>
            <option value="service">Poor Service Quality</option>
            <option value="billing">Billing Discrepancy</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Issue Description */}
        <div>
          <label htmlFor="issueDescription" className="block text-gray-800 font-semibold mb-2">
            Describe Your Issue in Detail
          </label>
          <textarea
            id="issueDescription"
            rows="6"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-400 resize-none"
            placeholder="Provide as many details as possible to help us resolve the issue."
          ></textarea>
        </div>

        {/* Contact Information */}
        <p className="text-gray-700 text-center text-lg mt-8">
          Or email us at{' '}
          <a
            href="mailto:arshpreet.singh24m@iiitg.ac.in"
            className="text-indigo-500 font-semibold underline hover:text-indigo-700 transition duration-300"
          >
            arshpreet.singh24m@iiitg.ac.in
          </a>
        </p>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button className="w-full md:w-1/2 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl rounded-full font-semibold hover:bg-gradient-to-l transform transition duration-300 ease-in-out hover:scale-105 shadow-lg">
            Submit Complaint
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplaintPage;
