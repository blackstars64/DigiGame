import PropTypes from "prop-types";
import terriermon from "../assets/terriermon.gif";

function LoseGame({ clickRestart, setDigiPoints }) {
  return (
    <>
      <h2 className="h1">Scratch Digimon</h2>
      <div className="c-lg">
        <h3>You Lose</h3>
        <picture className="c-lg-terriermon">
          <img className="lg-terriermon" src={terriermon} alt="terriermon" />
        </picture>
        <button
          className="btn-violet"
          onClick={() => {
            clickRestart();
            setDigiPoints(400);
          }}
          type="button"
        >
          Continue
        </button>
      </div>
    </>
  );
}

LoseGame.propTypes = {
  clickRestart: PropTypes.func.isRequired,
  setDigiPoints: PropTypes.func.isRequired,
};

export default LoseGame;
