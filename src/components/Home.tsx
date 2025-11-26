import React from "react";
import img1 from '../images/pu.jpg';
import { useNavigate } from "react-router-dom";
import About from "./About";
import Services from "./Services";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">

      {/* Hero Section */}
      <div
        className="relative h-screen w-full bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            Welcome to Purbanchal University
          </h2>
          <p className="text-lg md:text-2xl mt-4 drop-shadow-md">
            Office of the Controller of Examinations, Biratnagar
          </p>

          <button
            onClick={() => navigate("/Apply")}
            className="mt-8 bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full flex justify-between px-8 mt-10">
      <div className="w-full flex justify-start px-8 mt-10">
        <About />
      </div>

      {/* Services Section */}
      <div className="mt-10 mb-20">
        <Services />
      </div>
      </div>

    </div>
  );
};

export default Home;
