import PropTypes from "prop-types";
import terriermon from "../assets/terriermon.gif";

function LoseGame({ clickRestart, setDigiPoints }) {
  return (
    <>
      <h2 className="h1">ScratchDigimon</h2>
      <div>
        <h2>You Lose</h2>
        <picture>
          <img src={terriermon} alt="terriermon" />
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
