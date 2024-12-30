import React, { useState } from "react";
import { Link } from "react-router-dom";
import alumniData from "../AlumniDirectory/data/AlumniData";

const AlumniDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered data
  const filteredData = alumniData.map((program) => ({
    ...program,
    batches: program.batches.filter((batch) => {
      const searchLower = searchTerm.toLowerCase();
      return batch.year.includes(searchTerm) || program.program.toLowerCase().includes(searchLower);
    }),
  })).filter((program) => program.batches.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Alumni Directory</h1>

        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search By Name, Year"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border rounded-lg pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
          </svg>
        </div>

        {/* Programs */}
        {filteredData.map((program) => (
          <div key={program.program} className="mb-8">
            {/* Program Title */}
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">{program.program}</h2>

            {/* Batch Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {program.batches.map((batch) => (
                <Link
                  key={batch.year}
                  to={`/batch/${program.program}/${batch.year}`}
                  className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  <h3 className="text-gray-800 font-medium">Class Of {batch.year}</h3>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniDirectory;
