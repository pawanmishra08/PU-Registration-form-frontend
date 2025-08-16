import { useNavigate } from "react-router-dom";
import "./onlinepayment.css";

const OnlinePayment = () => {
    const navigate = useNavigate();

    const handleclose = () => {
        navigate("/")
    }
  return (
    <div className="payment-container">
      <h1 className="payment-title">Choose Your Payment Method</h1>
      <div className="payment-buttons">
        <a
          href="https://esewa.com.np"
          target="_blank"
          rel="noopener noreferrer"
          className="payment-btn esewa"
        >
          Pay with eSewa
        </a>
        <a
          href="https://khalti.com"
          target="_blank"
          rel="noopener noreferrer"
          className="payment-btn khalti"
        >
          Pay with Khalti
        </a>
        <a
          href="https://connectips.com"
          target="_blank"
          rel="noopener noreferrer"
          className="payment-btn connectips"
        >
          Pay with ConnectIPS
        </a>
        <a  onClick={handleclose}
        //   target="_blank"
        //   rel="noopener noreferrer"
          className="payment-btn close"
        >
          close
        </a>
      </div>
    </div>
  );
};

export default OnlinePayment;
