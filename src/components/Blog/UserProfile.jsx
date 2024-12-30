// UserProfile.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import userData from './userData';

const UserProfile = () => {
  const { name, bio, achievements, awards, career, testimonials, socialLinks } = userData;

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Profile Section */}
      <main className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
        <div className="flex items-center gap-6">
          <img
            src={userData.profileImage}
            alt="User"
            className="h-24 w-24 rounded-full border border-gray-300"
          />
          <div>
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p className="text-gray-600">{bio}</p>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-6">
          <ul className="flex gap-4 border-b">
            {['Achievements', 'Education', 'Career', 'Arts and Clubs', 'Social', 'Requests'].map(
              (tab, index) => (
                <li
                  key={index}
                  className="px-4 py-2 text-blue-900 cursor-pointer hover:border-b-2 hover:border-blue-500"
                >
                  <Link to={`/${tab.toLowerCase().replace(/ /g, '-')}`}>{tab}</Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Content Section */}
        <section className="mt-4">
          {/* Achievements */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Achievements</h3>
            {achievements.length > 0 ? (
              <ul className="list-disc ml-5">
                {achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-600">{achievement}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No achievements added yet.</p>
            )}
          </div>

          {/* Educational Awards */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Educational Awards/Mentions</h3>
            {awards.length > 0 ? (
              <ul className="list-disc ml-5">
                {awards.map((award, index) => (
                  <li key={index} className="text-gray-600">{award}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No awards or mentions added yet.</p>
            )}
          </div>

          {/* Career Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Career</h3>
            <ul className="space-y-4">
              {career.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                  <p className="text-gray-600">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonials */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Testimonials</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded shadow-md">
                  <p className="text-gray-600">{`"${testimonial}"`}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Social Links</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ name, url }, index) => (
                <a key={index} href={url} className="text-blue-600">
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Update Request */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Update Request</h3>
            <textarea
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter your update request here..."
            ></textarea>
            <button className="bg-blue-900 text-white px-6 py-2 rounded mt-4">Send</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserProfile;
