import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import projects from './projectsData'; // Import projects data

const StarRating = ({ rating, onRating, averageRating, ratingCount }) => {
    const [hover, setHover] = useState(null);

    return (
        <div className="flex items-center">
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;

                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => onRating(ratingValue)}
                            className="hidden"
                        />
                        <FaStar
                            className="cursor-pointer"
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            size={24}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
            <span className="ml-2 text-gray-700">{averageRating.toFixed(1)} ({ratingCount} ratings)</span>
        </div>
    );
};

const SubmittedProjects = () => {
    const [ratings, setRatings] = useState({});
    const [ratingCounts, setRatingCounts] = useState({});
    const [ratedProjects, setRatedProjects] = useState({});

    useEffect(() => {
        const storedRatings = JSON.parse(localStorage.getItem('ratedProjects')) || {};
        setRatedProjects(storedRatings);
    }, []);

    const handleRating = (projectId, rating) => {
        setRatings(prevRatings => {
            const newRatings = { ...prevRatings };
            if (!newRatings[projectId]) {
                newRatings[projectId] = [];
            }

            const userPreviousRating = ratedProjects[projectId];
            if (userPreviousRating) {
                // Update the existing rating
                const index = newRatings[projectId].indexOf(userPreviousRating);
                if (index !== -1) {
                    newRatings[projectId][index] = rating;
                }
            } else {
                // Add a new rating
                newRatings[projectId].push(rating);
                setRatingCounts(prevCounts => ({
                    ...prevCounts,
                    [projectId]: (prevCounts[projectId] || 0) + 1
                }));
            }

            return newRatings;
        });

        const updatedRatedProjects = { ...ratedProjects, [projectId]: rating };
        setRatedProjects(updatedRatedProjects);
        localStorage.setItem('ratedProjects', JSON.stringify(updatedRatedProjects));
    };

    const calculateAverageRating = (projectId) => {
        if (!ratings[projectId] || ratings[projectId].length === 0) {
            return 0;
        }
        const total = ratings[projectId].reduce((acc, rating) => acc + rating, 0);
        return total / ratings[projectId].length;
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Submitted Projects</h1>
            <div className="flex flex-wrap -mx-2">
                {projects.map(project => (
                    <div key={project.id} className="w-full md:w-1/2 px-2 mb-4">
                        <div className="p-4 border rounded shadow">
                            <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
                            <p className="text-gray-800 mb-2"><strong>Owner:</strong> {project.owner}</p>
                            <p className="text-gray-500 mb-2"><strong>Batch:</strong> {project.batch}</p>
                            <p className="text-gray-700 mb-2"><strong>Description:</strong> {project.description}</p>
                            <p className="text-gray-700 mb-2"><strong>Tools Used:</strong> {project.tools.join(", ")}</p>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mb-2 block">GitHub Link</a>
                            <a href={project.linkedinLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mb-2 block">LinkedIn Profile</a>
                            <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href={`mailto:${project.email}`} className="text-blue-500 hover:underline">{project.email}</a></p>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold mb-2">Rate this project:</h3>
                                <StarRating
                                    rating={ratedProjects[project.id] || 0}
                                    onRating={(rating) => handleRating(project.id, rating)}
                                    averageRating={calculateAverageRating(project.id)}
                                    ratingCount={ratingCounts[project.id] || 0}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubmittedProjects;