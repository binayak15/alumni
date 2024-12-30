import React from 'react';
import { Link } from 'react-router-dom';
import upcomingEvents from './data/UpcomingEvents';

const UpcomingEvents = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Upcoming Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {upcomingEvents.map((event) => (
          <div key={event.eventId} className="border rounded-lg p-4 shadow">
            <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-bold mb-2">{event.title}</h2>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Date:</span> {event.date}</p>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <Link to={`/events/upcoming/${event.eventId}`} className="text-blue-500 hover:underline">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;