import React from "react";

const About: React.FC = () => {
  return (
    <div className="w-full flex justify-start px-8 mt-10">
      <div className="w-[800px] h-[400px] bg-black shadow-lg rounded-2xl p-8 flex flex-col justify-center text-left">

        <h2 className="text-3xl font-bold text-blue-700 mb-4">About Us</h2>

        <p className="text-blue-700 text-lg leading-relaxed">
          Purbanchal University is dedicated to providing quality education and opportunities for students across Nepal.
        </p>

        <p className="text-blue-700 text-lg mt-4 leading-relaxed">
          This portal makes services easier, faster, and more accessible to all students.
        </p>

      </div>
    </div>
  );
};

export default About;