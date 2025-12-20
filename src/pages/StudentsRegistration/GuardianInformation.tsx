import React, { useState } from "react";

const GuardianInformation: React.FC = () => {
  const [formData, setFormData] = useState({
    fatherName: "",
    fatherContact: "",
    motherName: "",
    motherContact: "",
    guardianType: "",
    guardianName: "",
    guardianRelation: "",
    guardianContact: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Auto-fill guardian based on dropdown
    if (name === "guardianType") {
      if (value === "Father") {
        setFormData((prev) => ({
          ...prev,
          guardianType: value,
          guardianName: prev.fatherName,
          guardianRelation: "Father",
          guardianContact: prev.fatherContact,
        }));
      } else if (value === "Mother") {
        setFormData((prev) => ({
          ...prev,
          guardianType: value,
          guardianName: prev.motherName,
          guardianRelation: "Mother",
          guardianContact: prev.motherContact,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          guardianType: value,
          guardianName: "",
          guardianRelation: "",
          guardianContact: "",
        }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    console.log("Guardian Info Saved:", formData);
    // Navigate to next step here
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-3xl p-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Guardian Information
      </h2>

      {/* Father & Mother Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Father's Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Father's Name</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            placeholder="Enter father's name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>

        {/* Father's Contact */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Father's Contact</label>
          <input
            type="text"
            name="fatherContact"
            value={formData.fatherContact}
            onChange={handleChange}
            placeholder="98XXXXXXXX"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>

        {/* Mother's Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Mother's Name</label>
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            placeholder="Enter mother's name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>

        {/* Mother's Contact */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Mother's Contact</label>
          <input
            type="text"
            name="motherContact"
            value={formData.motherContact}
            onChange={handleChange}
            placeholder="98XXXXXXXX"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>
      </div>

      {/* Guardian Selector */}
      <div className="mt-6">
        <label className="block text-gray-700 font-medium mb-2">Select Guardian</label>
        <select
          name="guardianType"
          value={formData.guardianType}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        >
          <option value="">-- Select Guardian --</option>
          <option value="Father">Father</option>
          <option value="Mother">Mother</option>
          <option value="Brother">Brother</option>
          <option value="Others">Others</option>
        </select>
      </div>

      {/* Guardian Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Guardian Name</label>
          <input
            type="text"
            name="guardianName"
            value={formData.guardianName}
            onChange={handleChange}
            placeholder="Enter guardian name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Relation with Guardian</label>
          <input
            type="text"
            name="guardianRelation"
            value={formData.guardianRelation}
            onChange={handleChange}
            placeholder="Father / Mother / Brother / Other"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>
      </div>

      {/* Guardian Contact */}
      <div className="mt-6">
        <label className="block text-gray-700 font-medium mb-2">Guardian Contact</label>
        <input
          type="text"
          name="guardianContact"
          value={formData.guardianContact}
          onChange={handleChange}
          placeholder="98XXXXXXXX"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />
      </div>

      {/* Save & Continue Button */}
      <div className="text-center mt-6">
        <button
          onClick={handleNext}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md transform hover:scale-105 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default GuardianInformation;
