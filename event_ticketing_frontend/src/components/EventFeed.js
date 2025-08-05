import React, { useState } from 'react';
import './EventFeed.css';

// PUBLIC_INTERFACE
const EventFeed = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock event data for layout purposes
  const mockEvents = [
    {
      id: 1,
      title: "Summer Music Festival",
      date: "July 15, 2024",
      location: "Central Park, NY",
      price: "$45",
      image: "https://via.placeholder.com/300x200/db0000/ffffff?text=Event+1"
    },
    {
      id: 2,
      title: "Tech Conference 2024",
      date: "August 22, 2024",
      location: "Convention Center, SF",
      price: "$120",
      image: "https://via.placeholder.com/300x200/424242/ffffff?text=Event+2"
    },
    {
      id: 3,
      title: "Food & Wine Expo",
      date: "September 5, 2024",
      location: "Downtown Plaza, LA",
      price: "$35",
      image: "https://via.placeholder.com/300x200/9e9e9e/ffffff?text=Event+3"
    }
  ];

  const filteredEvents = mockEvents.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="event-feed">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Discover Amazing Events</h1>
            <p className="hero-subtitle">
              Find and book tickets for the best events in your area
            </p>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search events by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button className="search-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19S2 15.194 2 10.5 5.806 2 10.5 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="events-section">
          <div className="section-header">
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-subtitle">
              {filteredEvents.length} events found
            </p>
          </div>

          <div className="events-grid">
            {filteredEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <div className="event-price">{event.price}</div>
                </div>
                <div className="event-details">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-date">{event.date}</p>
                  <p className="event-location">{event.location}</p>
                  <button className="btn btn-primary event-btn">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="no-events">
              <p>No events found matching your search.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default EventFeed;
