import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <Slider {...settings} className="w-full h-72">
          <div>
            <img
              src="https://via.placeholder.com/1920x288"
              alt="Slide 1"
              className="w-full h-72 object-contain"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1920x288"
              alt="Slide 2"
              className="w-full h-72 object-contain"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1920x288"
              alt="Slide 3"
              className="w-full h-72 object-contain"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1920x288"
              alt="Slide 4"
              className="w-full h-72 object-contain"
            />
          </div>
          <div>
            <img
              src="src/components/Home/header.png"
              alt="Slide 5"
              className="w-full h-72 object-contain"
            />
          </div>
        </Slider>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-1/2 text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-8 text-center md:text-left">About Us</h2>
            <p className="text-lg text-gray-700 mb-4 text-center md:text-left">
              BU-CS Nexus is a platform that connects alumni and students of BU-CS. Our mission is to foster a strong community where members can share experiences, network, and support each other.
            </p>
            <p className="text-lg text-gray-700 mb-4 text-center md:text-left">
              Whether you are a recent graduate or a seasoned professional, BU-CS Nexus provides the resources and connections you need to succeed. Join us today and be a part of our growing community.
            </p>
            <div className="text-center md:text-left">
              <Link to="/about" className="bg-blue-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                View More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="src/components/Home/cover.png" alt="About Us" className="w-full h-auto rounded shadow" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Alumni Directory</h3>
              <p className="text-gray-600 mb-4">Find and connect with alumni from BU-CS.</p>
              <Link to="/alumni-directory" className="text-blue-500 hover:underline font-semibold">
                Explore
              </Link>
            </div>
            <div className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Events</h3>
              <p className="text-gray-600 mb-4">Stay updated with upcoming events and reunions.</p>
              <Link to="/events" className="text-blue-500 hover:underline font-semibold">
                View Events
              </Link>
            </div>
            <div className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Blog</h3>
              <p className="text-gray-600 mb-4">Read and share stories and experiences.</p>
              <Link to="/blog" className="text-blue-500 hover:underline font-semibold">
                Read Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Blogs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/blog" className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition duration-300">
              <img src="https://via.placeholder.com/400x200" alt="Blog 1" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold text-blue-600">Blog 1</h3>
              <p className="text-gray-700">
                A brief description of the first blog post.
              </p>
            </Link>
            <Link to="/blog" className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition duration-300">
              <img src="https://via.placeholder.com/400x200" alt="Blog 2" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold text-blue-600">Blog 2</h3>
              <p className="text-gray-700">
                A brief description of the second blog post.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Feedback</h2>
          <textarea
            className="w-full h-24 border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Type here..."
          ></textarea>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;