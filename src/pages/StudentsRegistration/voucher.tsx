import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Voucher: React.FC = () => {
  const [formData, setFormData] = useState({
    voucherNumber: "",
    voucherDate: "",
    amount: "",
    remarks: "",
    voucherAppliedBy: "",
    voucherFile: null as File | null,
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as any;

    if (name === "voucherFile") {
      setFormData((prev) => ({ ...prev, voucherFile: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Voucher Submitted:", formData);
    // Handle form submission or navigation here
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-3xl p-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Voucher Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Voucher Number & Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Voucher Number</label>
            <input
              type="text"
              name="voucherNumber"
              value={formData.voucherNumber}
              onChange={handleChange}
              placeholder="Enter voucher number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Voucher Date</label>
            <input
              type="date"
              name="voucherDate"
              value={formData.voucherDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              required
            />
          </div>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition no-spinner"
            required
          />
        </div>

        {/* Voucher Applied By */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Voucher Applied By</label>
          <input
            type="text"
            name="voucherAppliedBy"
            value={formData.voucherAppliedBy}
            onChange={handleChange}
            placeholder="Enter name of person applying voucher"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            required
          />
        </div>

        {/* Voucher File Upload */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Upload Voucher (JPG, PNG, PDF)</label>
          <input
            type="file"
            name="voucherFile"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            required
          />
        </div>

        {/* Remarks */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Remarks</label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            placeholder="Any additional notes..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            rows={3}
          />
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
          onClick={() => navigate("/StudentsRegistration/GuardianInformation")}
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

export default Voucher;
