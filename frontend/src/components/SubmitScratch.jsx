import { useRef } from "react";
import propTypes from "prop-types";
import { addCollected } from "../actions/collected.action";

function SubmitScratch({
  dispatch,
  updateDigiPoint,
  user,
  digimon,
  digiPoints,
  setGameState,
}) {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const digiName = form.current.digiName.value;

    if (digiName === digimon.name) {
      const digiPointsWin = digiPoints + user.digi_point;
      const digiCollected = { userId: user.id, digimonId: digimon.id };
      dispatch(updateDigiPoint(user.id, { digiPoint: digiPointsWin }));
      dispatch(addCollected(digiCollected));
      setGameState("win");
    } else {
      setGameState("lose");
    }
  };
  return (
    <section className="c-submitScratch">
      <form
        ref={form}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input className="textarea" type="text" id="digiName" />
        <button className="btn-white" type="submit">
          Validate
        </button>
      </form>
    </section>
  );
}

SubmitScratch.propTypes = {
  user: propTypes.shape({
    id: propTypes.number,
    username: propTypes.string,
    email: propTypes.string,
    digi_point: propTypes.number,
  }).isRequired,
  digimon: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
  }).isRequired,
  digiPoints: propTypes.number.isRequired,
  setGameState: propTypes.func.isRequired,
  dispatch: propTypes.func.isRequired,
  updateDigiPoint: propTypes.func.isRequired,
};

export default SubmitScratch;
