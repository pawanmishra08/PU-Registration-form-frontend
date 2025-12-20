import React from "react";

const Services: React.FC = () => {
  return (
    <div className="w-full flex justify-end px-8 mt-10">
      <div className="w-[800px] h-[400px] bg-black shadow-lg rounded-2xl p-8 flex flex-col text-left overflow-hidden">

        <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Services</h2>

        <ul className="list-disc list-inside text-blue-700 text-lg space-y-3 overflow-y-auto">
          <li>Student Online Registration</li>
          <li>Document Upload & Verification</li>
          <li>Program & Course Application</li>
          <li>Quota / Reservation Application Processing</li>
          <li>Online Voucher Submission</li>
          <li>Digital Student Record Management</li>
          <li>Examination Form Submission</li>
        </ul>

      </div>
    </div>
  );
};

export default Services;