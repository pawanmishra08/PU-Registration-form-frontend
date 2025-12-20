import { useNavigate } from "react-router-dom";

const OnlinePayment = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto mt-16 p-8 bg-white rounded-xl shadow-md text-center">
      <h1 className="text-2xl font-bold mb-6 text-blue-900">
        Choose Your Payment Method
      </h1>

      <div className="flex flex-col gap-5">
        <a
          href="https://esewa.com.np"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-5 font-semibold text-white rounded-lg bg-green-600 hover:opacity-90 transition"
        >
          Pay with eSewa
        </a>

        <a
          href="https://khalti.com"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-5 font-semibold text-white rounded-lg bg-purple-700 hover:opacity-90 transition"
        >
          Pay with Khalti
        </a>

        <a
          href="https://connectips.com"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-5 font-semibold text-white rounded-lg bg-black hover:opacity-90 transition"
        >
          Pay with ConnectIPS
        </a>

        <button
          onClick={handleClose}
          className="py-3 px-5 font-semibold text-white rounded-lg bg-red-600 hover:opacity-90 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default OnlinePayment;
