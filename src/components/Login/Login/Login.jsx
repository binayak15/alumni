import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Form Data:", { email, password });
    alert("Login successful!"); // Temporary placeholder
  };

  return (
    <>
      {/* Header Section */}
      <div className="relative w-full h-32">
        <img
          src="src/assets/cover_page.png"
          alt="Header"
          className="w-full h-full object-cover"
        />
        <h2 className="absolute inset-0 bg-gray-800 bg-opacity-50 text-white text-2xl font-bold flex items-center justify-center">
          LOGIN
        </h2>
      </div>

      {/* Login Form */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
          <div className="p-8">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <img
                src="src/assets/cover_page.png"
                alt="Logo"
                className="h-20 w-20 object-contain"
              />
            </div>

            <h1 className="text-2xl font-bold mb-2 text-gray-700 text-center">
              WELCOME BACK
            </h1>
            <h2 className="text-center text-gray-500 mb-6">
              Sign in to your account here
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password *"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900"
              >
                Log-In
              </button>
            </form>

            {/* Footer Links */}
            <div className="text-center mt-4">
              <Link
                to="/reset-password"
                className="text-blue-500 hover:underline text-sm"
              >
                Forgot password
              </Link>
              <br />
              <Link to="/signup" className="text-blue-500 hover:underline text-sm">
                Join us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
