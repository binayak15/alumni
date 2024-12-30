// import React from 'react';
// import { useParams } from 'react-router-dom';

// const PreviousEventDetails = ({ events }) => {
//     const { eventId } = useParams();
//     const event = events.find(event => event.id === eventId);

//     if (!event) {
//         return <div>Event not found</div>;
//     }

//     return (
//         <div className="container mx-auto py-8">
//             <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
//                 <img
//                     src={event.image}
//                     alt={event.title}
//                     className="w-full h-64 object-cover"
//                 />
//                 <div className="p-4">
//                     <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
//                     <p className="text-gray-600 mb-2">Date: {event.date}</p>
//                     <p className="text-gray-600 mb-4">{event.description}</p>
//                     <p className="text-gray-600 mb-4">Total Pics: {event.totalPics}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PreviousEventDetails;