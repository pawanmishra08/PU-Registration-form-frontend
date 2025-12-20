import React from "react";

const About: React.FC = () => {
  return (
    <div className=" w-full flex justify-end px-8 mt-1">
      <div className="w-[800px] bg-black shadow-lg rounded-2xl p-8 flex flex-col text-left overflow-hidden">

        <h2 className="text-3xl font-bold text-blue-700 mb-4">About Us</h2>

        <p className="text-blue-700 text-lg leading-relaxed">
          Purbanchal University School of Science & Technology (PUSAT), established in 2056 B.S. (1999 A.D.) in Biratnagar,
           is the sole constituent school of science and technology under Purbanchal University.
           Dedicated to attracting technical students nationwide, PUSAT offers high-quality education through innovative
           teaching methods, scholarships, and modern infrastructure including advanced labs and a well-equipped library
            with internet access. As a pioneer in IT education in Nepal, PUSAT was the first to introduce programs like
             BCA, BIT, B.Tech. AI, PGDCA, MCA, and MIT. These multidisciplinary undergraduate and postgraduate programs
              have produced graduates who now excel in top national and international organizations and universities.
              PUSAT continues to foster academic excellence and personal growth, contributing significantly to the IT
              and computer application sectors.
        </p>

        <p className="text-blue-700 text-lg mt-4 leading-relaxed">
          This portal makes services easier, faster, and more accessible to all students.
        </p>

      </div>
    </div>
  );
};

export default About;