import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Program: React.FC = () => {
  const [formData, setFormData] = useState({
    programLevel: "",
    faculty: "",
    programName: "",
    academicYear: "",
    shift: "",
    registrationNumber: "",
  });

  const navigate = useNavigate();

  const facultyOptions: Record<string, string[]> = {
    Bachelor: [
      "Science and Technology",
      "Management",
      "Arts",
      "Education",
      "Medical Sciences",
      "Law",
      "Engineering",
    ],
    Master: ["Science and Technology", "Management", "Education", "Arts", "Law"],
  };

  const programOptions: Record<string, Record<string, string[]>> = {
    Bachelor: {
      "Science and Technology": ["BSc CSIT", "BIT", "BCA", "PGDCA"],
      Management: ["BBA", "BIM", "BBS"],
      Arts: ["BA English", "BA Sociology", "BA Journalism"],
      Education: ["BEd"],
      "Medical Sciences": ["BPH", "BSc Nursing", "BPharma"],
      Law: ["BALLB"],
      Engineering: [
        "BE Civil",
        "BE Computer",
        "BE Electrical",
        "BE Electronics & Communication",
        "BE Mechanical",
        "BE Architecture",
      ],
    },
    Master: {
      "Science and Technology": ["MIT", "MCA"],
      Management: ["MBA", "MBS", "MBM"],
      Arts: ["MA English", "MA Sociology"],
      Education: ["MEd"],
      Law: ["LLM"],
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "programLevel") {
      setFormData({ ...formData, programLevel: value, faculty: "", programName: "" });
      return;
    }

    if (name === "faculty") {
      setFormData({ ...formData, faculty: value, programName: "" });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.programLevel || !formData.faculty || !formData.programName) {
      alert("Please fill all required fields!");
      return;
    }

    navigate("/StudentsRegistration/Academic");
  };

  const availableFaculties =
    formData.programLevel && facultyOptions[formData.programLevel]
      ? facultyOptions[formData.programLevel]
      : [];

  const availablePrograms =
    formData.programLevel &&
    formData.faculty &&
    programOptions[formData.programLevel][formData.faculty]
      ? programOptions[formData.programLevel][formData.faculty]
      : [];

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-3xl p-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Program Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Program Level */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Program Level</label>
          <select
            name="programLevel"
            value={formData.programLevel}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          >
            <option value="">Select Level</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
          </select>
        </div>

        {/* Faculty & Program Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Faculty */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Faculty</label>
            <select
              name="faculty"
              value={formData.faculty}
              onChange={handleChange}
              required
              disabled={!formData.programLevel}
              className={`w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition ${
                !formData.programLevel ? "bg-gray-100 cursor-not-allowed text-gray-400" : ""
              }`}
            >
              <option value="">
                {formData.programLevel ? "Select Faculty" : "Select Program Level First"}
              </option>
              {availableFaculties.map((faculty) => (
                <option key={faculty} value={faculty}>
                  {faculty}
                </option>
              ))}
            </select>
          </div>

          {/* Program Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Program Name</label>
            <select
              name="programName"
              value={formData.programName}
              onChange={handleChange}
              required
              disabled={!formData.faculty}
              className={`w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition ${
                !formData.faculty ? "bg-gray-100 cursor-not-allowed text-gray-400" : ""
              }`}
            >
              <option value="">
                {formData.faculty ? "Select Program" : "Select Faculty First"}
              </option>
              {availablePrograms.map((program) => (
                <option key={program} value={program}>
                  {program}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Shift & Academic Year */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Shift</label>
            <select
              name="shift"
              value={formData.shift}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            >
              <option value="">Select Shift</option>
              <option value="Morning">Morning</option>
              <option value="Day">Day</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Academic Year</label>
            <input
              type="text"
              name="academicYear"
              value={formData.academicYear}
              onChange={handleChange}
              required
              placeholder="e.g., 2081/82"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
          onClick={() => navigate("/StudentsRegistration/AcademicInformation")}
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md transform hover:scale-105 transition"
          >
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Program;
