import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./students.css"; // Make sure to style similar to screenshot

const Students_registration = () => {
  const [formData, setFormData] = useState({
    stud_name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    program_id: "",
    dept_id: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // Submit to backend here
  };

  return (
    <div className="students-container">
      <h1 style={{textDecoration: "underline"}}>Entrance Registration Application(ERA)</h1>
      <p style={{fontWeight: "bold"}}>Applicant's registration Information</p>
      <p style={{color: "red"}}> (All fields are mandatory* )</p>

      <form className="students-form" onSubmit={handleSubmit}>
        {/* Student Name */}
        <div className="form-group">
          <label>Student Name *</label>
          <input
            type="text"
            name="stud_name"
            value={formData.stud_name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            required
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label>Phone *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="98XXXXXXXX"
            required
          />
        </div>

        {/* Date of Birth */}
        <div className="form-group">
          <label>Date of Birth *</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Gender *</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>

        {/* Program Id */}
        <div className="form-group">
          <label>Program ID *</label>
          <input
            type="text"
            name="program_id"
            value={formData.program_id}
            onChange={handleChange}
            required
          />
        </div>

        {/* Department Id */}
        <div className="form-group">
          <label>Department ID *</label>
          <input
            type="text"
            name="dept_id"
            value={formData.dept_id}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Students_registration />
  </React.StrictMode>
);

export default Students_registration;