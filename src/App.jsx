import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import AlumniDirectory from "./components/AlumniDirectory/AlumniDirectory";
import BatchDetails from "./components/AlumniDirectory/BatchDetails";
import StudentProfile from "./components/AlumniDirectory/StudentProfile";
import Events from "./components/Event/EventPage";
import EventDetails from "./components/Event/EventDetails";
import JoinUs from "./components/Event/JoinUs";
import UpcomingEvents from "./components/Event/UpcomingEvents";
import Blog from "./components/Blog/Blog";
import Login from "./components/Login/Login/Login";
import SignUp from "./components/Login/Login/SignUp/SignUp";
import ResetPassword from "./components/Login/ResetPassword/ResetPassword";
import Memories from "./components/Memories/Memories";
import Gallery from "./components/Memories/Gallery";
import SubmittedProjects from "./components/SubmittedProjects/SubmittedProjects";
import AlumniStories from "./components/AlumniStories/AlumniStories";
import ViewAllTestimonials from "./components/AlumniStories/ViewAllTestimonials"; // Import ViewAllTestimonials
import ViewAllAlumni from "./components/AlumniStories/ViewAllAlumni"; // Import ViewAllAlumni
import ViewAllAwards from "./components/AlumniStories/ViewAllAwards"; // Import ViewAllAwards

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/alumni-directory" element={<AlumniDirectory />} />
            <Route path="/batch/:programName/:year" element={<BatchDetails />} />
            <Route path="/profile/:studentName" element={<StudentProfile />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:eventId" element={<EventDetails />} />
            <Route path="/upcoming-event/:eventId" element={<EventDetails />} />
            <Route path="/events/join-up" element={<JoinUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/gallery/:title" element={<Gallery />} />
            <Route path="/submitted-projects" element={<SubmittedProjects />} />
            <Route path="/alumni-stories" element={<AlumniStories />} />
            <Route path="/all-testimonials" element={<ViewAllTestimonials />} /> {/* Added ViewAllTestimonials route */}
            <Route path="/all-alumni" element={<ViewAllAlumni />} /> {/* Added ViewAllAlumni route */}
            <Route path="/all-awards" element={<ViewAllAwards />} /> {/* Added ViewAllAwards route */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;