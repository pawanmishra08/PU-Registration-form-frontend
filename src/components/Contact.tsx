import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact: React.FC = () => {
  return (
    <div className="w-full flex justify-center px-8 mt-10">
      <div className="w-full max-w-[1200px] h-[300px] bg-black-800 shadow-lg rounded-2xl p-10 flex flex-col text-left">

        {/* <h2 className="text-xl font-bold text-blue-700 mb-8">Contact Us</h2> */}

        {/* LEFT + RIGHT SECTION */}
        <div className="flex flex-col md:flex-row w-full gap-10">

          {/* LEFT SIDE - CONTACT INFO */}
          <div className="flex flex-col space-y-6 w-full md:w-1/2 bg-black-800 h-[250px] p-6 rounded-xl">
            <h2 className="text-xl font-bold text-blue-700 mb-8">Contact Us</h2>
            <div className="flex items-center space-x-4">
              <FiPhone className="text-blue-700 w-6 h-6" />
              <span className="text-blue-700 text-lg">Phone: 98xxxxxxxx</span>
            </div>

            <div className="flex items-center space-x-4">
              <FiMail className="text-blue-700 w-6 h-6" />
              <span className="text-blue-700 text-lg">Email: xxx@gmail.com</span>
            </div>

            <div className="flex items-center space-x-4">
              <FiMapPin className="text-blue-700 w-6 h-6" />
              <span className="text-blue-700 text-lg">Address: xxx</span>
            </div>
          </div>

          {/* RIGHT SIDE - FEEDBACK FORM */}
          <div className="w-full md:w-1/2 bg-blue-900 p-6 rounded-xl max-w-[1200px] h-[250px]">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">Send Us Your Feedback</h3>

            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-700"
              />

              <textarea
                placeholder="Your Feedback"
                minLength={20}
                required
                rows={2}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-700"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg font-semibold"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
