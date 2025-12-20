import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PersonalInformation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    province: "",
    district: "",
    municipality: "",
    Nationality: "",
  });

  const navigate = useNavigate();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Personal Information Submitted!");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-md rounded-2xl p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center text-blue-800">
        Personal Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Enter first name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Middle Name</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter middle name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Enter last name"
            />
          </div>
        </div>

        {/* DOB & Gender */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="input-field"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="98XXXXXXXX"
            />
          </div>
        </div>

        {/* Address Section */}
        <div>
          <label className="block text-gray-700 mb-2">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            rows={2}
            className="input-field"
            placeholder="Enter your full address"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Province</label>
            <input
              type="text"
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Province name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">District</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="District name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Municipality</label>
            <input
              type="text"
              name="municipality"
              value={formData.municipality}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Municipality name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Nationality</label>
            <select
            name= "Nationality"
            value={ formData.Nationality}
            onChange={handleChange}
            required className="input-field"
            >
              <option value =""> select Nationality</option>
              <option value ="Nepali">Nepali</option>
              <option value ="others">others</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
          onClick={() => navigate("/StudentsRegistration/Program")}
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-200"
          >
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;
