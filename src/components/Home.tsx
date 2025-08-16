import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const deadline = new Date("2025-09-02T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = deadline - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-container">
      <h1 className="exam-title">BIT Entrance Examination 2082</h1>
      <p className="exam-description">
        You can register for Entrance Examination after clicking{" "}
        <strong>Start Registration</strong> button below. <br />
        Before starting registration you should complete Online Banking Payment
        by clicking <strong>Online Payment</strong> button below.
      </p>

      <div className="button-group">
        <button
         className="primary-btn"
         onClick={() => navigate("/students_registration")}
         >Start Registration
         </button>

        <button
          className="secondary-btn"
          onClick={() => navigate("/onlinepayment")}
        >
          Online Payment
        </button>
      </div>

      <div className="countdown">
        <h3>
          Time Left for Registration:{" "}
          <span>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Home;
