import { useRef } from "react";
import propTypes from "prop-types";
import { addCollected } from "../actions/collected.action";
import normalizeString from "../utils/normalizeString";

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

    if (normalizeString(digiName) === normalizeString(digimon.name)) {
      const digiData = {
        id: digimon.id,
        name: digimon.name,
        img: digimon.img,
        level: digimon.level,
      };
      const digiPointsWin = digiPoints + user.digi_point;
      const digiCollected = { userId: user.id, digimonId: digimon.id };
      dispatch(updateDigiPoint(user.id, { digiPoint: digiPointsWin }));
      dispatch(addCollected(digiCollected, digiData));
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
    img: propTypes.string,
    level: propTypes.string,
  }).isRequired,
  digiPoints: propTypes.number.isRequired,
  setGameState: propTypes.func.isRequired,
  dispatch: propTypes.func.isRequired,
  updateDigiPoint: propTypes.func.isRequired,
};

export default SubmitScratch;
