import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white font-sans"
      style={{
        backgroundImage: `url('/run.jpeg')`,
      }}
    >
      {/* Hero Section */}
      <header className="flex flex-col items-center text-center px-4 py-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Navi Mumbai Run Club
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl">
          Join us every Sunday morning for an energizing run along the scenic routes of Navi Mumbai. Whether you're a beginner or a seasoned runner, NMRC welcomes all!
        </p>
        <Link
          to="/register"
          className="mt-8 px-6 py-3 bg-white text-black font-medium rounded-full shadow-lg hover:bg-purple-100 transition duration-300"
        >
          Register Now
        </Link>
      </header>

      {/* Highlights Section */}
      <section className="mt-16 text-center px-8">
        <h2 className="text-3xl font-semibold">Why Join NMRC?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mt-8">
            <h3 className="text-xl font-semibold">Community Spirit</h3>
            <p className="mt-2">
              Connect with like-minded individuals and build lasting friendships through fitness.
            </p>
          </div>
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mt-8">
            <h3 className="text-xl font-semibold">Scenic Routes</h3>
            <p className="mt-2">
              Experience the beautiful views of Navi Mumbai on our curated running tracks.
            </p>
          </div>
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mt-8">
            <h3 className="text-xl font-semibold">Health Benefits</h3>
            <p className="mt-2">
              Improve your physical and mental health while enjoying the fresh morning air.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-8 text-center text-sm">
        <p>&copy; 2025 Navi Mumbai Run Club. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
