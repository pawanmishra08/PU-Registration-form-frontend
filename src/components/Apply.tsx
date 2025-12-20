import { useNavigate } from "react-router-dom";

const Apply = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 text-center bg-[#f9fbff] rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-[#004b8d] mb-4">
        IT Entrance Examination 2082
      </h1>
      <p className="text-base text-gray-800 leading-relaxed mb-6">
        You can register for Entrance Examination after clicking{" "}
        <strong>Start Registration</strong> button below. <br />
        Before starting registration you should complete Online Banking Payment
        by clicking <strong>Online Payment</strong> button below.
      </p>
      <p className="font-semibold mb-6">
        <strong>Candidates must pay before registration.</strong>
      </p>

      <div className="flex justify-center gap-5 mb-8">
        <button
          className="bg-[#004b8d] text-white py-3 px-6 rounded-lg text-base transition-colors duration-300 hover:bg-[#003366]"
          onClick={() => navigate("/StudentsRegistration")}
        >
          Start Registration
        </button>

        <button
          className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg text-base transition-colors duration-300 hover:bg-gray-300"
          onClick={() => navigate("/onlinepayment")}
        >
          Online Payment
        </button>
      </div>
    </div>
  );
};

export default Apply;
