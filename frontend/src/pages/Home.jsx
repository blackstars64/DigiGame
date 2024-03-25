import { Link, useNavigate } from "react-router-dom";
import "../scss/Home.scss";
import { useEffect } from "react";

function Home() {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <section className="home">
      <h1>DigiHome</h1>
      <div className="h-c-p">
        <p className="h-title">Welcome</p>
        <p className="h-p">
          Explore the world of Digimons with our exciting scratch card game!
          <br /> Win unique Digimon cards and Digipoints to expand your
          collection. <br /> <br /> Join the Digichat to share experiences and
          connect with fellow fans.
          <span className="h-p-w">Start your adventure now!</span>
        </p>
        <Link to="/scratchDigimon">
          <button className="btn-violet" type="button">
            ScratchDigimon
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
