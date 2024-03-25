import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DigiCrush() {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);
  return <p>DigiCrush</p>;
}

export default DigiCrush;
