import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./students_registration.css";

const StudentsRegistration = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    stud_name: "",
    email: "",
    id_type: "",
    voucher_no: "",
    voucher_image: null as File | null,
    phone: "",
    level: "",
    program: "",
    dob_bs: "",
    dob_ad: "",
    gender: "",
    issued_date: "",
    issued_district: "",
    passport_number: "",
    license_number: "",
    photo: null as File | null,
    tenth_marksheet: null as File | null,
    tenth_character: null as File | null,
    tenth_gpa: "",
    tenth_year: "",
    tenth_percentage: "",
    eleventh_marksheet: null as File | null,
    eleventh_character: null as File | null,
    eleventh_gpa: "",
    eleventh_year: "",
    eleventh_percentage: "",
    citizenship_front: null as File | null,
    citizenship_back: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // Submit to backend here
  };

  // Faculty options based on level
  const getFacultyOptions = () => {
    if (formData.level === "bachelor") {
      return [
        { value: "bit", label: "Bachelor in Information Technology (BIT)" },
        { value: "bca", label: "Bachelor in Computer Application (BCA)" },
        { value: "AI", label: "Btech. in AI" },
        { value: "pgdca", label: "PGDCA" },
      ];
    } else if (formData.level === "master") {
      return [
        { value: "mit", label: "Master in Information Technology (MIT)" },
        { value: "mca", label: "Master in Computer Application (MCA)" },
      ];
    }
    return [];
  };

  return (
    <div className="students-container">
      <h1 style={{ textDecoration: "underline" }}>
        Entrance Registration Application (ERA)
      </h1>
      <p style={{ fontWeight: "bold" }}>Applicant's registration Information</p>
      <p style={{ color: "red" }}> (All fields are mandatory* )</p>

      <form className="students-form" onSubmit={handleSubmit}>
        {/* Student Name */}
        <div className="form-group">
          <label>Applicant Name *</label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="middle_name"
              value={formData.middle_name}
              onChange={handleChange}
              placeholder="Middle Name"
            />
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
        </div>

        {/* PP Size Photo */}
        <div className="form-group">
          <label>PP Size Photo *</label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>

        {/* Voucher */}
        <div className="form-group">
          <label>Voucher No *</label>
          <input
            type="text"
            name="voucher_no"
            value={formData.voucher_no}
            onChange={handleChange}
            placeholder="Enter Voucher No"
            required
          />
        </div>
        <div className="form-group">
          <label>Voucher Image *</label>
          <input
            type="file"
            name="voucher_image"
            accept="image/*,.pdf"
            onChange={handleChange}
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

        {/* Level */}
        <div className="form-group">
          <label>Level *</label>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            required
          >
            <option value="">Select Level</option>
            <option value="bachelor">Bachelor</option>
            <option value="master">Master</option>
          </select>
        </div>

        {/* Faculty */}
        <div className="form-group">
          <label>Program *</label>
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            required
            disabled={!formData.level}
          >
            <option value="">Select Program</option>
            {getFacultyOptions().map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Date of Birth */}
        <div className="form-group">
          <label>Date of Birth *</label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              name="dob_bs"
              value={formData.dob_bs}
              onChange={handleChange}
              placeholder="YYYY-MM-DD"
              required
            />
            <span style={{ margin: "5px" }}>BS</span>
            <input
              type="date"
              name="dob_ad"
              value={formData.dob_ad}
              onChange={handleChange}
              required
            />
            <span style={{ margin: "5px" }}>AD</span>
          </div>
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

        {/* Identification type */}
        <div className="form-group">
          <label>Identification Type *</label>
          <select
            name="id_type"
            value={formData.id_type}
            onChange={handleChange}
            required
          >
            <option value="">Select ID Type</option>
            <option value="citizenship">Citizenship</option>
            <option value="passport">Passport</option>
            <option value="license">Driver's License</option>
          </select>
        </div>

        {/* 10th Details */}
        <h3 style={{ marginTop: "20px", textDecoration: "underline" }}>
          10th Grade Details
        </h3>
        <div className="rectangle-box">
          <div className="form-row">
            <div>
              <label>Marksheet *</label>
              <input
                type="file"
                name="tenth_marksheet"
                accept="image/*,.pdf"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Character Certificate *</label>
              <input
                type="file"
                name="tenth_character"
                accept="image/*,.pdf"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>GPA *</label>
              <input
                type="text"
                name="tenth_gpa"
                value={formData.tenth_gpa}
                onChange={handleChange}
                placeholder="e.g. 3.6"
                required
              />
            </div>
            <div>
              <label>Passed Year *</label>
              <input
                type="text"
                name="tenth_year"
                value={formData.tenth_year}
                onChange={handleChange}
                placeholder="YYYY"
                required
              />
            </div>
            <div>
              <label>Percentage *</label>
              <input
                type="text"
                name="tenth_percentage"
                value={formData.tenth_percentage}
                onChange={handleChange}
                placeholder="e.g. 85%"
                required
              />
            </div>
          </div>
        </div>

        {/* 11th Details */}
        <h3 style={{ marginTop: "20px", textDecoration: "underline" }}>
          11th Grade Details
        </h3>
        <div className="rectangle-box">
          <div className="form-row">
            <div>
              <label>Marksheet *</label>
              <input
                type="file"
                name="eleventh_marksheet"
                accept="image/*,.pdf"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Character Certificate *</label>
              <input
                type="file"
                name="eleventh_character"
                accept="image/*,.pdf"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>GPA *</label>
              <input
                type="text"
                name="eleventh_gpa"
                value={formData.eleventh_gpa}
                onChange={handleChange}
                placeholder="e.g. 3.5"
                required
              />
            </div>
            <div>
              <label>Passed Year *</label>
              <input
                type="text"
                name="eleventh_year"
                value={formData.eleventh_year}
                onChange={handleChange}
                placeholder="YYYY"
                required
              />
            </div>
            <div>
              <label>Percentage *</label>
              <input
                type="text"
                name="eleventh_percentage"
                value={formData.eleventh_percentage}
                onChange={handleChange}
                placeholder="e.g. 80%"
                required
              />
            </div>
          </div>
        </div>

        {/* Citizenship */}
        <h3 style={{ marginTop: "20px", textDecoration: "underline" }}>
          Citizenship Documents
        </h3>
        <div className="form-group" style={{ display: "flex", gap: "15px" }}>
          <div>
            <label>Citizenship (Front) *</label>
            <input
              type="file"
              name="citizenship_front"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Citizenship (Back) *</label>
            <input
              type="file"
              name="citizenship_back"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>
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
    <StudentsRegistration />
  </React.StrictMode>
);

export default StudentsRegistration;
