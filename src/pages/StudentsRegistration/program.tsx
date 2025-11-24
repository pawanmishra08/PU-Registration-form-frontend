import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Program: React.FC = () => {
  const [formData, setFormData] = useState({
    programLevel: "",
    faculty: "",
    programName: "",
    semester: "",
    academicYear: "",
    shift: "",
    registrationNumber: "",
  });

  const navigate = useNavigate();

  // 🎓 Faculties based on program level
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
    Master: [
      "Science and Technology",
      "Management",
      "Education",
      "Arts",
      "Law",
    ],
  };

  // 🎓 Programs based on faculty + program level
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

    // Reset dependent dropdowns
    if (name === "programLevel") {
      setFormData({
        ...formData,
        programLevel: value,
        faculty: "",
        programName: "",
      });
      return;
    }

    if (name === "faculty") {
      setFormData({
        ...formData,
        faculty: value,
        programName: "",
      });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.programLevel) {
      alert("Please select Program Level first!");
      return;
    }

    if (!formData.faculty) {
      alert("Please select Faculty!");
      return;
    }

    if (!formData.programName) {
      alert("Please select Program Name!");
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
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-md rounded-2xl p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center text-blue-800">
        Program Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Program Level FIRST */}
        <div>
          <label className="block text-gray-700 mb-2">Program Level</label>
          <select
            name="programLevel"
            value={formData.programLevel}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select Level</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
          </select>
        </div>

        {/* Faculty & Program Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* FACULTY */}
          <div>
            <label className="block text-gray-700 mb-2">Faculty</label>
            <select
              name="faculty"
              value={formData.faculty}
              onChange={handleChange}
              required
              disabled={!formData.programLevel}
              className={`input-field ${
                !formData.programLevel ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            >
              <option value="">
                {formData.programLevel
                  ? "Select Faculty"
                  : "Select Program Level First"}
              </option>

              {availableFaculties.map((faculty) => (
                <option key={faculty} value={faculty}>
                  {faculty}
                </option>
              ))}
            </select>
          </div>

          {/* PROGRAM NAME */}
          <div>
            <label className="block text-gray-700 mb-2">Program Name</label>
            <select
              name="programName"
              value={formData.programName}
              onChange={handleChange}
              required
              disabled={!formData.faculty}
              className={`input-field ${
                !formData.faculty ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            >
              <option value="">
                {formData.faculty
                  ? "Select Program"
                  : "Select Faculty First"}
              </option>

              {availablePrograms.map((program) => (
                <option key={program} value={program}>
                  {program}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Remaining fields same */}
        <div>
          <label className="block text-gray-700 mb-2">Semester</label>
          <select
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select Semester</option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <option key={num} value={`${num}`}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Academic Year</label>
          <input
            type="text"
            name="academicYear"
            value={formData.academicYear}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="e.g., 2081/82"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Shift</label>
            <select
              name="shift"
              value={formData.shift}
              onChange={handleChange}
              required
              className="input-field"
            >
              <option value="">Select Shift</option>
              <option value="Morning">Morning</option>
              <option value="Day">Day</option>
            </select>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md"
          >
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Program;
