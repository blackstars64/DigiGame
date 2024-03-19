import PropTypes from "prop-types";
import DigimonCard from "./DigimonCard";

function WinGame({ digimon, digiPoints, setDigiPoints, clickRestart }) {
  return (
    <>
      <h2 className="h1">ScratchDigimon</h2>
      <div className="wg-c">
        <h3>You Win</h3>
        <DigimonCard digimon={digimon} />
      </div>
      <p className="wg-dp">and {digiPoints}DP</p>
      <button
        className="btn-violet"
        onClick={() => {
          setDigiPoints(400);
          clickRestart();
        }}
        type="button"
      >
        Continue
      </button>
    </>
  );
}

WinGame.propTypes = {
  digimon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    level: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
  digiPoints: PropTypes.number.isRequired,
  setDigiPoints: PropTypes.func.isRequired,
  clickRestart: PropTypes.func.isRequired,
};

export default WinGame;
