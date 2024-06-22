import React from "react";
import "../index.css";

const AboutUsPage = () => {
  return (
    <div className="container mx-auto py-8 px-4 fade-in">
      <h1 className="text-4xl font-bold mb-6 text-blue-600 slide-in">
        About Us
      </h1>
      <p className="mb-6">
        Welcome to our blog! We are passionate about sharing our knowledge and
        experiences with the world. Our team of writers is dedicated to
        providing you with insightful and engaging content on a wide range of
        topics. We believe in the power of information and aim to inspire,
        educate, and entertain our readers. Thank you for being a part of our
        journey.
      </p>
      <div className="flex items-center justify-center mb-6">
        <img
          src="https://via.placeholder.com/400"
          alt="Team"
          className="w-80 h-80 object-cover rounded-full shadow-lg transform transition duration-500 hover:scale-105"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h2>
      <p className="mb-6">
        Our mission is to deliver high-quality content that enriches the lives
        of our readers. We strive to create a platform where diverse voices can
        be heard and where ideas can flourish. Through our blog, we aim to
        foster a community of curious minds who are eager to learn and grow
        together.
      </p>
    </div>
  );
};

export default AboutUsPage;
