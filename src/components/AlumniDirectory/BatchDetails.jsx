import React from "react";
import { useParams, Link } from "react-router-dom";
import alumniData from "../AlumniDirectory/data/AlumniData";

const BatchDetails = () => {
  const { programName, year } = useParams();

  const program = alumniData.find((p) => p.program === programName);
  const batch = program?.batches.find((b) => b.year === year);

  if (!batch) {
    return <p className="text-center text-gray-600">No data found for this batch.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          {programName} - Class of {year}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {batch.students.map((student, index) => (
            <Link
              key={index}
              to={`/profile/${student.name.replace(/\s+/g, '-').toLowerCase()}`}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 duration-300 text-center"
            >
              <img
                src={student.profilePic}
                alt={student.name}
                className="w-20 h-20 mx-auto rounded-full mb-3"
              />
              <h3 className="font-medium text-gray-700">{student.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BatchDetails;
